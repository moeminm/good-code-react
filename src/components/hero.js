import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__heading">
          <span className="hero__heading--primary">
            Front End Coding Challenges. For Free.
          </span>
          <span className="hero__heading--sub">
            Browse through dozens of front end coding challenges, complete with
            Adobe XD files and styleguides.
          </span>
        </h1>
        <a href="#challenges" className="cta">
          View Challenges 👉
        </a>
      </div>
      <div className="hero__right">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_5wN38A.json"
          background="transparent"
          speed="1"
          style = {{width: '706.02', height: '549.18'}}
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
  );
}

export default Hero;
