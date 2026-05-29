"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import { UpdateUserModal } from "@/components/UpdateUserModal";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center space-y-6">
        {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-slate-500">Loading profile...</span>
          </div>
        ) : user ? (
          <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <div>
              <h1 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent text-center font-extrabold py-4 text-4xl">
                Your Profile Info
              </h1>
            </div>
            <div className="text-center flex flex-col items-center gap-4">
              <Avatar className="w-24 h-24 text-large ">
                <Avatar.Image
                  alt={user?.name || "User"}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback className="text-2xl bg-orange-100 text-orange-600 font-bold">
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-xl font-bold text-slate-800">{user.name}</p>
                <p className="text-sm text-slate-500">{user.email}</p>
              </div>
              <div className="mt-4">
                <UpdateUserModal />
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
            <div className="text-red-500 font-bold text-lg mb-2">
              Unauthorized Access
            </div>
            <p className="text-sm text-slate-500">
              Please log in to view your profile page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
