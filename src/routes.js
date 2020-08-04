import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// HOC to pass props
const Hoc = props => props.children;

// routes
const Login = lazy(() => import('./pages/login'))
const Register = lazy(() => import('./pages/register'))
const About = lazy(() => import('./pages/about'))
const Contact = lazy(() => import('./pages/contact'))
const Home = lazy(() => import('./pages/home'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const Error = lazy(() => import('./pages/error'))
const NotFound = lazy(() => import('./pages/not-found'))
const Privacy = lazy(() => import('./pages/privacy/index.md'))
const Editor = lazy(() => import('./pages/editor'))

// Change Log
// const ChangeLog = lazy(() => import('containers/ChangeLog/ChangeLog'))

// Admin Views
// import AdminHOC from 'containers/Admin/AdminHOC'
// const isAuthenticated = false

/**
 * Route Guard to protect Admin/ SIA only routes
 * @param  {Component} {component
 * @param  {} ...rest}
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        let _state = props.location.state

        return _state ? (
          _state.isAdmin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/not-found',
                state: {
                  from: props.location,
                  message: 'You do not have permission to this page',
                },
              }}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
                message:
                  "Whoops, looks like we don't have all the data we need.",
              },
            }}
          />
        )
      }}
    />
  )
}

const BaseRouter = () => (
  <Suspense fallback={<p>Loading</p>}>
    <Hoc>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/contact' component={Contact} />
        <Route path='/error' component={Error} />
        <Route path="/editor" component={Editor} />
        <Route path='/' exact component={Home} />
        {/* <ProtectedRoute exact path='/admin' component={} />*/}

        <Route component={NotFound} />
      </Switch>
    </Hoc>
  </Suspense>
)

export default BaseRouter
