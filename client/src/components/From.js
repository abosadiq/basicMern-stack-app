import React from "react";
import { Consumer } from "./contextApi";
const From = () => {
  return (
    <Consumer>
      {(value) => {
        const { addUserHandler, handleChange, fullName } = value;
        return (
          <form onSubmit={addUserHandler} className="mt-4">
            <div
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <div className="d-flex">
                <input
                  style={{ width: "400px" }}
                  type="text"
                  name="firsName"
                  className="form-control"
                  placeholder="Enter First Name"
                  value={fullName.firsName}
                  onChange={handleChange}
                />
                <input
                  style={{ width: "400px" }}
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={fullName.lastName}
                  onChange={handleChange}
                  className="form-control ml-2 mr-2"
                />
                <input
                  style={{ width: "400px" }}
                  type="text"
                  name="userEmail"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={fullName.userEmail}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-md btn-outline-primary ml-2"
                disabled={!fullName.firsName}
              >
                Save
              </button>
            </div>
          </form>
        );
      }}
    </Consumer>
  );
};

export default From;
