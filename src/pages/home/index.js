import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getLatestArticles } from '../../store/actions/articles'
import s from './index.module.css';

const Home = () => {

  const dispatch = useDispatch()

  const articles = useSelector(state => state.articles)
  const [ latestArticles, setLatestArticles] = useState([])
  
  useEffect(() => {
    if (articles.loaded && !articles.error) {
      console.log(articles.articles)
      setLatestArticles(articles.articles)
    }
    else if (!articles.loaded && !articles.error) {
     
    }
    else if (articles.loading) {
      console.log("loading artcles")
    }
  }, [articles])

  useEffect(() => {
    dispatch(getLatestArticles())
  }, [])

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Latest</h1>
        {latestArticles &&
          latestArticles.map((item, i) => (
            <div className={s.card}>
          <article key={i} className={s.article}>
            <h1 className={s.articleTitle}>
              <a href={item.normalizedUrl} className={s.linkReset}>{item.title}</a>
            </h1>
            <div>
              <span className={s.articleMeta}>{item.author}</span>
            </div>
            <span>{item.likes}</span>
            <image src={`${item.image}`} height={450} width={'100%'}/>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.innerHtml }}
            />
            <div className={s.grid}>
              <a href={item.normalizedUrl} className={{...s.button, ...s.buttonText}}>Read More</a>
            </div>
          </article>
          </div>
        ))
        }
        {
          articles.error && 
          <p>{JSON.stringify(articles.error)}</p>
        }
      </div>
    </div>
  );
}

export default Home;
