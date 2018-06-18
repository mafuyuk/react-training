import React from 'react';

const Html = (props) => {
  return (
    <html lang="ja">
    <head>
      <meta charSet="UTF-8" />
      <title>App</title>
    </head>
    <body>
    <div id="root">{props.children}</div>
    </body>
    </html>
  )
};

export default Html;
