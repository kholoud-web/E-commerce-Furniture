export default function Settings() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <input
        type="text"
        placeholder="Name"
        className="border p-3 rounded w-full mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 rounded w-full mb-4"
      />

      <button className="bg-black text-white px-6 py-3 rounded-xl">
        Save Changes
      </button>
    </div>
  );
}