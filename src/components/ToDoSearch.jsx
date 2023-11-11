import React from "react";
import ToDoNavbar from "./ToDoNavbar";

const ToDoSearch = () => {
  return (
    <div>
      <ToDoNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <label htmlFor="" className="form-label">
                  Search To Do
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12">
                <button className="btn btn-success">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoSearch;
