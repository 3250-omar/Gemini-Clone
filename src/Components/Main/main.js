import React, { useContext } from "react";
import "./main.css";
import { IoCompassOutline } from "react-icons/io5";
import { FaRegLightbulb, FaCode, FaStarOfLife } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoSendSharp } from "react-icons/io5";
import UserPic from "../../Assets/ceabab57xr1e1i881t9h70dyscaf.png";
import { Context } from "../../context/context";
import GiminiIcon from "../../Assets/google-gemini-icon.webp";
import Typewriter from "typewriter-effect";
const MainPage = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  const typingEffect = (
    <Typewriter
      options={{ loop: false, delay: 35 }}
      onInit={(typewriter) => {
        typewriter.typeString(resultData).start();
      }}
    />
  );

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={UserPic} alt="User" />
      </div>
      <div className="mainContainer">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest more creative ideas</p>
                <FaRegLightbulb size={35} className="tag" />
              </div>
              <div className="card">
                <p>Suggest a beautiful place to go</p>
                <IoCompassOutline size={35} className="tag" />
              </div>
              <div className="card">
                <p>Can I start learning Python?</p>
                <FaCode size={35} className="tag" />
              </div>
              <div className="card">
                <p>What is the meaning of life?</p>
                <FaStarOfLife size={35} className="tag" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={UserPic} alt="User" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={GiminiIcon} alt="Gemini" width={40} height={40} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <>
                  <p>{typingEffect}</p>
                </>
              )}
            </div>
          </div>
        )}
        <div className="main-event">
          <div className="searchBox">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <GrGallery className="input-box-icon" />
              <CiMicrophoneOn className="input-box-icon" />
              {input && (
                <IoSendSharp
                  className="input-box-icon"
                  onClick={() => onSent()}
                />
              )}
            </div>
          </div>
          <p className="info">
            Gemini may display inaccurate information, including about people,
            so we advise you to check his responses. Your privacy on Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
