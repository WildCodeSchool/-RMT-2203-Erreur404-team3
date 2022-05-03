<div className="container-fluid">
  <div className="row">
    {/* button # 1 */}
    <div className="col-xs-12 first-button">
      {/* button */}
      <div className="button-1-contents-wrapper">
        {/* donate-button */}
        <button
          className="btn btn-default donate-button"
          type="button"
          onClick="startClick(this)"
        >
          Contribuer
        </button>
        {/* donate-options */}
        {/* option #1 */}
        <div className="preselected-donation-option option-1">1€</div>
        {/* option #2 */}
        <div className="preselected-donation-option option-2">1$</div>
        {/* option #3 */}
        <div className="preselected-donation-option option-3">1SHIB</div>
        {/* option #4 */}
        <div className="preselected-donation-option option-4">1ADA</div>
        {/* other */}
        <div className="preselected-donation-option option-other">
          A votre bon ♥
        </div>
      </div>
      {/* button-contents-wrapper */}
    </div>
    {/* col-xs-12(button#1) */}
  </div>
  {/* row */}
</div>;
// container-fluid
const allOption = document.querySelectorAll(".preselected-donation-option");
// eslint-disable-next-line no-unused-vars
const startClick = () => {
  if (allOption !== null) {
    allOption.forEach((ele) => {
      ele.classList.toggle("moved");
    });
  }
};
