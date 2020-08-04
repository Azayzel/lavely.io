import { ARTICLES_START, ARTICLES_SUCCESS, ARTICLES_FAIL } from '../../actions/articles';
import { updateObject } from '../../utility';

const initialState = {
  articles: null,
  error: null,
  loading: false,
  loaded: false,
};

const articlesStart = state => {
  return updateObject(state, {
    error: null,
    loading: true,
    loaded: false,
  });
};

const articlesSuccess = (state, { articles }) => {
  return updateObject(state, {
    articles: articles,
    error: null,
    loading: false,
    loaded: true,
  });
};

const articlesFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_START:
      return articlesStart(state, action);
    case ARTICLES_SUCCESS:
      return articlesSuccess(state, action);
    case ARTICLES_FAIL:
      return articlesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
