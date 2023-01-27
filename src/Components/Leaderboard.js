import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/style.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const readData = () => {
    setIsLoading(true);
    axios.get("https://api.chess.com/pub/leaderboards/").then((res) => {
      setData(res.data.daily);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <>
      <div className="leaderboard container">
        <div className="d-flex justify-content-between mt-5 text-white">
          <h2>Leaderboards</h2>
          <Link exact to="/">
            <div className="btn btn-secondary h1">Back</div>
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr className="text-white">
              <th scope="">Player</th>
              <th scope="">Rank</th>
              <th scope="">Score</th>
              <th scope="">Flair Code</th>
              <th scope="">View Profile</th>
            </tr>
          </thead>
          {isLoading ? <Loader /> : ""}
          {data.slice(0, 10).map((eachData) => {
            // setIsLoading(true);
            return (
              <>
                <tbody className="">
                  <tr className="">
                    <td className="">
                      <div class="d-flex align-items-center">
                        <img
                          src={eachData.avatar}
                          class="circle-img circle-img--small  mx-2"
                          alt="User Img"
                        />
                        <div class="user-info__basic">
                          <h5 class="mb-0">{eachData.name}</h5>
                          <p class="text-muted mb-0">{eachData.username}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex align-items-baseline">
                        <h4 class="mr-1">{eachData.rank}</h4>
                        <small class="text-success">{eachData.title}</small>
                      </div>
                    </td>
                    <td className="fw-bold">{eachData.score}</td>
                    <td className="fw-bold">{eachData.flair_code}</td>
                    <td>
                      <a href={eachData.url}>
                        <button class="btn btn-success btn-sm">
                          URL for Profile View
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
