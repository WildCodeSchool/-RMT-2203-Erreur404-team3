import React from "react";

export default function Media() {
  return (
    <div>
      <div className="mediabutton">
        <div className="icon">
          <img src="assets/facebook-brands.svg" alt="social media " />
        </div>
        <span>Facebook</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <img src="assets/twitter-brands.svg" alt="social media " />
        </div>
        <span>Twitter</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <img src="assets/linkedin-brands.svg" alt="social media " />
        </div>
        <span>LinkedIn</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <img src="assets/github-brands.svg" alt="social media " />
        </div>
        <span>Github</span>
      </div>
    </div>
  );
}
