import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * what to check in s3
 *    link direction
 *      <a> - YES
 *      <Link> - YES
 *      by file path in a link - YES, UNFORTUNATLY
 *    check dynamyc possibility - YES
 *    is it possible to deploy ssr approach? - NO
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
