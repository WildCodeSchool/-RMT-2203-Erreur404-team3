/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
export default function LittleBubbles(props) {
  // Les couleurs des bulles
  const colors = ["#54F98D", "#9683EC", "#E73E01", "#DF73FF"];

  // La création des bulles
  const numBalls = 60;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
  }

  // Le mouvement des bulles
  balls.forEach((el, i) => {
    const to = {
      x: Math.random() * (i % 2 === 0 ? -15 : 15),
      y: Math.random() * 10, // pour changer la distance
    };

    const anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` },
      ],
      {
        duration: (Math.random() + 1) * 2000, // pour changer la vitesse
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  });
  return <div className="ball">{props.balls}</div>;
}
