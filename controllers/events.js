const Event = require("../models/event");

module.exports = {
  index,
  new: newEvent,
  create,
};

function index(req, res) {
  Event.find({}, function (err, events) {
    res.render("events/index", { title: "All Events", events });
  });
}

function newEvent(req, res) {
  res.render("events/new", { title: "Add Event" });
}

function create(req, res) {
  const event = new Event(req.body);
  event.save(function (err) {
    if (err) return res.redirect("/events/new");
    console.log(event);
    res.redirect(`/events/${event._id}`);
  });
}