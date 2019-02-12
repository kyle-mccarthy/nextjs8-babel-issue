import App, { Container } from 'next/app';
import React from 'react';

class MyApp extends App<any> {
  public static async getInitialProps({ Component, ctx, ...rest }: any) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps, pathname: ctx.pathname, store: ctx.store };
  }

  public render() {
    const { Component, pageProps } = this.props;
    

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
