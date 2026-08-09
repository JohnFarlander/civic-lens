import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [status, setStatus] = useState("Checking API...");//used  for storage of API status

  useEffect(() => {// check the backend when the page loads [] means this effect runs once the component is initially mounted
    const checkAPI = async () => {
      try {
        const response = await api.get("/health");

        setStatus(response.data.message);
      } catch (error) {
        console.error(error);
        setStatus("Backend connection failed");
      }
    };

    checkAPI();
  }, []);

  return (
    <div>
      <h1>CivicLens</h1>

      <p>
        Geospatial Civic Services & Municipal Tax Intelligence Platform
      </p>

      <hr />

      <h2>System Status</h2>

      <p>{status}</p>
    </div>
  );
}

export default App;