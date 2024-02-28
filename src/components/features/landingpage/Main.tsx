import { Key, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Deletelist } from "../../../UserReducer";
import Button from "../../common/button/Button";
function Main() {
  const data = useSelector((state) => state.list);
  // const favoritelist = useSelector((state) => state.favoritelist);
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(data);
  }, [data]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const handleDelete = (id: number) => {
    dispatch(Deletelist({ id: id }));
  };
  function handleFavorite(id) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  return (
    <div className="bg-orange-200 rounded-xl m-24 justify-center items-center flex flex-col">
      <h2>Crud app</h2>
      <Link to="/create">
        <Button className="bg-green-950 my-3 justify-start flex">
          Create +
        </Button>
      </Link>
      <Link to={"/favorite"}>
        <Button className="bg-yellow-500">Favorite List</Button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((item, index: Key | null | undefined) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td className="border-l-2 border-gray-200">{item.name}</td>
              <td className="border-l-2 border-gray-200">{item.email}</td>
              <td className="gap-3 flex flex-row border-l-2 border-gray-200">
                <Link to={`/edit/${item.id}`}>
                  <Button className="bg-blue-500">edit</Button>
                </Link>
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500"
                >
                  delete
                </Button>
                <Button
                  onClick={() => {
                    handleFavorite(item.id);
                  }}
                  className="bg-yellow-500"
                >
                  {item.favorite === true ? "Remove" : "Favorite"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Favorite list</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((item, index: Key | null | undefined) =>
            item.favorite === true ? (
              <tr key={index}>
                <td>{item.id}</td>
                <td className="border-l-2 border-gray-200">{item.name}</td>
                <td className="border-l-2 border-gray-200">{item.email}</td>
                <td className="gap-3 flex flex-row border-l-2 border-gray-200"></td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
