
import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";
import { getAllListings } from "../listingApi";

function Home() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getAllListings();
        setListings(data.filter((listing) => listing.available));
      } catch (err) {
        setError("Unable to load stays. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  useEffect(() => {
    const handleSearch = (event) => {
      setSearchTerm(event.detail);
    };

    window.addEventListener("searchDestination", handleSearch);

    return () => {
      window.removeEventListener("searchDestination", handleSearch);
    };
  }, []);

 const filteredListings = listings.filter((listing) => {
  const search = searchTerm.toLowerCase();

  return (
    listing.location.toLowerCase().includes(search) ||
    listing.country.toLowerCase().includes(search)
  );
});

  return (
    <main className="home">
      <Categories />

      <section className="welcome-section">
        <h1>Find your next getaway</h1>
        <p>
          Discover unique stays, beautiful places and unforgettable experiences.
        </p>
      </section>

      <section className="listings-section">
        <div className="section-heading">
          <h2>Explore stays</h2>
          <p>Find a place that feels like home.</p>
        </div>

        {loading && <p>Loading stays...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            {filteredListings.length === 0 ? (
              <p>
                {searchTerm
                  ? `No stays found for "${searchTerm}". Try another destination.`
                  : "No stays available right now."}
              </p>
            ) : (
              <div className="listings-grid">
                {filteredListings.map((listing) => (
                  <ListingCard key={listing._id} listing={listing} />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Home;
