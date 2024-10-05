import React from "react";
import Car from "./Car";

function User(props) {
    const { firstName, lastName, image, cars } = props.user;
    return (
      <div className="bg-white p-4 shadow-md rounded-md text-center">
        <img className="w-full h-32 object-cover rounded" src={image} alt="" />
        <p className="text-lg font-semibold my-2">
          {firstName} {lastName}
        </p>
        <div className="text-gray-700">
          {cars.length > 0 ? (
            cars.map(function (value, index) {
              return <Car car={value} key={index} />;
            })
          ) : (
            <p>Mashinasi Mavjud emas</p>
          )}
        </div>
      </div>
    );
  }
  
  export default User;
  
