import React from "react";

function Events() {
  const events = [
    {
      type: "Dog",
      name: "Buddy",
      age: "3 years",
      description: "A friendly golden retriever.",
      imageUrl:
        "https://images.unsplash.com/photo-1584283201516-4624475c2944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXklMjBkb2dzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="events">
      {events.map((event) => (
        <div
          className="event-card"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            maxWidth: "300px",
          }}
        >
          <img
            src={event.imageUrl}
            alt={event.title}
            style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
          />
          <h3>{event.type}</h3>
          <p className="nameage">
            <strong>Name:</strong> {event.name}
            <br />
            <strong>Age:</strong> {event.age}
          </p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;
