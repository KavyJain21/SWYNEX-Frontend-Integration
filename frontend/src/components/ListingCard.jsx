
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Star } from "lucide-react";

function ListingCard({ listing }) {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

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

  return (
    <div
      className="listing-card"
      onClick={() => navigate(`/listings/${listing._id}`)}
    >
      <div className="listing-image">
        <img
          src={listing.image || images[listing.title]}
          alt={listing.title}
        />

        <button
          className="wishlist-btn"
          onClick={(e) => {
            e.stopPropagation();
            setSaved(!saved);
          }}
          style={{ color: saved ? "#ff385c" : "white" }}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={22} fill={saved ? "#ff385c" : "none"} />
        </button>
      </div>

      <div className="listing-info">
        <div className="listing-title">
          <h3>{listing.title}</h3>
          <span><Star size={14} /> 4.8</span>
        </div>

        <p>{listing.location}, {listing.country}</p>

        <p className="listing-price">
          <strong>₹{listing.price}</strong> night
        </p>
      </div>
    </div>
  );
}

export default ListingCard;
