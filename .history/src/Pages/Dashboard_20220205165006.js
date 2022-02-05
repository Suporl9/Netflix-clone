import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function Dashboard() {
  const { currentuser, logout } = useAuth();
  //   const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSubmit = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <div className="dashboard-body">
      <div>
        nice !working properly.Hello {currentuser.email}
        {error ? <Alert>{error}</Alert> : null}
        <button type="button" onClick={handleSubmit}>
          Log Out
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
