import Link from "next/link"

export default function Header() {
  return (
    (<header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TrekGear Rentals
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/user-registration" className="hover:text-gray-300">
              User Sign Up
            </Link>
          </li>
          <li>
            <Link href="/supplier-registration" className="hover:text-gray-300">
              Become a Supplier
            </Link>
          </li>
        </ul>
      </nav>
    </header>)
  );
}

