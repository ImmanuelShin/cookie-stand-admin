import Navbar from './header_components/Navbar';

function Header() {
  return (
    <header className="flex justify-between items-center bg-green-500 p-2">
      <h1 className="text-2xl text-white">Cookie Stand Admin</h1>
      <Navbar />
    </header>
  );
}

export default Header;