import React from "react";
import User from "./User";

function UserList(props) {
  const { data } = props;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.length > 0 &&
        data.map(function (value, index) {
          return <User user={value} key={index} />;
        })}
    </div>
  );
}

export default UserList;
