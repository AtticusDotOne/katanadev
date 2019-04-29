$("#menu").click(function() {
  openmenu();
});
function closechat() {
  TweenMax.to("#app > header", 0.35, { ease: Power4.easeOut, x: 0 });
}

var teamBtn = document.getElementById("teamBtn");

teamBtn.onclick = function() {
  TweenLite.to(window, 1, { ease: Power4.easeOut, scrollTo: { y: "#team" } });
};
