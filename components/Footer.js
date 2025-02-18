export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We provide quality outdoor equipment rentals for your adventures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/catalog" className="hover:text-white">Catalog</a></li>
              <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: contact@trekkers.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Trekkers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

