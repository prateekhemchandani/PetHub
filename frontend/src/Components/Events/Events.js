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
        "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
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
