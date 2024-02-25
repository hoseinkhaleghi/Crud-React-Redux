import { useState } from 'react';
import Burgermenu from './Burgermenu';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoMenu } from 'react-icons/io5';
import { VscHome } from 'react-icons/vsc';
import { PiUserSquareThin, PiUsersThreeDuotone } from 'react-icons/pi';
import { CiUser } from "react-icons/ci";

function Header() {
  const [burger, setBurger] = useState(false);

  function burgerhandler() {
    setBurger(!burger);
  }

  return (
    <div className=" bg-white w-full p-2 z-10  fixed   ">
      <div className="flex-row flex justify-between  ">
        <button
          className="flex justify-start text-gray-500 mt-2 text-xl lg:hidden"
          onClick={burgerhandler}
        >
          <IoMenu />
        </button>
        <div className="lg:flex hidden gap-4">
          <div className="flex flex-row justify-around gap-4 pt-2  ">
            <div className="flex flex-row  justify-start">
              <Link to="/landingpage" className="flex flex-row justify-start">
                <VscHome />
                <div className="">خانه</div>
              </Link>
            </div>
            <div className="flex flex-row   justify-start">
              <Link to="/dashboard/orders" className="flex flex-row justify-start">
                <IoCartOutline />
                <div>سفارشات</div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-around pt-2 gap-4">
            <div className="flex flex-row justify-start">
              <Link to="/signUp" className="flex flex-row justify-start">
                <PiUserSquareThin />
                ثبت نام / ورود
              </Link>
            </div>
            <div className="flex flex-row justify-start">
              <Link to="/about" className="flex flex-row justify-start">
                <PiUsersThreeDuotone />
                <div>درباره ما</div>
              </Link>
            </div>
          </div>
        </div>
        <p className="justify-center flex items-center text-xl font-semibold mt-2 text-red">
          مکعب
        </p>
        <Link to="/dashboard/models" className="flex flex-row justify-start">
        <button
          className="flex justify-start text-gray-500 m-2 pl-3 text-xl"
        >
          <CiUser />
        </button>
        </Link>
      </div>
      {!burger ? '' : <Burgermenu />}
    </div>
  );
}
export default Header;
