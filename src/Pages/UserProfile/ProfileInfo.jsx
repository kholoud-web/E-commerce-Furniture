import {useUser} from "../../Context/UserContext";

export default function ProfileInfo() {
  const {user } = useUser();
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Profile Info</h2>

      <div className="flex items-center gap-6">
    
        <div>
          <h3 className="font-bold">{user?.name}</h3>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
