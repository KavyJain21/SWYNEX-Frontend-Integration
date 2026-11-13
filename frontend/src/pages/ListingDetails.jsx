
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ListingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const images = {
    "Cozy Beachfront Cottage":
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    "Luxury Mountain Escape":
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "Tropical Paradise Villa":
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
    "Elephantia":
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
  };

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/listings/${id}`
        );

        setListing(response.data.data);
      } catch (err) {
        setError("Unable to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) return <p>Loading property...</p>;
  if (error) return <p>{error}</p>;
  if (!listing) return <p>Property not found.</p>;

  return (
    <main className="details-page">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Explore
      </button>

      <h1>{listing.title}</h1>

      <p className="details-location">
        {listing.location}, {listing.country}
      </p>

      <img
        className="details-image"
        src={listing.image || images[listing.title]}
        alt={listing.title}
      />

      <div className="details-content">
        <h2>About this place</h2>
        <p>{listing.description}</p>

        <h2>What this place offers</h2>
        <p>
          {listing.amenities?.length
            ? listing.amenities.join(", ")
            : "More amenities coming soon."}
        </p>

        <div className="details-price">
          <strong>₹{listing.price}</strong> / night
        </div>
      </div>
    </main>
  );
}

export default ListingDetails;
