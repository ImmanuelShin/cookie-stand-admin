import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-green-500 p-4">
      <ul className="flex space-x-4">
        <li className="text-white transition-opacity hover:opacity-70">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white transition-opacity hover:opacity-70">
          <Link href="/placeholder-page">Placeholder Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
