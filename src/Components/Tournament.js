import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Dailypuzzle = () => {
  const [myData, setMyData] = useState([]);
  const [myDataa, setMyDataa] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(myDataa);

  //   console.log(myData);
  const readdData = async () => {
    setIsLoading(true);

    const res = await axios.get(
      "https://api.chess.com/pub/tournament/-33rd-chesscom-quick-knockouts-1401-1600"
    );
    setMyData(res.data);
    setMyDataa(res.data.players);
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
                      Daily Tournament
                    </h2>
                    <ul className="list-group border lead text-center">
                      <li className="list-group-item">
                        <p className="fs-4">
                          Title:
                          <span className="fw-bold"> {myData.creator} </span>
                        </p>
                        <p className="fs-4">
                          Name:
                          <span className="fw-bold"> {myData.name} </span>
                        </p>
                        <p className="fs-4">
                          Status:
                          <span className="fw-bold"> {myData.status} </span>
                        </p>

                        <p className="fs-4">
                          Description:
                          <span className="fw-bold">
                            {" "}
                            {myData.description}{" "}
                          </span>
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
                  {/* <div className="col-md">
                    <img
                      src={myData.image}
                      className="img-fluid d-none d-md-block rounded shadow"
                      alt="img"
                    />
                  </div> */}
                </div>
              </div>
            </section>
          );
        })}
      <div>
        <section className="container my-3">
          <h1 className="text-center text-white">Players</h1>
          <div class="row row-cols-1 row-cols-md-3 g-4 my-3">
            {myDataa.map((data) => {
              return (
                <div class="col tourList">
                  <div class="card h-100 tour">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">{data.username}</h5>
                      <p class="card-text text-success">{data.status}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Dailypuzzle;
