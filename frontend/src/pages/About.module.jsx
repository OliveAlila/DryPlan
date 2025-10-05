import React from "react";
import "./About.css";

export default function AboutPage() {
  return (
    <div className="dry-about">
      {/* 🌦️ Hero Section */}
      <section className="dry-hero">
        <h1>🌧️ DryPlan</h1>
        <p>
          Plan your outdoor adventures with confidence —  
          never let the rain catch you off guard again.
        </p>
       
      </section>

      {/* 💡 Quick Intro */}
      <section className="dry-intro">
        <p>
          DryPlan helps users make smarter decisions for outdoor events by predicting rainfall and
          offering clear insights. Whether you’re planning a picnic, a sports event, or a trip,  
          DryPlan helps you choose the best time to stay dry and enjoy your day.
        </p>
      </section>

      {/* ⚙️ What It Does */}
      <section className="dry-features">
        <h2>What DryPlan Does</h2>
        <div className="dry-feature-grid">
          <div className="dry-feature">
            <span>📅</span>
            <p>Recommends the best dates for outdoor activities.</p>
          </div>
          <div className="dry-feature">
            <span>☀️</span>
            <p>Analyzes rainfall trends to predict upcoming showers.</p>
          </div>
          <div className="dry-feature">
            <span>📍</span>
            <p>Uses location-based data for accurate local forecasts.</p>
          </div>
          <div className="dry-feature">
            <span>🔔</span>
            <p>Sends smart alerts for sudden weather changes.</p>
          </div>
        </div>
      </section>

      {/* 👩‍💻 Team Section */}
      <section className="dry-team">
        <h2>Meet the Team</h2>
        <div className="dry-team-grid">
          <div className="dry-member">
            <h3>Alila</h3>
            <p className="dry-role">UI/UX & Navigation</p>
            <p className="dry-power">🎨 Designing seamless user experiences</p>
          </div>
          <div className="dry-member">
            <h3>Grace</h3>
            <p className="dry-role">Frontend Developer</p>
            <p className="dry-power">⚙️ Building intuitive interfaces</p>
          </div>
          <div className="dry-member">
            <h3>Natasha</h3>
            <p className="dry-role">Backend & APIs</p>
            <p className="dry-power">🧠 Handling data flow behind the scenes</p>
          </div>
          <div className="dry-member">
            <h3>Mueni</h3>
            <p className="dry-role">Marketing & Presentation</p>
            <p className="dry-power">📣 Telling DryPlan’s story</p>
          </div>
        </div>
      </section>

      {/* 🌍 Vision */}
      <section className="dry-vision">
        <h2>Our Vision</h2>
        <p>
          To empower people to plan their days smarter using data and prediction.  
          We believe technology should help communities adapt to changing weather patterns  
          and turn uncertainty into preparation.
        </p>
      </section>

      {/* 🚀 CTA */}
      <section className="dry-cta">
        <p>
          🚀 Built in 48 hours with passion, coffee, and teamwork.  
          Follow our journey on{" "}
          <a
            href="https://github.com/OliveAlila/DryPlan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          💙
        </p>
      </section>
    </div>
  );
}
