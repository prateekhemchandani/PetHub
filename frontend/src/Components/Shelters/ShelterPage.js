import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './ShelterPage.css'; // Assuming this file contains your CSS
import L from 'leaflet';

// Import default Leaflet marker images (needed for markers to appear correctly)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Create a custom icon
const customMarkerIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41]  // size of the shadow
});

const ShelterPage = () => {
  const [shelters, setShelters] = useState([]);
  const [filteredShelters, setFilteredShelters] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [mapCenter, setMapCenter] = useState([19.0760, 72.8777]); // Initial center set to Mumbai coordinates

  useEffect(() => {
    // Fetch shelter data from JSON file
    axios.get('/shelters.json').then(response => {
      setShelters(response.data);
      setFilteredShelters(response.data);
    });
  }, []);

  useEffect(() => {
    const filterShelters = shelters.filter(shelter =>
      (shelter.location.toLowerCase().includes(searchLocation.toLowerCase()) || searchLocation === '') &&
      (shelter.services.toLowerCase().includes(searchType.toLowerCase()) || searchType === '')
    );
    setFilteredShelters(filterShelters);
  }, [searchLocation, searchType, shelters]);

  // Function to handle clicking on a shelter card
  const handleCardClick = (latitude, longitude) => {
    setMapCenter([latitude, longitude]); // Update map center to the selected shelter's location
  };

  return (
    <div className="shelter-page">
      <h1>Shelter Listings</h1>

      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by type of services"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        />
      </div>

      <div className="shelter-list">
        {filteredShelters.map(shelter => (
          <div key={shelter.id} className="shelter-card" onClick={() => handleCardClick(shelter.latitude, shelter.longitude)}>
            <div className="shelter-card-content">
              <h2>{shelter.name}</h2>
              <p><strong>Location:</strong> {shelter.location}</p>
              <p><strong>Description:</strong> {shelter.description}</p>
              <p><strong>Services:</strong> {shelter.services}</p>

              <h3>Available Pets:</h3>
              <ul>
                {shelter.pets.map(pet => (
                  <li key={pet.id}>{pet.name} ({pet.type}, {pet.age} years old)</li>
                ))}
              </ul>

              <h3>Volunteer Opportunities:</h3>
              <p>{shelter.volunteerOpportunities}</p>

              {/* Add Donate Now Button */}
              <button
                className="donate-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the card click event
                  window.location.href = `http://localhost:3001/donation`;
                }}>
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="map-container">
        <MapContainer center={mapCenter} zoom={10} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredShelters.map(shelter => (
            <Marker 
              key={shelter.id} 
              position={[shelter.latitude, shelter.longitude]} 
              icon={customMarkerIcon}
            >
              <Popup>
                <strong>{shelter.name}</strong><br />
                {shelter.description}<br />
                <strong>Location:</strong> {shelter.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
export default ShelterPage;