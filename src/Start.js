import { useState } from "react";

import Button from "./Button";
import Something from "./Something";
import "./start.css";

const Start = () => {
  const [student, setstudent] = useState("");
  const [allStudent, setallStudent] = useState(["Abass", "Love", "Timmy"]);
  let arr1 =["cat", "dog", "sheep"]
  let arr2 =["Lion", "Tiger", "goat", ...arr1]
  console.log(arr2);
  const [studentInfo, setStudentInfo] = useState([
    {
      name: "Abiola",
      class: "Web",
      Age: 50,
    },

    {
      name: "Paul",
      class: "Ui",
      Age: 30,
    },
  ]);
  const [check, setcheck] = useState(true);


  const addStudents =()=>{
    setallStudent([...allStudent, student])
  }

  const changeStud = () => {
    setstudent("Temi");
  };
  const btnHide = () => {
    setcheck(false);
  };
  const btnShow = () => {
    setcheck(true);
  };

  const btnShide = () => {
    setcheck(!check);
  };

  const myStyle = {
    backgroundColor: "green",
    textAlign: "center",
    color: "purple",
  };

  return (
    <>
      <Button />


      <div className="shadow-sm py-3 m-5 text-center">
        {check == true ? (
          allStudent.map((el, i) => (
            <div>
              <ul>
                <li>
                  {i + 1}.{el}
                </li>
              </ul>
            </div>
          ))
        ) : (
          <h1>Switch check to true</h1>
        )}


        <div>
        <input onChange={(e)=>setstudent(e.target.value)} type="text" />
                <button onClick={addStudents}>Add Student</button>
        </div>

        
          <div className="container">
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {studentInfo.map((el, i) => (
                  <tr key={i}>
                    <td>{el.name}</td>
                    <td>{el.class}</td>
                    <td>{el.Age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        

        {/* {
            allStudent.map((el, i)=>(
                <div>
                    <ul>
                        <li>{i+1}.{el}</li>
                    </ul>
                </div>
            ))
        } */}
        <button className="btn btn-danger " onClick={btnHide}>
          Hide
        </button>
        <button className="btn btn-dark m-1" onClick={btnShow}>
          Show
        </button>
        <button className="btn btn-success" onClick={btnShide}>
          {check ? "Hide" : "Show"}
        </button>
        <h1>{student}</h1>
        {/* <button onClick={()=>setstudent("Paul")}>Change student</button> */}
        <button className="btn btn-light" onClick={changeStud}>
          Change student
        </button>
      </div>

      <Something />
      <h1 style={myStyle}>
        This is the {Math.floor(Math.random() * 99)} start component
      </h1>
      <h2 style={myStyle}>Please work</h2>
      <p>How are we doing?</p>
      <img src={require("../src/img/DATA-SQI.jpg")} alt="" />

      <btn className="myBtn">Click me</btn>
    </>
  );
};

export default Start;
