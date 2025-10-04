import mongoose from "mongoose";
import Event from "../models/Event.js";

/**
 * GET /api/events
 */
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * GET /api/events/:id
 */
export const getEventById = async (req, res) => {
  const { id } = req.params;

  // ✅ Validate ID before querying
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid event ID" });
  }

  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * POST /api/events
 * body: { name, date, location }
 */
export const createEvent = async (req, res) => {
  const { name, date, location } = req.body;

  if (!name || !date || !location) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newEvent = new Event({ name, date, location });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
