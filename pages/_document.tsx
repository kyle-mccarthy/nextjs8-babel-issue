import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  public render() {
    return (
      <html lang="en">
        <Head>
          <title>test</title>
        </Head>
        <body className="em">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
