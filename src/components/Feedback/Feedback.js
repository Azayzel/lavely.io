import React from 'react';
import s from './Feedback.module.css';
const Feedback = () => {

  return (
    <div className={s.root}>
      <div className={s.container}>
        <a
          className={s.link}
          href="https://github.com/Azayzel/lavely.io"
        >
          Contact Me
        </a>
        <span className={s.spacer}>|</span>
        <a
          className={s.link}
          href="https://github.com/Azayzel/lavely.io/issues/new"
        >
          Report an issue
        </a>
      </div>
    </div>
  );
}

export default Feedback;
