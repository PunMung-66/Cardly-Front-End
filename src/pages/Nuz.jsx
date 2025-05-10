import React from 'react'
import { Navigate } from 'react-router-dom'


export default function Nuz() {
  const [toDashboard, setToDashboard] = React.useState(false);

  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => setToDashboard(true)}>Go to Dashboard</button>

    </div>
  );
}
