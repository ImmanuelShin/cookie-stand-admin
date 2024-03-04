import Link from 'next/link';
import { useAuth } from '../../contexts/auth'; 

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-green-500 p-4 flex justify-between">
      <ul className="flex space-x-4">
        <li className="text-white bg-green-400 rounded transition-bg hover:bg-green-700 p-1">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white bg-green-400 rounded transition-bg hover:bg-green-700 p-1">
          <Link href="/placeholderPage">Placeholder Page</Link>
        </li>
      </ul>
      {user && (
        <div className="text-white flex items-center ml-4">
          <div className="mr-2">{user.email}</div>
          <button className="text-white bg-green-400 rounded transition-bg hover:bg-green-700 p-1" onClick={logout}>
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
