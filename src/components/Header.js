import Link from 'next/link';

const Header = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">NewsHub</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/politics">Politics</Link></li>
          <li><Link href="/tech">Tech</Link></li>
          <li><Link href="/discoveries">Discoveries</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
