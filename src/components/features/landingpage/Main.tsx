import { Key } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Deletelist } from "../../../UserReducer";
function Main() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleDelete =(id) =>{
    dispatch(Deletelist({id : id}))
  }
  return (
    <div>
      <h2>Crud app</h2>
      <Link to="/create" className="bg-green-500 my-3">
        Create
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((list, index: Key | null | undefined) => (
            <tr key={index}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>
                <Link to={`/edit/${list.id}`} className="bg-blue-500">
                  edit
                </Link>
                <button onClick={()=> handleDelete(list.id)} className="bg-red-500">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
