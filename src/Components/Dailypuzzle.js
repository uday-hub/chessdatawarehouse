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
            <section class="p-5">
              <div class="container">
                <div class="row g-4">
                  <div class="col-md">
                    <h2 class="text-center mb-4">Daily Puzzle</h2>
                    <ul class="list-group list-group-flush lead">
                      <li class="list-group-item">
                        <span class="fw-bold"> Title: </span>
                        {myData.title}
                      </li>
                      <li class="list-group-item">
                        <a href={myData.url}>
                          <button class="fw-bold"> Start Playing</button>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md">
                    <img
                      src={myData.image}
                      class="img-fluid d-none d-md-block"
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
