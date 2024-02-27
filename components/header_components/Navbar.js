import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-green-500 p-4">
      <ul className="flex space-x-4">
        <li className="text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white">
          <Link href="/placeholderPage">Placeholder Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
