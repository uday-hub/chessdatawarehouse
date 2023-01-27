import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Dailypuzzle = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(myData);
  const readdData = async () => {
    setIsLoading(true);

    const res = await axios.get("https://api.chess.com/pub/puzzle");
    setMyData(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    readdData();
  }, []);
  return (
    <>
      {isLoading ? <Loader /> : ""}
      {Object.values(myData)
        .slice(0, 1)
        .map(() => {
          return (
            <section className="py-5 my-5 my-sm-0">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md" style={{ margin: "auto" }}>
                    <h2 className="text-center mb-4 text-white">
                      Daily Puzzle
                    </h2>
                    <ul className="list-group border lead text-center my-5">
                      <li className="list-group-item">
                        <p className="fs-4">
                          Title:
                          <span className="fw-bold"> {myData.title} </span>
                        </p>
                      </li>
                      <li className="list-group-item">
                        <a href={myData.url}>
                          <button
                            className="btn btn-lg text-black-50 fw-bolder shadow"
                            style={{ background: "#7FA650" }}
                          >
                            Start Playing
                          </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md">
                    <img
                      src={myData.image}
                      className="img-fluid d-none d-md-block rounded shadow"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default Dailypuzzle;
