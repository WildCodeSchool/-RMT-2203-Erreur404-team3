/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from "react";
import Logos from "../components/Logos";
import Button from "../components/Button";
import FloattingText from "../components/FloattingText";
import FloattingTitle from "../components/FloattingTitle";

// Some random colors
const colors = ["#54F98D", "#9683EC", "#E73E01", "#DF73FF"];

const numBalls = 40;
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

// Keyframes
balls.forEach((el, i) => {
  const to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  const anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});

export default function Home() {
  return (
    <div className="home">
      <Logos />
      <FloattingTitle title="Adopte un reste, c'est quoi ?" />
      <FloattingText
        text="Cette année plus que jamais, la générosité et la solidarité sont de mise, alors à l'action !
          Très simplement, tu peux faire profiter un voisin d`un plat que tu as cuisiné en trop grande
          quantité ou d'ingrédients qui sinon partiront tristement à la
          poubelle."
      />
      <div className="home-button-div">
        <Button link="/disheslist" text="Je prends !" />
        <Button link="/dish" text="Je donne !" />
      </div>
    </div>
  );
}
