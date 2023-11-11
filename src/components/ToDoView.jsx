import React, { useEffect, useState } from "react";
import ToDoNavbar from "./ToDoNavbar";
import axios from "axios";

const ToDoView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ToDoNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card text-center">
                      <div class="card-header">{value.title}</div>
                      <div class="card-body">
                        <p class="card-text">{value.completed}</p>
                      </div>
                      <div class="card-footer text-muted">{value.userId}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoView;
