import React from "react";
import UserList from "./components/UserList";
import data from "./assets/Data/data.json";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <UserList data={data} />
    </div>
  );
}

export default App;
