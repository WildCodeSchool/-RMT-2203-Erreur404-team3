import { useState } from "react";

export default function DonatingButton() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 first-button">
          <div className="button-1-contents-wrapper">
            <button
              className="btn btn-default donate-button"
              type="button"
              onClick={handleToggle}
            >
              Contribuer
            </button>
            <div
              className={
                isActive
                  ? "preselected-donation-option option-1"
                  : "preselected-donation-option option-1 moved"
              }
            >
              0.50€
            </div>
            <div
              className={
                isActive
                  ? "preselected-donation-option option-2"
                  : "preselected-donation-option option-2 moved"
              }
            >
              1€
            </di>
            <div
              className={
                isActive
                  ? "preselected-donation-option option-3"
                  : "preselected-donation-option option-3 moved"
              }
            >
              2€
            </div>
            <div
              className={
                isActive
                  ? "preselected-donation-option option-4"
                  : "preselected-donation-option option-4 moved"
              }
            >
              5€
            </div>
            <div
              className={
                isActive
                  ? "preselected-donation-option option-other"
                  : "preselected-donation-option option-other moved"
              }
            >
              A votre bon ❤
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
