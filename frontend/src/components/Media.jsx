import React from "react";

export default function Media() {
  return (
    <div>
      <div className="mediabutton">
        <div className="icon">
          <i className="fab fa-facebook-f" />
        </div>
        <span>Facebook</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <i className="fab fa-twitter" />
        </div>
        <span>Twitter</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <i className="fab fa-linkedin" />
        </div>
        <span>LinkedIn</span>
      </div>

      <div className="mediabutton">
        <div className="icon">
          <i className="fab fa-github" />
        </div>
        <span>Github</span>
      </div>
    </div>
  );
}
