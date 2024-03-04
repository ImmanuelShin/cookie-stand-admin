import Head from 'next/head';
import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth';
import { hours } from '../data';

export default function Home() {
  const { user, login } = useAuth(); 
  const [cookieStands, setCookieStands] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCookieStand = {
      id: formData.get('id'),
      location: formData.get('location'),
      minCustomers: formData.get('minCustomers'),
      maxCustomers: formData.get('maxCustomers'),
      avgCookies: formData.get('avgCookies'),
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    };
    setCookieStands([...cookieStands, newCookieStand]);
  };

  return (
    <div className="bg-white min-h-screen w-full">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {user ? (
        <>
          <CookieStandAdmin onSubmit={handleSubmit} cookieStands={cookieStands} setCookieStands={setCookieStands} hours={hours} />
        </>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
}
