import React from "react";
import styles from "./EventDetail.module.css"
import EventHeader from "../components/EventHeader/EventHeader"
import WeatherTimeline from "../components/WeatherTimeline/WeatherTimeline"
import Suggestions from "../components/Suggestions/Suggestions"
import BackButton from "../components/BackButton/BackButton"

export default function EventDetail() {
  return (
    <div className={styles.body}>
      <EventHeader />
      <WeatherTimeline />
      <Suggestions />
      <BackButton />

    </div>
  );
}
