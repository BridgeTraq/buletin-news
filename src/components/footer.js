import * as IconL from "react-icons/lia";
import { Link } from "react-router-dom";
import * as IconR from "react-icons/ri";


const items = {
    Business: ["Startup", "Employee", "Success", "Videos", "Markets",],
    Technology: ["Innovate", "Gadget", "Innovative Cites", "Upstarts", "Future Tech",],
    Travel: ["Destinations", "Food & Drink", "Buy", "News", "Videos",],
    Sports: ["Football", "Tennis", "Golf", "Monosports", "Usports",],
    Entertainment: ["Movies", "Artists", "Television", "Influencer", "Viral",],
    Features: ["Art Equals", "Call to Earth", "Freedom Project", "Inside Asia", "2 Degrees",],
    Weather: ["Climate", "Storm Tracker", "Wildfire Tracker", "Earthquake", "Video",],
    More: ["Design", "Mentorship", "Investment", "Work for Buletin", "Support Us",],
}


function RoundIcon({ iconName }) {
    const Icon = IconL[iconName] || IconR[iconName];
    return (
        <span className="inline-flex items-center p-3 rounded-full shadow-md">
            <span className="inline-flex items-center justify-center accent-bg w-[25px] h-[25px] rounded-full">
                <Icon className="text-white text-md" />
            </span>
        </span>
    );
}

export default function Footer() {
    const titles = Object.keys(items);
    const ArrowIcon = IconL["LiaArrowUpSolid"]
    return (
        <footer className="flex relative">
            <div className="flex flex-col gap-y-3 basis-[35%]">
                <span className="accent text-2xl font-semibold">Buletin</span>
                <p className="text-gray-500 mb-2 leading-snug">Craft Narratives that ignites Inspiration,<br />Knowledge and Entertainment</p>
                <ul className="inline-flex gap-x-4 items-center">
                    <li>
                        <Link to="/" >
                            <RoundIcon iconName="LiaFacebookF" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            <RoundIcon iconName="LiaLinkedinIn" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            <RoundIcon iconName="LiaTwitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/" >
                            <RoundIcon iconName="RiInstagramLine" />
                        </Link>
                    </li>
                </ul>

                <p className="text-gray-500 mb-2 leading-snug mt-auto">Copyright &copy; 2023  Buletin.</p>
            </div>

            <div className="grid grid-cols-4 gap-x-10 gap-y-14 basis-[65%]">
                {
                    titles.map((title) => {
                        return (<div className="inline-flex flex-col gap-y-3">
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <ul className="inline-flex flex-col gap-y-3">
                                {items[title].map((item, index) => {
                                    return (
                                        <li key={index} className="text-gray-500">
                                            <Link to="/">{item}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>)
                    })
                }
            </div>


            <a href="#top" className="inline-flex items-center p-3 rounded-full shadow-md absolute right-[-1.8em] bottom-[-4.4em]">
                <ArrowIcon className="accent text-xl" />
            </a>
        </footer>
    );
}


