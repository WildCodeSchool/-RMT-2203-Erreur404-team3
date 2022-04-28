import React from "react";

function DonatingButton() {
  document.ready = () => {
    // button-1
    const button1 = ".donate-button";
    const option1 = ".option-1";
    const option2 = ".option-2";
    const option3 = ".option-3";
    const option4 = ".option-4";
    const optionOther = ".option-other";

    function animateButton1() {
      option1.toggleClass = ".moved";
      option2.toggleClass = ".moved";
      option3.toggleClass = ".moved";
      option4.toggleClass = ".moved";
      optionOther.toggleClass = ".moved";
    }

    button1.OnClick = () => {
      animateButton1();
    };

    // button-2
    const button2 = ".donate-button-2";
    const checkmark = ".registered-checkmark";
    const confirmationText = ".confirmation-text";

    function animateButton2() {
      button2.toggleClass = ".drop";
      checkmark.toggleClass = ".spin";
      confirmationText.toggleClass = ".visible";
    }

    button2.OnClick = () => {
      animateButton2();
    };
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 first-button">
          <div className="button-1-contents-wrapper">
            <div className="btn btn-default donate-button">donate</div>
            <div className="preselected-donation-option option-1">$25</div>
            <div className="preselected-donation-option option-2">$50</div>
            <div className="preselected-donation-option option-3">$100</div>

            <div className="preselected-donation-option option-other">
              Other
            </div>
          </div>
        </div>
        <div className="col-xs-12 second-button">
          <div className="button-2-contents-wrapper">
            <div className="btn btn-default donate-button-2">Register!</div>
            <div className="glyphicon glyphicon-ok registered-checkmark" />
            <p className="confirmation-text">You are registered!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonatingButton;
