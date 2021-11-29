import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoAirplane, IoBoat, IoTrain, IoBus } from "react-icons/io5";
import axios from "axios";
import "./Home.css";
import Slider from "../components/forms/Slider/Slider";
import { SliderData } from "../components/forms/Slider/SliderData";

const HomePage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      {isAuth === true ? (
        <div className="home">
          <div className="home-part1">
            <div className="main-part1">
              <img src="/img/destination.png" alt="destination" />
              <Link to="/memories">
                <h4>Memories</h4>
              </Link>
            </div>
            <div className="main-part1">
              <img src="/img/notification.png" alt="notification" />
              <h4>Notifications</h4>
            </div>
            <div className="main-part1">
              <img src="/img/settings.png" alt="settings" />
              <h4>Settings</h4>
            </div>
            <div>{/* we can add something */}</div>
          </div>
          <div className="home-part2">
            <div className="main-search-part2">
              <div className="search-part2">
                <input type="search" placeholder="Choose a place" />
                <img src="/img/search.png" alt="search" />
              </div>
            </div>
            <div className="carousel-part2">
              <Slider slides={SliderData} />
            </div>
            <div className="calendar">
              {/* pick calendar package */}
              <div>{/* will add another things here  */}</div>
            </div>
          </div>
          <div className="home-part3">
            <div className="personnel-info-part3">
              <p>Welcome {user.name} !</p>
            </div>
            <div className="transportation-part3">
              <h4 className="transportation-heading">
                Choose your transportation
              </h4>
              <div className="transportation-icons">
                <IoAirplane />
                <p>Plane</p>
              </div>

              <div className="transportation-icons">
                <IoBoat />
                <p>Boat</p>
              </div>
              <div className="transportation-icons">
                <IoTrain />
                <p>Train</p>
              </div>
              <div className="transportation-icons">
                <IoBus />
                <p>Bus</p>
              </div>
            </div>
            <div className="friends-part3"></div>
            {/* <div className="cards-part3">
              <p>create your card {user.name}</p>
            </div> */}
            <div className="cards-part3">
              <p>Add your memories {user.name}</p>
              <Link to="formMemory">
                <button className="btn-post-part3">Memory</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="notAuth">
          <div className="notAuth-text">
            <h1>Hello!</h1>
            <p>you can sign up and join us to see offers</p>
          </div>
          <div className="notAuth-carousel">
            {/* how to create with react js */}
            <Slider slides={SliderData} />
          </div>
        </div>
      )}
    </>

    // <div >
    //   {isAuth === true ? (
    //     <div className="homePage">
    //       <h1>Welcome {user.name} </h1>
    //       <Link to="/offers">
    //         <button>Offers</button>
    //       </Link>
    //     </div>
    //   ) : (
    //     <div>
    //       <h1>Please sign up to see offers </h1>
    //       <Link to="signup">
    //         <button>Sign Up</button>
    //       </Link>
    //     </div>
    //   )}
    // </div>
  );
};
export default HomePage;
