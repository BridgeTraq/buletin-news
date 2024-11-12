import { LiaBell } from "react-icons/lia";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import UserImage from "../images/user-dp.jpg"


export default function NavBar() {
    return (
        <nav className="flex justify-between" id="nav" name="nav">
            <ul className="inline-flex items-center gap-x-5">
                <li><span className="accent text-2xl font-semibold">Buletin</span></li>
                <li className="inline-flex items-center h-full"><span className="w-[3px] h-[1.3em] bg-gray-400"></span></li>
                <li>
                    <Link to="/stories" className="text-gray-600 text-md font-medium">Stories</Link>
                </li>
                <li>
                    <Link to="/creators" className="text-gray-600 text-md font-medium">Creators</Link>
                </li>
                <li>
                    <Link to="/community" className="text-gray-600 text-md font-medium">Community</Link>
                </li>
                <li>
                    <Link to="/subscribe" className="text-gray-600 text-md font-medium">Subscribe</Link>
                </li>
            </ul>

            <ul className="inline-flex items-center gap-x-6">
                <li>
                    <Link to="/write" className="inline-flex gap-x-2 items-center">
                        <TbEdit className="text-gray-600 text-xl" />
                        <span className="text-gray-600 text-md font-semibold">Write</span>
                    </Link>
                </li>
                <li>
                    <LiaBell className="text-gray-700 text-[1.5em]" />
                </li>
                <li>
                    <img src={UserImage} alt="user" className="w-[35px] h-[35px] rounded-full object-cover" />
                </li>
            </ul>
        </nav >
    );
}

