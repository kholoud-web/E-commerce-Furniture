import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscibed, setSubscribed] = useState(false);
  const [error, setError] = useState("false");
  const [showAlert, setShowAlert] = useState(false);
 const [submitted, setSubmitted] = useState(false);
  const handleSubscribe = () => {
    setSubmitted(true);
    
    if (!email || !email.includes("@")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
    setSubscribed(true);
    setShowAlert(true);
    setEmail("");
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

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

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className="flex items-center gap-3 border-b border-black pb-2"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={
                error
                  ? "Enter your email"
                  : "enter a valid email address"
              }
              className={`w-full outline-none text-sm bg-transparent text-black ${error ? "placeholder-red-400" : "placeholder-gray-400"}`}
              disabled={subscibed}
            />
            <button
              type="submit"
              disabled={subscibed}
              className={`text-sm font-medium transition whitespace-nowrap ${
                subscibed
                  ? "text-green-600 cursor-default"
                  : "hover:text-gray-500"
              }`}
            >
              {subscibed ? "SUBSCRIBED ✓" : "SUBSCRIBE"}
            </button>
          </form>
          {/* Success Alert */}
          <div
            className={`mt-3 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-green-50 border border-green-200
          transition-all duration-300 ${
            showAlert
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="7.25"
                stroke="#639922"
                strokeWidth="1.5"
              />
              <path
                d="M4.5 8.5L6.8 10.8L11.5 5.5"
                stroke="#639922"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-green-700 font-medium">
              You subscribed successfully!
            </span>
            <button
              onClick={() => setShowAlert(false)}
              className="ml-auto text-green-500 text-sm hover:text-green-700"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 pt-6 border-t text-sm text-[#000000]">
        2026 Funiro. All rights reserved
      </div>
    </footer>
  );
}
