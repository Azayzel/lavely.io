export const ARTICLES_START = 'ARTICLES_START';
export const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS';
export const ARTICLES_FAIL = 'ARTICLES_FAIL';

export const articlesStart = () => {
  return {
    type: ARTICLES_START,
  };
};

export const articlesSuccess = articles => {
  return {
    type: ARTICLES_SUCCESS,
    articles: articles,
  };
};

export const articlesFail = error => {
  return {
    type: ARTICLES_FAIL,
    error: error,
  };
};

export const getLatestArticles = () => {
  return async dispatch => {
    dispatch(articlesStart());

    const resp = await fetch('/graphql',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        query: '{articles{title,author,innerHtml, normalizedUrl, likes, responses, image}}',
        }), // body data type must match "Content-Type" header
    });
    console.log(resp)
    if (resp.status === 200) {
      const { data: { articles } } = await resp.json();
      dispatch(articlesSuccess(articles));
    } else {
      // status !== 200, something went wrong
      // grab the response and show the error
      const err = await resp.json()
      dispatch(articlesFail(err));
    }
  };
};
