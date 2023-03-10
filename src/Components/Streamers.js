import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Streamers = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(myData);
  const readdData = async () => {
    setIsLoading(true);
    const res = await axios.get("https://api.chess.com/pub/streamers");
    setMyData(res.data.streamers);
    setIsLoading(false);
  };

  useEffect(() => {
    readdData();
  }, []);

  return (
    <>
      <section class="py-2">
        <div class="container">
          <div class="row text-center d-flex ">
            {isLoading ? <Loader /> : ""}
            {myData.slice(0, 40).map((val) => {
              const is_live = val.is_live;
              const is_comm = val.is_community_streamer;
              console.log(is_live);
              return (
                <div class="col-md-4 mb-4">
                  <div class="card bg-dark bg-gradient bg-opacity-50 border-0  rounded-1 text-light ">
                    <div class="card-body text-center shadow">
                      <div class="h1 mb-3">
                        <img
                          className="img-fluid w-50 h-50"
                          src={val.avatar}
                          alt="img"
                        />
                      </div>
                      <h3 class="card-title mb-3">{val.username}</h3>
                      <p class="card-text text-info">
                        {is_comm ? "Community Streamer" : "Idle"}
                      </p>
                      <a href={val.url} class="btn player-btn">
                        Player URL
                      </a>
                      <br />
                      <br />
                      <p className="fw-bold text-success">
                        {is_live ? "Live" : "Offline"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Streamers;
