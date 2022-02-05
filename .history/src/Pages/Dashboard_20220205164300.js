import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
// import { useAuthState } from "react-firebase-hooks";
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
  //   useEffect(() => {
  //     // console.log(user);
  //   }, [currentuser, user]);

  return (
    <div>
      <strong>nice !working properly.Hello {currentuser.email}</strong>
      {error ? <Alert>{error}</Alert> : null}
      <button type="button" onClick={handleSubmit}>
        Log Out
      </button>
    </div>
  );
}
export default Dashboard;
