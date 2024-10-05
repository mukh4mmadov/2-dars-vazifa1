import React from "react";

function Car(props) {
  const { car } = props;
  return (
    <span className="inline-block bg-blue-200 px-2 py-1 rounded-lg m-1">
      {car}
    </span>
  );
}

export default Car;
