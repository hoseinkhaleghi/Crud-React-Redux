import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../../UserReducer";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";

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
    <div className="bg-gray-400 rounded-xl m-24 justify-center items-center flex flex-col py-4">
        <h1>Add New User</h1>
        <form  onSubmit={handlesubmit} action="">
          <div>
            <label htmlFor="name">Name:</label>
            <Input type="text" name="neme" className="text-black" onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Input type="text" name="email" className="text-black" onChange={e => setEmail(e.target.value)} />
          </div>
          <br />
          <button className="bg-green-400 rounded-md  text-base font-medium  px-8 py-3 ">Submit</button>
        </form>
    </div>
  );
}

export default Create;
