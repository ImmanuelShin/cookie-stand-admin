import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function CookieStandAdmin({ onSubmit, cookieStands, setCookieStands, hours }) {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <Main onSubmit={onSubmit} cookieStands={cookieStands} setCookieStands={setCookieStands} hours={hours} />

      <Footer cookieStands={cookieStands}/>
    </div>
  );
}

export default CookieStandAdmin;
