import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchApiData = () => {
  const [userId, setUSerId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // when inpit is clear
    if (!userId) {
      setUserData(null);
      setError(null);
      return;
    }

    let id = Number(userId);

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        console.log(res);
        if (res.status == 200) {
          setUserData(res.data);
        }
      } catch (err) {
        setError(err);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <label htmlFor="userId">Enter user ID: </label>
      <input
        type="number"
        id="userId"
        value={userId}
        placeholder="Enter user ID"
        className="p-2  border border-white-50 m-2"
        onChange={(e) => setUSerId(e.target.value)}
      />

      <div>
        {loading && <p>loading..</p>}
        {error && <p style={{ color: "salmon" }}>{error.message}</p>}

        {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default FetchApiData;
