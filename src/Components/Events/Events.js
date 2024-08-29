import React from "react";

function Events() {
  const events = [
    {
      id: 1,
      title: "Puppy Adoption Day",
      date: "September 10, 2024",
      description:
        "Join us for a day filled with playful puppies ready to find their forever homes.",
      imageUrl:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBhZG9wdGlvbiUyMGRheXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Kitten Meet & Greet",
      date: "September 15, 2024",
      description:
        "Cuddle with the cutest kittens and see if one is your perfect match.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1723701896686-ce9de70e5645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0dGVuJTIwbWVldCUyMGFuZCUyMGdyZWV0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "Senior Pet Adoption",
      date: "September 20, 2024",
      description:
        "Give a senior pet the loving home they deserve during this special event.",
      imageUrl:
        "https://media.istockphoto.com/id/2162930022/photo/golden-retriever-resting-on-green-grass-pet.webp?b=1&s=612x612&w=0&k=20&c=avTcohpd5mJg-o2RpRMmVZvHYfdfwaDIjbyQHosu_UM=",
    },
    {
      id: 4,
      title: "Pet Adoption Fair",
      date: "September 25, 2024",
      description:
        "Meet a variety of pets, learn about adoption, and bring home your new best friend.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683133332890-fee39b3233f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Small Dog Adoption Day",
      date: "September 30, 2024",
      description:
        "Discover a variety of small dog breeds looking for loving homes.",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      id: 6,
      title: "Pet and Owner Bonding Workshop",
      date: "October 1, 2024",
      description:
        "Enhance the connection with your furry friend through this interactive bonding workshop.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681882099798-45536f07053a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGV0JTIwYW5kJTIwT3duZXIlMjBCb25kaW5nJTIwV29ya3Nob3B8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="events">
      {events.map((event) => (
        <div
          key={event.id}
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
          <h3>{event.title}</h3>
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Events;
