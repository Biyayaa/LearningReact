import React, {useState} from "react";

const UserInfo = ({addUser, setUserEmail, setUserCountry, setUsername}) => {
 
  return (
    <div>
      <form className="w-50 mx-auto border p-3 shadow rounded" action="">
        <h1 className="text-primary">Add User</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="form-group my-3 m-1"
        />
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="form-group my-3 m-1"
        />
        <input
          onChange={(e) => setUserCountry(e.target.value)}
          type="text"
          placeholder="Enter your nationality"
          className="form-group my-3 m-1"
        />

        <button onClick={addUser} className="btn btn-primary ">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
