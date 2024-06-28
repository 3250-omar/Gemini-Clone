import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { CiMenuBurger } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { Context } from "../../context/context";

const Sidebar = () => {
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const [extend, setExtend] = useState(false);
  const loadPompts = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sideBar">
      <div className="top">
        <CiMenuBurger
          className="icon menu"
          onClick={() => setExtend((prev) => !prev)}
        />
        <div className="newChat" onClick={newChat}>
          <CiCirclePlus className="icon" />
          {extend && <p>New Chat</p>}
        </div>
        {extend && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div className="recent-entry" onClick={() => loadPompts(item)}>
                  <CiChat2 className="icon" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FaQuestion className="icon" />
          {extend && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <MdHistory className="icon" />
          {extend && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <CiSettings className="icon" />
          {extend && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
