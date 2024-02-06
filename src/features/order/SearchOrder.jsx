import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubsmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubsmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        value={query}
      />
    </form>
  );
}

export default SearchOrder;
