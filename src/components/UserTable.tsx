import React from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserTableProps {
  users: User[];
  onUserClick: (userId: number) => Promise<void>;
}

const UserTable: React.FC<UserTableProps> = ({ users, onUserClick }) => {
  return (
    <aside className="w-full max-w-xs p-4 sidebar border border-slim2 mx-auto mt-4 rounded-lg shadow-lg max-h-[710px] overflow-y-auto">
      <div className="overflow-x-auto">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => onUserClick(user.id)}
            className="mb-4 p-4 border border-slim3 cursor-pointer hover-gradient rounded-lg shadow-lg"
          >
            <p className="text-sm font-medium text-[#381659] montreal">
              <span className="text-[#874983] font-[600] formula">Name:</span>{" "}
              {user.name}
            </p>
            <p className="text-sm text-[#381659] montreal">
              <span className="text-[#874983] font-[600] formula">
                Username:
              </span>{" "}
              {user.username}
            </p>
            <p className="text-sm text-[#381659] montreal">
              <span className="text-[#874983] font-[600] formula">Email:</span>{" "}
              {user.email}
            </p>
            <p className="text-sm text-[#381659] montreal">
              <span className="text-[#874983] font-[600] formula">Phone:</span>{" "}
              {user.phone}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default UserTable;
