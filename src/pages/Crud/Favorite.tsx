import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import "./styles.css";

// const data = [
//   { id: 1, name: "Marco" ,family:"ada" },
//   { id: 2, name: "Lincoln" },
//   { id: 3, name: "Aya" }
// ];

export default function App() {
  const data = useSelector((state) => state.list);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <div>
      <h1>Initial list</h1>
      <ul>
        {favorites.map((item, i) => (
          <li key={i}>
            {item.name}{" "}
            <button
              onClick={() => {
                handleFavorite(item.id);
              }}
            >
              {item.favorite === true ? "Remove" : "Add"}
            </button>
          </li>
        ))}
      </ul>

      <h1>Favorite list</h1>
      <ul>
        {favorites.map((item) =>
          item.favorite === true ? (
            <li key={item.id}>{item.name + "   " + item.family}</li>
          ) : null
        )}
      </ul>
    </div>
  );
}
