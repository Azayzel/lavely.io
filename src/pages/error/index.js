import React from 'react';
import './index.module.css';

const Error = ({ error }) => {
  if (error) {
    return (
      <>
        <h1>{error.name}</h1>
        <pre>{error.stack}</pre>
      </>
    );
  }

  return (
    <>
      <h1>Error</h1>
      <p>Sorry, a critical error occurred on this page.</p>
    </>
  );
}

export default Error;
