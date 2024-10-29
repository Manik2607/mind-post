import Link from 'next/link';
import LoginHandeler from '../LoginHandeler/LoginHandeler';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <div className="space-x-4">
          <Link className="text-gray-300 hover:text-white" href="/">
            Home
          </Link>
          <Link className="text-gray-300 hover:text-white" href="/about">
            Posts
          </Link>
          <Link className="text-gray-300 hover:text-white" href="/newpost">
            New Post
          </Link>
          <LoginHandeler/>
        </div>
      </div>
    </nav>
  );
}