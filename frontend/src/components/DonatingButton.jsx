import React from "react";

export default function App() {
  const startClick = () => {
    const allOption = document.querySelectorAll(".preselected-donation-option");

    if (allOption !== null) {
      allOption.forEach((ele) => {
        ele.classList.toggle("moved");
      });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 first-button">
          <div className="button-1-contents-wrapper">
            <button
              className="btn btn-default donate-button"
              type="button"
              onClick={startClick}
            >
              Contribuer
            </button>

            <div className="preselected-donation-option option-1">1€</div>

            <div className="preselected-donation-option option-2">1₽</div>

            <div className="preselected-donation-option option-3">1SHIB</div>

            <div className="preselected-donation-option option-4">1ADA</div>

            <div className="preselected-donation-option option-other">
              A votre bon
            </div>
          </div>
        </div>
      </div>
    </div>
    // container-fluid
  );
}
