import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("/")
    }
  return (
    <div>
      <h2>You don miss road</h2>

      <div>
        <span>
          <span>Click here to go back</span>
          <button className="btn btn-danger" onClick={goToHome}>Home</button>
        </span>
      </div>
    </div>
  );
};

export default NotFound;
