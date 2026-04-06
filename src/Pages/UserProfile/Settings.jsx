import { useForm } from "react-hook-form";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user, login, logout } = useUser();
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  //  Profile Form
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  // Password Form
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    watch,
    reset: resetPassword,
    formState: { errors: passwordErrors },
  } = useForm();

  const newPassword = watch("newPassword");

  //  Handlers
  const onProfileSave = (data) => {
    login({ ...user, name: data.name, email: data.email });
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const onPasswordSave = (data) => {
    if (data.oldPassword !== user?.password) return;
    login({ ...user, password: data.newPassword });
    resetPassword();
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  const handleDeleteAccount = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="space-y-6 ">
      {/* ── Edit Profile ── */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

        {profileSaved && (
          <p className="text-green-600 text-sm mb-4">
            ✓ Profile updated successfully.
          </p>
        )}

        <form onSubmit={handleProfileSubmit(onProfileSave)} noValidate>
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              {...registerProfile("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className={`border p-3 rounded w-full ${profileErrors.name ? "border-red-400" : ""}`}
            />
            {profileErrors.name && (
              <p className="text-red-500 text-sm mt-1">
                {profileErrors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              {...registerProfile("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`border p-3 rounded w-full ${profileErrors.email ? "border-red-400" : ""}`}
            />
            {profileErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {profileErrors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 md:py-3 rounded-md  sm:py-4"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* ── Change Password ── */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>

        {passwordSaved && (
          <p className="text-green-600 text-sm mb-4">
            ✓ Password updated successfully.
          </p>
        )}

        <form onSubmit={handlePasswordSubmit(onPasswordSave)} noValidate>
          {/* Old Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Old Password"
              {...registerPassword("oldPassword", {
                required: "Old password is required",
                validate: (value) =>
                  value === user?.password || "Old password is incorrect",
              })}
              className={`border p-3 rounded w-full ${passwordErrors.oldPassword ? "border-red-400" : ""}`}
            />
            {passwordErrors.oldPassword && (
              <p className="text-red-500 text-sm mt-1">
                {passwordErrors.oldPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="New Password"
              {...registerPassword("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`border p-3 rounded w-full ${passwordErrors.newPassword ? "border-red-400" : ""}`}
            />
            {passwordErrors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {passwordErrors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm New Password"
              {...registerPassword("confirmPassword", {
                required: "Please confirm your new password",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              className={`border p-3 rounded w-full ${passwordErrors.confirmPassword ? "border-red-400" : ""}`}
            />
            {passwordErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {passwordErrors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 md:py-3 rounded-md sm:py-2"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* ── Danger Zone ── */}
      <div className="bg-white p-6 rounded-2xl shadow border border-red-100">
        <h2 className="text-xl font-semibold mb-2 text-red-600">
          Delete Account
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Deleting your account is permanent and cannot be undone.
        </p>

        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="border border-red-500 text-red-500 px-6 py-2 rounded-xl hover:bg-red-50"
          >
            Delete Account
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white px-6 py-2 rounded-xl"
            >
              Yes, delete it
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="border px-6 py-2 rounded-xl"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
