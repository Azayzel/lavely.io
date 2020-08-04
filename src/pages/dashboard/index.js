import React from 'react';
import s from './index.module.css';

const Dashboard = () => {

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>Your logged in! </h1>
        {/*
        news.map(item => (
          <article key={item.link} className={s.newsItem}>
            <h1 className={s.newsTitle}>
              <a href={item.link}>{item.title}</a>
            </h1>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))
        */}
      </div>
    </div>
  );
}

export default Dashboard;

