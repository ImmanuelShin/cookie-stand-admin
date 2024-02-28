import React from 'react';

function Footer({ cookieStands }) {
  const locationCount = cookieStands?.length ?? 0;

  return (
    <footer className="flex justify-between bg-green-500 p-4 text-white text-center">
      <p>{locationCount} {locationCount === 1 ? 'Location' : 'Locations'} World Wide</p>
      <p>&copy; {new Date().getFullYear()} Cookie Stand Admin</p>
    </footer>
  );
}

export default Footer;
