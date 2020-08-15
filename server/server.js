import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt, { UnauthorizedError as Jwt401Error } from 'express-jwt';
import { graphql } from 'graphql';
import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from './db/models';
import schema from './graphql/schema';
import config from './config';
// Custom middleware
import customAuthMiddleware from './middleware/custom-auth-middleware';
import passport from './middleware/passport';



process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

const app = express();

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use('/static',express.static(path.join(__dirname, 'static')));
app.use(cookieParser());
app.use(customAuthMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//
// Authentication
// -----------------------------------------------------------------------------
app.use(
  expressJwt({
    secret: config.auth.jwt.secret,
    credentialsRequired: false,
    getToken: req => req.cookies.id_token,
  }),
);

// Error handler for express-jwt
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err instanceof Jwt401Error) {
    console.error('[express-jwt-error]', req.cookies.id_token);
    // `clearCookie`, otherwise user can't use web-app until cookie expires
    res.clearCookie('id_token');
  }
  next(err);
});

app.use(passport.initialize());

app.get(
  '/login/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'user_location'],
    session: false,
  }),
);
app.get(
  '/login/facebook/return',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false,
  }),
  (req, res) => {
    const expiresIn = '1h';
    const token = jwt.sign(req.user, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.redirect('/');
  },
);

app.post('/login', async (req, res) => {
  try {
    const { dataValues } = await db.sequelize.models.User.authenticate(
      req.body.email,
      req.body.password,
      10,
    );
    if (dataValues) {
      req.user = dataValues;
      const expiresIn = 60;
      const token = jwt.sign(dataValues, config.auth.jwt.secret, { expiresIn });
      res.cookie('id_token', token, {
        maxAge: 1000 * expiresIn,
        httpOnly: true,
      });
      const response = {
        id: dataValues.id,
        email: dataValues.email,
        name: dataValues.name,
        avatar: dataValues.avatar,
        isAdmin: dataValues.isAdmin,
        IsSuper: dataValues.IsSuper,
      };
      res.status(200).json(response);
    }
  } catch (err) {
    res.status(404).json('Invalid email or password');
  }
});

app.post('/register', async (req, res) => {
  // hash the password provided by the user with bcrypt so that
  // we are never storing plain text passwords. This is crucial
  // for keeping your db clean of sensitive data
  try {
    // create a new user with the password hash from bcrypt
    const hash = bcrypt.hashSync(req.body.password, 10);

    const tempUser = {
      ...req.body,
      emailConfirmed: false,
      password: hash,
    };

    const { dataValues } = await db.sequelize.models.User.create(tempUser);

    // data will be an object with the user and it's authToken
    //let data = await user.authorize()

    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(dataValues, config.auth.jwt.secret, { expiresIn });
    res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
    res.status(200).send(dataValues)
  } catch (err) {
    return res.status(400).send(err);
  }
});

//
// GraphQL, Register API middleware
// -----------------------------------------------------------------------------
app.use(
  '/graphql',
  expressGraphQL(req => ({
    schema,
    graphiql: true,
    rootValue: { request: req },
    pretty:true,
  })),
);

//
// Home, send back html
app.get('/', function(req, res) {
  // router in the javascript app can render the necessary components
  res.sendFile(path.join(__dirname,'/index.html'));
})

//
// Launch the server
// -----------------------------------------------------------------------------
db.sequelize
  //.sync({ force: true})
  .authenticate()
  .then(() => {
    // inside our db sync callback, we start the server
    // this is our way of making sure the server is not listening
    // to requests if we have not made a db connection
      app.listen(config.port, () => {
        console.info(`
        The server is running at http://localhost:${config.port}/`);
      });
  })
  .catch(err => console.error('Unable to start: ', err.stack));


