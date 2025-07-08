// components/admin/UserTable.js
import { FiEdit, FiTrash2, FiMoreVertical } from "react-icons/fi";

const UserTable = ({ users }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            <th
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              User
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              Role
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              Status
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "0.75rem 1rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              Joined
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "0.75rem 1rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            ></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              style={{
                borderBottom: "1px solid var(--border)",
                transition: "background-color 0.3s ease",
              }}
            >
              <td style={{ padding: "0.75rem 1rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "9999px",
                      backgroundColor: "var(--primary)/10",
                      color: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 500 }}>{user.name}</p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {user.email}
                    </p>
                  </div>
                </div>
              </td>
              <td style={{ padding: "0.75rem 1rem" }}>
                <span
                  style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    backgroundColor:
                      user.role === "Admin"
                        ? "var(--primary)/10"
                        : user.role === "Editor"
                          ? "var(--secondary)/10"
                          : "#f1f5f9",
                    color:
                      user.role === "Admin"
                        ? "var(--primary)"
                        : user.role === "Editor"
                          ? "var(--secondary)"
                          : "#64748b",
                  }}
                >
                  {user.role}
                </span>
              </td>
              <td style={{ padding: "0.75rem 1rem" }}>
                <span
                  style={{
                    padding: "0.25rem 0.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    backgroundColor:
                      user.status === "Active"
                        ? "var(--success)/10"
                        : "var(--danger)/10",
                    color:
                      user.status === "Active"
                        ? "var(--success)"
                        : "var(--danger)",
                  }}
                >
                  {user.status}
                </span>
              </td>
              <td
                style={{
                  padding: "0.75rem 1rem",
                  color: "var(--text-secondary)",
                }}
              >
                {user.joined}
              </td>
              <td style={{ padding: "0.75rem 1rem", textAlign: "right" }}>
                <button
                  style={{
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    position: "relative",
                  }}
                >
                  <FiMoreVertical size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
