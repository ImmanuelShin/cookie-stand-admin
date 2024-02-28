import CookieStandAdmin from '../components/CookieStandAdmin';
import { useState, useEffect } from 'react';
import { hours } from '../data';

export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);

  useEffect(() => {
    const storedCookieStands = JSON.parse(localStorage.getItem('cookieStands')) || [];
    setCookieStands(storedCookieStands);
  }, []);

  useEffect(() => {
    localStorage.setItem('cookieStands', JSON.stringify(cookieStands));
  }, [cookieStands]);

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
    <>
      <CookieStandAdmin onSubmit={handleSubmit} cookieStands={cookieStands} setCookieStands={setCookieStands} hours={hours} />
    </>
  );
}
