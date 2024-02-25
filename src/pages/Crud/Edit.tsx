import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatelist } from "../../UserReducer";
function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.list);
  console.log(list.filter((f) => f.id == id));
  const existinglist = list.filter((e) => e.id == id);
  //   console.log(existinglist)
  const { name, email } = existinglist[0];
  const [lname, setLName] = useState(name);
  const [lemail, setLEmail] = useState(email);
  const handleupdate = (event) => {
    event.preventDefault();
    dispatch(updatelist({ id: id , name :lname, email:lemail }));
    navigate("/");
  };

  return (
    <div className="flex  justify-center items-center">
      <div className=" border bg-gray-400 text-white p-5 ">
        <h3>Add New User</h3>
        <form onSubmit={handleupdate} action="">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              value={lname}
              onChange={(e) => setLName(e.target.value)}
              type="text"
              name="neme"
              className="text-black"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              value={lemail}
              onChange={(e) => setLEmail(e.target.value)}
              type="text"
              name="email"
              className="text-black"
            />
          </div>
          <br />
          <button className="bg-green-400">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
