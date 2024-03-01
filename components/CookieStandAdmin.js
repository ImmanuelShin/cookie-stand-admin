import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import useResource from '../hooks/useResource';

function CookieStandAdmin({ onSubmit, cookieStands, setCookieStands, hours }) {
  const { resources, deleteResource } = useResource();
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <Main 
      onSubmit={onSubmit} 
      cookieStands={cookieStands} 
      setCookieStands={setCookieStands} 
      hours={hours} 
      stands={resources || []} 
      deleteStand={deleteResource} 
      />

      <Footer cookieStands={resources}/>
    </div>
  );
}

export default CookieStandAdmin;
