//dependencies
import React from "react";

//assets
import fbicon from "../Assets/fb_icon.png";
import twitter_icon from "../Assets/twitter_icon.png";
import linkedin_icon from "../Assets/linkedin_Icon.png";
import gmail_icon from "../Assets/gmail_icon.png";
import emoji_icon from "../Assets/smiley_emoji.png";
import pp1 from "../Assets/pp1.png";
import pp2 from "../Assets/pp2-with-bg.png";

const LandingSection = ({ fg, stroke, topnavcolor }) => {
  //copy gmail handler
  const copyGmailHandler = () => {
    let copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to clipboard: " + copyText.value);
  };

  return (
    <>
      <div id="topnav-background" style={{ background: stroke }}>
        <div id="topnav-foreground" style={{ background: topnavcolor }}>
          <div className="social-media">
            <a href="https://web.facebook.com/tristanjohn.girao">
              <img src={fbicon} alt="fb_icon" />
            </a>
          </div>
          <div className="social-media">
            <a href="https://twitter.com/GiraoJ4nj4n">
              <img src={twitter_icon} alt="twitter_icon" />
            </a>
          </div>
          <div id="pp-background">
            <div id="pp-foreground">
              <img src={pp1} alt="" />
            </div>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/tristan-john-girao-69521a201/">
              <img src={linkedin_icon} alt="linkedin_icon" />
            </a>
          </div>
          <div
            className="social-media"
            onClick={() => {
              copyGmailHandler();
            }}
          >
            <input
              type="text"
              value="giraotrista@gmail.com"
              id="myInput"
              readOnly
            />
            <img src={gmail_icon} alt="gmail_icon" />
          </div>
        </div>
      </div>
      <div id="landing-body" style={{ color: fg }}>
        <div id="left-side">
          <div>
            <p style={{ fontSize: "56px" }}>Hi!, I'm Tristan John P. Girao</p>
            <p style={{ fontSize: "56px" }}>
              Thank you for visiting my portfolio!
            </p>
          </div>
          <div>
            <p style={{ fontSize: "32px" }}>Want to know me more?</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontSize: "32px" }}>Just keep scrolling, enjoy!</p>
              &nbsp; &nbsp;
              <img
                src={emoji_icon}
                alt="emoji_icon"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>
        <div id="right-side">
          <img src={pp2} alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingSection;
