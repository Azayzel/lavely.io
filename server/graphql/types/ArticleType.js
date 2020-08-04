import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
  GraphQLList as ListType,
} from 'graphql';

const ArticleType = new ObjectType({
  name: 'Articles',
  fields: {
    title: { type: new NonNull(StringType) },
    normalizedUrl: { type: new NonNull(StringType) },
    author: { type: StringType },
    innerHtml: { type: StringType },
    likes: { type: IntType },
    responses: { type: StringType },
    image: { type: StringType}
  },
});

export default ArticleType;
