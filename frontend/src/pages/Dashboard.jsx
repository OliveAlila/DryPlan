// frontend/src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";

const weatherIcon = (condition) => {
  const c = condition.toLowerCase();
  if (c.includes("cloud")) return "☁️";
  if (c.includes("rain")) return "🌧️";
  if (c.includes("storm")) return "⛈️";
  if (c.includes("snow")) return "❄️";
  if (c.includes("clear")) return "☀️";
  if (c.includes("mist") || c.includes("fog")) return "🌫️";
  return "🌡️";
};

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
  });
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const newEvent = await res.json();
        setEvents((prev) => [...prev, newEvent]);
        setFormData({ name: "", date: "", location: "" });
      }
    } catch (err) {
      console.error("Error creating event:", err);
    } finally {
      setCreating(false);
    }
  };

  const getRiskStyles = (risk) => {
    switch (risk) {
      case "high":
        return { badge: styles.badgeHigh, card: styles.riskHigh };
      case "medium":
        return { badge: styles.badgeMedium, card: styles.riskMedium };
      default:
        return { badge: styles.badgeLow, card: styles.riskLow };
    }
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  if (loading) return <div className={styles.loading}>Loading events...</div>;

  return (
    <div className={styles.container}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1>🌧️ DryPlan</h1>
        <p>
          Your weather-proof event guardian. Never get caught in the rain again.
        </p>
      </div>

      {/* Add Event Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>➕ Add New Event</h3>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn} disabled={creating}>
          {creating ? "Adding..." : "Add Event"}
        </button>
      </form>

      {/* Events Section */}
      <div className={styles.eventsSection}>
        <h2>Your Events ({events.length})</h2>
        {events.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No events yet. Create your first event above! 🎉</p>
          </div>
        ) : (
          <div className={styles.eventsGrid}>
            {events.map((event) => {
              const { badge, card } = getRiskStyles(event.risk);
              return (
                <div key={event._id} className={`${styles.card} ${card}`}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.eventName}>{event.event}</h3>
                    <span className={`${styles.riskBadge} ${badge}`}>
                      {event.risk.toUpperCase()}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <p className={styles.date}>📅 {formatDate(event.date)}</p>
                    <p className={styles.location}>📍 {event.location}</p>
                    {event.temperature && (
                      <>
                        <p>
                          {weatherIcon(event.condition)} Temp:{" "}
                          {event.temperature.toFixed(1)}°C
                        </p>
                        <p>☁️ Condition: {event.condition}</p>
                        <p>💧 Humidity: {event.humidity}%</p>
                        <p>💨 Wind: {event.wind_speed} m/s</p>
                      </>
                    )}
                  </div>

                  <div className={styles.cardFooter}>
                    <button className={styles.viewDetailsBtn}>
                      View Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
