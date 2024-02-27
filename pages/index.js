import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { useState } from 'react';

export default function Home() {
  const [cookieStand, setCookieStand] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCookieStand = {
      location: formData.get('location'),
      minCustomers: formData.get('minCustomers'),
      maxCustomers: formData.get('maxCustomers'),
      avgCookies: formData.get('avgCookies'),
    };
    setCookieStand(newCookieStand);
  };

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <Main onSubmit={handleSubmit} cookieStand={cookieStand} />

      <Footer />
    </div>
  );
}
