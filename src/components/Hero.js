import React from "react";
import "../index.css"; // 从上一级目录引入 index.css

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* 添加视频背景 */}
      <video autoPlay muted loop className="background-video">
        <source src="/videos/main.mp4" type="video/mp4" />
        您的浏览器不支持视频标签。
      </video>

      <div className="hero-banner">
        <h1>NetNada</h1>
        <p>
          We equip businesses with the tools and expertise to measure, manage,
          and reduce their environmental footprint, all while saving time,
          money, and, most importantly, the planet.
        </p>
        <a href="#about" className="btn hero-btn">
          explore more
        </a>
      </div>
    </section>
  );
};

export default Hero;
