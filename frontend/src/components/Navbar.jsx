
import { useState } from "react";
import { Search, Menu, UserRound, X } from "lucide-react";

function Navbar() {
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    window.dispatchEvent(
      new CustomEvent("searchDestination", {
        detail: destination.trim(),
      })
    );
  };

  const clearSearch = () => {
    setDestination("");
    window.dispatchEvent(
      new CustomEvent("searchDestination", {
        detail: "",
      })
    );
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">Wanderlust<span>.</span></div>

        <div className="nav-links">
          <button className="active">Stays</button>
          <button>Experiences</button>
        </div>

        <div className="nav-right">
          <button className="host-btn">Become a host</button>

          <button className="profile-btn">
            <Menu size={19} />
            <UserRound size={25} />
          </button>
        </div>
      </header>

      <div className="search-section">
        <div className="search-bar">
          <div className="search-field">
            <strong>Where</strong>
            <input
              type="text"
              placeholder="Search destinations"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>

          <div className="search-field">
            <strong>Check in</strong>
            <span>Add dates</span>
          </div>

          <div className="search-field">
            <strong>Check out</strong>
            <span>Add dates</span>
          </div>

          <div className="search-field">
            <strong>Who</strong>
            <span>Add guests</span>
          </div>

          {destination && (
            <button
              className="clear-search"
              onClick={clearSearch}
              title="Clear search"
            >
              <X size={18} />
            </button>
          )}

          <button className="search-button" onClick={handleSearch}>
            <Search size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
