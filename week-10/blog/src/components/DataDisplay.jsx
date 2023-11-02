import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import DataCard from "./DataCard";

const DataDisplay = ({ appData, setIsLoading }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      //throw new Error("Simulated error");
      const res = await axios.get("https://jsonplaceholder.typicode.com/poss");
      const data = res.data;
      setFetchedData(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch posts.");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredData = fetchedData.filter((data, index) => index < 10);
  const newFilteredData = [...filteredData, ...appData];
  return (
    <div>
      {error !== null ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        newFilteredData.map((data, index) => (
          <DataCard key={index} title={data.title} body={data.body} />
        ))
      )}
    </div>
  );
};

export default DataDisplay;
