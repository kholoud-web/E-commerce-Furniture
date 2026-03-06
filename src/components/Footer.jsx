export default function Footer() {
  return (
    <footer className="border-t py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Funiro.</h3>
          <p className="text-[#9F9F9F] text-sm leading-6">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-medium text-[#9F9F9F] mb-6">Links</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-medium text-[#9F9F9F] mb-6">Help</h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                Payment Options
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium hover:text-gray-500 transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-medium text-[#9F9F9F] mb-6">Newsletter</h4>

          <form className="flex items-center gap-3 border-b border-black pb-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full outline-none text-sm"
            />
            <button className="text-sm font-medium hover:text-gray-500 transition">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 pt-6 border-t text-sm text-[#000000]">
        2026 Funiro. All rights reserved
      </div>
    </footer>
  );
}
