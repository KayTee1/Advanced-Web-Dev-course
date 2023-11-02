import { useState } from "react";
import "./App.css";
import DataDisplay from "./components/DataDisplay";
import DataInput from "./components/DataInput";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [appData, setAppData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="main">
          <div className="container-data">
            <ErrorBoundary>
              <DataDisplay appData={appData} setIsLoading={setIsLoading} />
            </ErrorBoundary>
          </div>

          <div className="container-form">
            <ErrorBoundary>
              <DataInput appData={appData} setAppData={setAppData} />
            </ErrorBoundary>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
