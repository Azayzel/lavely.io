import { GraphQLList as List } from 'graphql';
import ArticleType from '../types/ArticleType';
import db from '../../db/models';

const articles = {
  type: new List(ArticleType),
  async resolve() {
    const articles = await db.sequelize.models.Article.findAll()
    return articles;
  },
};

export default articles;
