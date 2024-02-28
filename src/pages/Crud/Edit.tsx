import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatelist } from "../../UserReducer";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
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
    dispatch(updatelist({ id: id, name: lname, email: lemail }));
    navigate("/");
  };

  return (
    <div className="bg-gray-400 rounded-xl m-24 justify-center items-center flex flex-col py-4">
      <h3>Add New User</h3>
      <form onSubmit={handleupdate} action="">
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            type="text"
            name="neme"
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            value={lemail}
            onChange={(e) => setLEmail(e.target.value)}
            type="text"
            name="email"
            className="text-black"
          />
        </div>
        <br />
        <button className="bg-green-400 rounded-md  text-base font-medium  px-8 py-3">Update</button>
      </form>
    </div>
  );
}

export default Edit;
