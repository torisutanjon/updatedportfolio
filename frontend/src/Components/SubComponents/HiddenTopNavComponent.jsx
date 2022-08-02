//dependencies
import React from "react";

//assets
import fb_icon from "../../Assets/fb_icon.png";
import twitter_icon from "../../Assets/twitter_icon.png";
import linkedin_icon from "../../Assets/linkedin_Icon.png";
import gmail_icon from "../../Assets/gmail_icon.png";

const HiddenTopNavComponent = () => {
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
      <p>Contact Me: </p>
      <input type="text" value="giraotrista@gmail.com" id="myInput" readOnly />

      <a href="https://web.facebook.com/tristanjohn.girao">
        <img src={fb_icon} alt="fb_icon" />
      </a>
      <a href="https://twitter.com/GiraoJ4nj4n">
        <img src={twitter_icon} alt="twitter_icon" />
      </a>
      <a href="https://www.linkedin.com/in/tristan-john-girao-69521a201/">
        <img src={linkedin_icon} alt="linkedin_icon" />
      </a>
      <img
        src={gmail_icon}
        alt=""
        onClick={() => {
          copyGmailHandler();
        }}
      />
    </>
  );
};

export default HiddenTopNavComponent;
