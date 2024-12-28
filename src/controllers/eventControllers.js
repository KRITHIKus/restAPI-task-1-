const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

 //creating an event
async function createEvent(req, res) {
  try {
    const {
      name,
      tagline,
      schedule,
      description,
      moderator,
      category,
      sub_category,
      rigor_rank,
      attendees,
    } = req.body;

  
    const parsedAttendees = attendees ? JSON.parse(attendees) : [];

 
    const image = req.file ? `/uploads/${req.file.filename}` : null;

  
    if (
      !name ||
      !schedule ||
      !description ||
      !moderator ||
      !category ||
      !sub_category ||
      !rigor_rank
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const db = getDB();
    const eventData = {
      type: "event",
      uid: moderator,
      name,
      tagline,
      schedule,
      description,
      image,
      moderator,
      category,
      sub_category,
      rigor_rank,
      attendees: parsedAttendees, 
    };

    const result = await db.collection("events").insertOne(eventData);

    res.status(201).json({
      id: result.insertedId,
      message: "Event created successfully",
    });
  } catch (err) {
    console.error("Error creating event:", err);
    res.status(500).json({ error: "Failed to create the event" });
  }
}
 
//retrieving the event by event ID
async function getEventById(req, res) {
  try {
    const { id } = req.params;

  
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

    const db = getDB();
    const event = await db.collection("events").findOne({ _id: new ObjectId(id) }); // Use `new` keyword here

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(event);
  } catch (err) {
    console.error("Error retrieving event:", err);
    res.status(500).json({ error: "Failed to retrieve the event" });
  }
}
  
//  retrieving latest events
async function getLatestEvents(req, res) {
  try {
    const { limit = 5, page = 1 } = req.query;

    const db = getDB();
    const events = await db
      .collection("events")
      .find()
      .sort({ schedule: -1 })
      .skip((page - 1) * parseInt(limit))
      .limit(parseInt(limit))
      .toArray();

    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve events" });
  }
}


// updating the event by event ID
async function updateEvent(req, res) {
  try {
    const { id } = req.params;
    const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees } = req.body;


    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

 
    const updateData = {};

    if (name) updateData.name = name;
    if (tagline) updateData.tagline = tagline;
    if (schedule) updateData.schedule = schedule;
    if (description) updateData.description = description;
    if (moderator) updateData.moderator = moderator;
    if (category) updateData.category = category;
    if (sub_category) updateData.sub_category = sub_category;
    if (rigor_rank) updateData.rigor_rank = rigor_rank;
    if (attendees) updateData.attendees = attendees;

   
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const db = getDB();
    const result = await db.collection("events").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({ message: "Event updated successfully" });
  } catch (err) {
    console.error("Error updating event:", err);
    res.status(500).json({ error: "Failed to update the event" });
  }
}

// deleting the event
async function deleteEvent(req, res) {
  try {
    const { id } = req.params;


    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

    const db = getDB();
    const result = await db.collection("events").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error("Error deleting event:", err);
    res.status(500).json({ error: "Failed to delete the event" });
  }
}


module.exports = {
  createEvent,
  getEventById,
  getLatestEvents,
  updateEvent,
  deleteEvent,
};
