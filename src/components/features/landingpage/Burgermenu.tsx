import { VscHome } from 'react-icons/vsc';
import { IoCartOutline } from 'react-icons/io5';
import { PiUserSquareThin } from 'react-icons/pi';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Burgermenu() {
  return (
    <div className="lg:hidden">
      <div className="flex flex-row justify-around  pt-2   ">
        <div className="flex flex-row border-b-2 border-red justify-start">
          <Link to="/landingpage" className="flex flex-row justify-start">
            <VscHome />
            <div className="">خانه</div>
          </Link>
        </div>
        <div className="flex flex-row border-b-2 border-red justify-start">
          <Link to="/dashboard/orders" className="flex flex-row justify-start">
            <IoCartOutline />
            <div>سفارشات</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-row justify-start">
          <Link to="/signUp" className="flex flex-row justify-start">
            <PiUserSquareThin />
            <div className="">ثبت نام / ورود</div>
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
  );
}

export default Burgermenu;
