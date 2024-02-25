import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../UserReducer";
import { useNavigate } from "react-router-dom";

function Create() {
    const list = useSelector((state) => state.list);
    const navigate = useNavigate();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const dispatch = useDispatch();
    const handlesubmit = (event) =>{
        event.preventDefault();
        dispatch(addList({id: list[list.length - 1].id + 1 , name , email}))
        navigate('/')
    }
  return (
    <div className="flex  justify-center items-center">
      <div className=" border bg-gray-400 text-white p-5 ">
        <h3>Add New User</h3>
        <form onSubmit={handlesubmit} action="">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="neme" className="text-black" onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="text-black" onChange={e => setEmail(e.target.value)} />
          </div>
          <br />
          <button className="bg-green-400">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
