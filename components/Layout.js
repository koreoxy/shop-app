import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Shop</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All right reserved. Shop</Typography>
      </footer>
    </div>
  );
}
