//dependencies
import React from "react";

//assets
import pp_image from "../Assets/pp1.png";
import emoticon from "../Assets/smiley_emoji.png";
import fb_icon from "../Assets/fb_icon.png";
import twitter_icon from "../Assets/twitter_icon.png";
import linkedin_icon from "../Assets/linkedin_Icon.png";
import gmail_icon from "../Assets/gmail_icon.png";

//styles
import "../Styles/HomeComponentStyle.css";

const HomeComponent = () => {
  const copyGmailHandler = () => {
    let copyText = document.getElementById("myInput") as HTMLInputElement;

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    alert("Copied to clipboard: " + copyText.value);
  };

  return (
    <>
      <div id="intro-container">
        <p>Hi there, nice to meet you! I am Tristan John Pascual Girao</p>
        <p>Your friendly neighbor programmer. It’s my pleasure that you</p>
        <p>have visited my website.</p>
        <br />
        <br />
        <br />
        <p>Want to know more about me?</p>
        <br />
        <br />
        <div id="intro-footer">
          <p>Keep scrolling, enjoy!</p>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <img src={emoticon} alt="" />
        </div>
      </div>
      <div id="contact-container">
        <div id="pp-background">
          <div id="pp-foreground">
            <img src={pp_image} alt="" />
          </div>
        </div>
        <br />
        <p>CONTACT ME THROUGH</p>
        <br />
        <div id="social-media-container">
          <img
            src={fb_icon}
            alt=""
            onClick={() => {
              window.open("https://web.facebook.com/tristanjohn.girao");
            }}
          />
          <img
            src={twitter_icon}
            alt=""
            onClick={() => {
              window.open("https://twitter.com/GiraoJ4nj4n");
            }}
          />
          <img
            src={linkedin_icon}
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/tristan-john-girao-69521a201/"
              );
            }}
          />
          <input
            type="text"
            value="giraotrista@gmail.com"
            id="myInput"
            readOnly
            style={{ display: "none" }}
          />
          <img
            src={gmail_icon}
            alt=""
            onClick={() => {
              copyGmailHandler();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
