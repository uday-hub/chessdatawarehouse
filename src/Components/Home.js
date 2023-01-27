import React, { useEffect, useState } from "react";
import axios from "axios";
import wall from "../Assets/background.webp";
import { Link } from "react-router-dom";

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [cardData, setcardData] = useState([]);
  console.log(myData);
  const readdData = async () => {
    const res = await axios.get(
      "https://api.chess.com/pub/club/chess-com-developer-community/"
    );
    setMyData(res);
  };

  const carddData = async () => {
    const res = await axios.get(
      " https://api.chess.com/pub/player/igorkovalenko"
    );
    setcardData(res);
  };

  useEffect(() => {
    readdData();
    carddData();
  }, []);
  return (
    <div>
      <section className=" text-light py-5 p-lg-0 py-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between my-5">
            <div className="my-5 mx-4">
              <h1>
                Get Updated Data About
                <span style={{ color: "#7FA650" }}> Chess</span>
              </h1>
              <p className="lead my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus inventore, eum nisi, tenetur dignissimos fugiat
                maiores modi doloribus omnis laudantium!
              </p>

              <Link exact to="/leaderboard">
                <button
                  className="btn  text-black-50 shadow__btn"
                  style={{ background: "#7FA650" }}
                >
                  View Live LeaderBoard
                </button>
              </Link>
            </div>
            <img
              className="img-fluid w-50  rounded  d-none d-sm-block"
              src={wall}
              alt="img"
            />
          </div>
        </div>
      </section>

      {/* Learn Sections */}
      {/* <Club /> */}
      <section className="py-5 " id="learn" style={{ background: "#21201D" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {Object.values(myData)
              .slice(0, 1)
              .map((post) => {
                return (
                  <>
                    <div className="col-md p-5 text-white">
                      <h1>Club</h1>
                      <h2>{post.name}</h2>
                      <p className="lead">Visibility: {post.visibility}</p>
                      <p>Members count: {post.members_count}</p>
                      <p className="overflow-auto">{post.description}</p>
                      <a
                        href={post.join_request}
                        className="btn mt-3 text-white"
                        style={{ background: "#4A4846" }}
                      >
                        <i className="bi bi-chevron-right"></i>Join Request
                      </a>
                    </div>
                    <div className="col-md">
                      <img
                        src={post.icon}
                        className="img-fluid w-100  d-none d-sm-block"
                        alt="img"
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>

      {/* <!-- Instructor --> */}
      <section id="instructors" className="py-5 px-2">
        <div className="container">
          <h2 className="text-center text-white">Top Player</h2>
          <p className="lead text-center text-light mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
            excepturi!
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-6 m-auto">
              <div className="card card-css text-white border-0">
                {Object.values(cardData)
                  .slice(0, 1)
                  .map((card) => {
                    return (
                      <div className="card-body text-center">
                        <img
                          src={card.avatar}
                          alt="img"
                          className="rounded-circle mb-3 img-fluid"
                        />
                        <h3 className="card-title mb-3">{card.name}</h3>
                        <h3 className="card-title mb-3">
                          Title : {card.title}
                        </h3>
                        <p className="card-text">Location: {card.location}</p>
                        <p className="card-text">Follwers: {card.followers}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
