// app/admin/users/page.js
import { FiPlus, FiFilter } from "react-icons/fi";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      joined: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "Active",
      joined: "2023-02-20",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      role: "Viewer",
      status: "Inactive",
      joined: "2023-03-10",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Admin",
      status: "Active",
      joined: "2023-04-05",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@example.com",
      role: "Editor",
      status: "Active",
      joined: "2023-05-12",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk">
            Manage your users and their permissions
          </p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="btn-secondary flex items-center gap-2">
            <FiFilter size={18} />
            Filter
          </button>
          <button className="btn-primary flex items-center gap-2">
            <FiPlus size={18} />
            Add User
          </button>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-light/20 dark:border-border-dark/20 cyberpunk:border-border-cyberpunk/20">
                <th className="text-left py-3 px-4 text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk font-medium">
                  User
                </th>
                <th className="text-left py-3 px-4 text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk font-medium">
                  Role
                </th>
                <th className="text-left py-3 px-4 text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk font-medium">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk font-medium">
                  Joined
                </th>
                <th className="text-right py-3 px-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light/20 dark:divide-border-dark/20 cyberpunk:divide-border-cyberpunk/20">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-white/5 dark:hover:bg-black/5 cyberpunk:hover:bg-purple-900/10 transition-colors"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-primary-light/10 dark:bg-primary-dark/10 cyberpunk:bg-primary-cyberpunk/10 text-primary-light dark:text-primary-dark cyberpunk:text-primary-cyberpunk">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === "Admin"
                          ? "bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark cyberpunk:bg-primary-cyberpunk/10 cyberpunk:text-primary-cyberpunk"
                          : user.role === "Editor"
                            ? "bg-secondary-light/10 text-secondary-light dark:bg-secondary-dark/10 dark:text-secondary-dark cyberpunk:bg-secondary-cyberpunk/10 cyberpunk:text-secondary-cyberpunk"
                            : "bg-gray-100 dark:bg-gray-700 cyberpunk:bg-purple-900/30 text-gray-800 dark:text-gray-200 cyberpunk:text-purple-200"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-success-light/10 text-success-light dark:bg-success-dark/10 dark:text-success-dark cyberpunk:bg-success-cyberpunk/10 cyberpunk:text-success-cyberpunk"
                          : "bg-danger-light/10 text-danger-light dark:bg-danger-dark/10 dark:text-danger-dark cyberpunk:bg-danger-cyberpunk/10 cyberpunk:text-danger-cyberpunk"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-textSecondary-light dark:text-textSecondary-dark cyberpunk:text-textSecondary-cyberpunk">
                    {user.joined}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/10 cyberpunk:hover:bg-purple-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
