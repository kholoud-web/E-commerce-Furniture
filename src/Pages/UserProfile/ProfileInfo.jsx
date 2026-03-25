export default function ProfileInfo({ user }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Profile Info</h2>

      <div className="flex items-center gap-6">
        {/* <img
          src="https://via.placeholder.com/100"
          className="w-20 h-20 rounded-full"
        /> */}

        <div>
          <h3 className="font-bold">kholoud mahmoud</h3>
          <p className="text-gray-500">kholoud@email.com</p>
        </div>
      </div>
    </div>
  );
}
