export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">About Us</h3>
            <p className="text-gray-400">
              We provide quality outdoor equipment rentals for your adventures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/catalog" className="hover:text-amber-400 transition-colors">Catalog</a></li>
              <li><a href="/how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-500">Connect</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: yatharth040304@gmail.com</p>
              <p>Phone: 7828516684</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Trekkers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

