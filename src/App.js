import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");
  const [initialarray, updatedArray] = useState([]);
  console.log(initialarray);

  const togglecomplete = (id) => {
    updatedArray(
      initialarray.map((eachitem) =>
        eachitem.id === id
          ? { ...eachitem, completed: !eachitem.completed }
          : eachitem
      )
    );
  };
  const handleDelete = (id) => {
    updatedArray(initialarray.filter((eachitem) => eachitem.id !== id));
  };
  const handleIecriment = (id) => {
    updatedArray(
      initialarray.map((eachitem) =>
        eachitem.id === id
          ? { ...eachitem, counter: eachitem.counter+1 }
          : eachitem
      )
    );
  };
  const handleDecriment = (id) => {
    updatedArray(
      initialarray.map((eachitem) =>
        eachitem.id === id
          ? { ...eachitem, counter: eachitem.counter-1}
          : eachitem
      )
    );
  };
  return (
    <div>
      <div>
        <div className="container py-3 pl-5">
          <div className="row">
            <div className="col-12">
              <div className="input-group  ">
                <form
                  onSubmit={(e) =>
                    updatedArray(
                      [
                        ...initialarray,
                        {
                          text: value,
                          id: Math.random(),
                          counter: 0,
                          completed: false,
                        },
                      ],
                      e.preventDefault()
                    )
                  }
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Todo Item"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-success" type="submit">
                      Add Todo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {initialarray.map((eachitem) => (
          <ul key={eachitem.id} style={{ listStyleType: "none" }}>
            <li className="pb-1">
              <div className="row px-5 pt-3">
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <h6>Mark Checked </h6>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-4 col-sm-4">
                  <input
                    onClick={() => togglecomplete(eachitem.id)}
                    className="form-check-input"
                    type="checkbox"
                  />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 text-center ">
                  <h4 className={eachitem.completed ? "completed" : ""}>
                    {eachitem.text}
                  </h4>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 text-center mb-3">
                  <button
                    className="btn btn-success"
                    style={{ border: "1px solid black" }}
                    onClick={() => handleIecriment(eachitem.id)}
                  >
                    +
                  </button>
                  <button className="btn btn-warning">
                    {eachitem.counter}
                  </button>
                  <button
                    className="btn btn-danger "
                    style={{ border: "1px solid black" }}
                    onClick={() => handleDecriment(eachitem.id)}
                  >
                    -
                  </button>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-center">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleDelete(eachitem.id)}
                  >
                    Delete Todo
                  </button>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;

