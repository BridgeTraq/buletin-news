import UserImage from "../images/user-dp.jpg"
import { BsDot } from "react-icons/bs";
import { LiaArrowRightSolid } from "react-icons/lia";

function Header({ title, label }) {
    return (
        <header className="flex items-center justify-between">
            <h2 className="font-semibold text-4xl">{title}</h2>
            <span className="inline-flex items-center gap-x-2">
                {label && <span className="accent font-semibold text-lg">{label}</span>}
                <LiaArrowRightSolid className="accent text-lg" />
            </span>
        </header>
    );
}

function Story({ image, name }) {
    return (
        <div className="flex flex-col justify-center items-center gap-y-3">
            <img src={image} alt="story graphics" className="w-[95px] h-[95px] border  border-4 border-[#DE0000] rounded-full object-cover" />
            <span className="text-gray-500">{name}</span>
        </div>
    );
}

function Creator({ image, name, channel }) {
    return (
        <div className="flex justify-center items-center gap-x-3">
            <img src={image} alt="creator graphics" className="w-[60px] h-[60px] rounded-full object-cover" />

            <span className="inline-flex flex-col">
                <span className="font-semibold text-xl">{name}</span>
                <span className="accent text-[.8rem] font-semibold">{channel}</span>
            </span>
        </div>
    );
}

function NewsCard({ newsImage, channel, channelImage, timePosted, title, summary, category, readTime }) {
    return (
        <div className="news-card flex flex-col gap-y-3">
            <img src={newsImage} alt="news head graphics" className="rounded-[15px] h-[250px] w-full mb-1 object-cover" />

            <span className="inline-flex items-center gap-x-1">
                <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                    <img src={channelImage} alt="channel graphics" className="w-full h-full object-cover" />
                </span>
                <span className="text-gray-500 text-sm">{channel}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{timePosted}</span>
            </span>

            <h2 className="text-xl">{title}</h2>
            {summary && <p className="text-gray-500">{summary}</p>}

            <span className="inline-flex items-center gap-x-1">
                <span className="accent font-semibold text-sm">{category}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{readTime}</span>
            </span>

        </div>
    );
}

function NewsCardSmall({ newsImage, channel, channelImage, timePosted, title, category, readTime }) {
    return (
        <div className="news-card flex flex-col gap-y-3">
            <img src={newsImage} alt="news head graphics" className="rounded-[15px] h-[150px] w-full mb-1 object-cover" />

            <span className="inline-flex items-center gap-x-1">
                <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                    <img src={channelImage} alt="channel graphics" className="w-full h-full object-cover" />
                </span>
                <span className="text-gray-500 text-sm">{channel}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{timePosted}</span>
            </span>

            <h2 className="text-xl">{title}</h2>

            <span className="inline-flex items-center gap-x-1">
                <span className="accent font-semibold text-sm">{category}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{readTime}</span>
            </span>

        </div>
    );
}

export default function Home() {
    return (
        <>
            <header className="bg-[#F5F5F5] rounded-[15px] py-10 text-center flex flex-col ">
                <h1 className="uppercase text-gray-600 font-semibold tracking-[5px]">Welcome to Buletin</h1>
                <p className="mx-auto max-w-[700px] w-full font-semibold md:text-3xl" style={{ lineHeight: "45px" }}>Craft narratives ✍️ that ignites <span className="accent">inspiration</span>💡,<br /> <span className="accent">knowledge</span> 📕, and <span className="accent">entertainment</span> 🎬.</p>
            </header>

            <section className="grid grid-cols-2 gap-[4.5em] h-[400px]">
                <div className="flex flex-col relative rounded-[15px] h-[400px] overflow-clip">
                    <img src={UserImage} alt="user" className="object-cover w-full h-full" />
                    <div className="absolute left-0 top-0 w-full h-full" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.3)0% 35%, rgba(0,0, 0, 0.01))" }}></div>
                </div>

                <div className="flex flex-col gap-y-4 py-10 justify-center">
                    <span className="inline-flex items-center gap-x-2">
                        <img src={UserImage} alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
                        <span className="text-gray-500 text-xl">Netflix</span>
                        <BsDot className="text-gray-500 text-lg mt-2" />
                        <span className="text-gray-500 text-lg">12 minutes ago</span>
                    </span>

                    <h2 className="text-5xl font-medium" style={{ lineHeight: "4.2rem" }}>Where to Watch 'John Wick: Chapter 4'</h2>
                    <p className="text-gray-500 text-justify">There's been no official announcement regarding John Wick: Chapter 4's streaming release. However, given it's a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz...</p>

                    <span className="inline-flex items-center gap-x-2">
                        <span className="accent text-xl font-semibold" >Movies</span>
                        <BsDot className="text-gray-500 text-lg mt-2" />
                        <span className="text-gray-500 text-lg">4 min read</span>
                    </span>
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Latest news"} label={"See all"} />

                <div className="grid grid-cols-4 gap-x-5">
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} summary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis."} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} summary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis."} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} summary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis."} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} summary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis."} category={"War"} readTime={"4 min read"} />
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-9">
                <Header title={"Buletin Story"} label={"See all"} />

                <div className="flex gap-x-6">
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                    <Story image={UserImage} name={"BBC"} />
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Must Read"} label={"See all"} />

                <div className="grid grid-cols-4  gap-x-5">
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} summary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis."} category={"War"} readTime={"4 min read"} />
                    <div className="col-span-2 rounded-[15px] flex flex-col relative overflow-clip">
                        <img src={UserImage} alt="user" className="object-cover w-full h-full absolute left-0 t0p-0" />
                        <div className="absolute left-0 top-0 w-full h-full" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.3)0% 35%, rgba(0,0, 0, 0.01))" }}></div>
                        <div className="z-[1] mt-auto px-8 py-7 flex flex-col gap-y-4">
                            <span className="inline-flex items-center gap-x-1">
                                <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                                    <img src={UserImage} alt="channel graphics" className="w-full h-full object-cover" />
                                </span>
                                <span className="text-gray-400 text-sm">TVC</span>
                                <BsDot className="text-gray-400 text-sm" />
                                <span className="text-gray-400 text-sm">10 Hours ago</span>
                            </span>


                            <h2 className="text-2xl text-white">Taylor swift don come again with her wahala</h2>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis.</p>


                            <span className="inline-flex items-center gap-x-1">
                                <span className="text-gray-400 font-semibold text-sm">Entertainment</span>
                                <BsDot className="text-gray-400 text-sm" />
                                <span className="text-gray-400 text-sm">10 min read</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <NewsCardSmall newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} category={"War"} readTime={"4 min read"} />
                        <NewsCardSmall newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world"} category={"War"} readTime={"4 min read"} />
                    </div>
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Editor's Pick"} label={"See all"} />

                <div className="grid grid-cols-4 gap-5">
                    <div className="col-span-full h-[500px] rounded-[15px] flex flex-col relative overflow-clip">
                        <img src={UserImage} alt="user" className="object-cover w-full h-full absolute left-0 t0p-0" />
                        <div className="absolute left-0 top-0 w-full h-full" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.3)0% 35%, rgba(0,0, 0, 0.01))" }}></div>
                        <div className="z-[1] mt-auto px-8 py-7 flex flex-col gap-y-4">
                            <span className="inline-flex items-center gap-x-1">
                                <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                                    <img src={UserImage} alt="channel graphics" className="w-full h-full object-cover" />
                                </span>
                                <span className="text-gray-400 text-sm">TVC</span>
                                <BsDot className="text-gray-400 text-sm" />
                                <span className="text-gray-400 text-sm">10 Hours ago</span>
                            </span>

                            <h2 className="text-2xl text-white">All rumours and wahala of Iphone 16</h2>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero atque nostrum iste quia delectus? Id laborum nihil quaerat inventore. Sunt at inventore fugit facere, id harum eaque dolorem debitis.</p>

                            <span className="inline-flex items-center gap-x-1">
                                <span className="text-gray-400 font-semibold text-sm">Entertainment</span>
                                <BsDot className="text-gray-400 text-sm" />
                                <span className="text-gray-400 text-sm">10 min read</span>
                            </span>
                        </div>
                    </div>

                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                </div>

            </section>

            <section className="grid grid-cols-2 gap-x-5">
                <section class="grid grid-cols-2 gap-5">
                    <div className="col-span-full">
                        <Header title={"Business"} />
                    </div>
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                </section>

                <section class="grid grid-cols-2 gap-5">
                    <div className="col-span-full" >
                        <Header title={"Sport News"} />
                    </div>
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                    <NewsCard newsImage={UserImage} channel={"Formula"} channelImage={UserImage} timePosted={"12 mins ago"} title={"Hello world i am a software engineer"} category={"War"} readTime={"4 min read"} />
                </section>
            </section>


            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Top Creator"} label={"See all"} />


                <div className="flex gap-x-32">
                    <Creator image={UserImage} name={"Jame Carl"} channel={"ALJAZEERA"} />
                    <Creator image={UserImage} name={"Jame Carl"} channel={"ALJAZEERA"} />
                    <Creator image={UserImage} name={"Jame Carl"} channel={"ALJAZEERA"} />
                    <Creator image={UserImage} name={"Jame Carl"} channel={"ALJAZEERA"} />
                </div>
            </section>

            <div className="grid grid-cols-2 bg-[#F5F5F5] rounded-[15px] py-10 px-14 flex">
                <div className="col-span-1">
                    <h1 className="uppercase text-gray-600 font-semibold tracking-[5px]">Get First Update</h1>
                    <p className="mx-auto max-w-[700px] w-full font-semibold md:text-3xl" style={{ lineHeight: "37.5px" }}>Get the news in fronline by <br /> <span className="accent">Subscribe</span> ✍️, our latest updates</p>
                </div>

                <div className="col-span-1 flex gap-x-4 items-center justify-end">
                    <input placeholder="Your email" className="pt-2 pb-3 px-2 rounded-lg border border-1 md:w-[300px] " />
                    <button className="accent-bg text-white py-2 px-3 rounded-lg">Subscribe</button>
                </div>
            </div>

        </>
    )
}