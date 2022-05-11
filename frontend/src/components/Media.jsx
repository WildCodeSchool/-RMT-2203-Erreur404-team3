import React from "react";

export default function Media() {
  return (
    <article>
      <div className="mediabutton">
        <div className="icon">
          <img src="src/assets/facebook-brands.svg" alt="social media" />
        </div>
        <span>Facebook</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <img src="src/assets/twitter-brands.svg" alt="social media" />
        </div>
        <span>Twitter</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <img src="src/assets/github-brands1.svg" alt="social media" />
        </div>
        <span>Github</span>
      </div>
    </article>
  );
}
