// import UserImage from "../images/user-dp.jpg"
import { BsDot } from "react-icons/bs";
import { LiaArrowRightSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { textShrink, dateFix } from "../components/article-helper";
import { Link } from "react-router-dom";

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

function Creator({ image, name, source }) {
    return (
        <div className="flex justify-center items-center gap-x-3">
            <img src={image} alt="creator graphics" className="w-[60px] h-[60px] rounded-full object-cover" />

            <span className="inline-flex flex-col">
                <span className="font-semibold text-xl">{name}</span>
                <span className="accent text-[.8rem] font-semibold">{source}</span>
            </span>
        </div>
    );
}

function NewsCard({ bannerImage, source, sourceImage, url, timePosted, title, summary, category, readTime }) {
    return (
        <div className="news-card flex flex-col gap-y-3">
            <img src={bannerImage} alt="news head graphics" className="rounded-[15px] h-[250px] w-full mb-1 object-cover" />

            <span className="inline-flex items-center gap-x-1">
                <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                    <img src={sourceImage} alt="source graphics" className="w-full h-full object-cover" />
                </span>
                <span className="text-gray-500 text-sm">{source}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{dateFix(timePosted)}</span>
            </span>

            <h2 className="text-xl"><Link to={url || "/"}>{textShrink(title, 8)}</Link></h2>
            {summary && <p className="text-gray-500"><Link to={url || "/"}>{textShrink(summary, 20)}</Link></p>}

            <span className="inline-flex items-center gap-x-1 mt-auto">
                <span className="accent font-semibold text-sm">{category}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{readTime}</span>
            </span>

        </div>
    );
}

function NewsCardSmall({ bannerImage, source, url, sourceImage, timePosted, title, category = "news", readTime = "few minutes" }) {

    return (
        <div className="news-card flex flex-col gap-y-3">
            <img src={bannerImage} alt="news head graphics" className="rounded-[15px] h-[150px] w-full mb-1 object-cover" />

            <span className="inline-flex items-center gap-x-1">
                <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                    <img src={sourceImage} alt="source graphics" className="w-full h-full object-cover" />
                </span>
                <span className="text-gray-500 text-sm">{source}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{dateFix(timePosted)}</span>
            </span>

            <h2 className="text-xl"><Link to={url || "/"}>{textShrink(title, 8)}</Link></h2>

            <span className="inline-flex items-center gap-x-1">
                <span className="accent font-semibold text-sm">{category}</span>
                <BsDot className="text-gray-500 text-sm" />
                <span className="text-gray-500 text-sm">{readTime}</span>
            </span>

        </div>
    );
}

function HeroIntro() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const query = "John Wick"
        const encode = encodeURIComponent(query);
        const url = `https://newsapi.org/v2/everything?q=${encode}&language=en&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a`
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);


    const randomIndex = data.length > 1 ? Math.round(Math.random() * (data.length - 1)) : 0;
    let article = data[randomIndex];
    // let article = data[0] 3,14,2,81,51,98,66;
    if (!(article)) return <p>Loading...</p>;
    // console.log(randomIndex);

    const category = article?.category || "News";
    const readTime = article?.readTime || "few mins";
    // console.log(article, "was here")
    return (
        <section className="grid grid-cols-2 gap-[4.5em] h-min-[400px]">
            <div className="flex flex-col relative rounded-[15px] h-min-[400px] h-[full] overflow-clip">
                <img src={article?.urlToImage} alt="banner" className="object-cover w-full h-full" />
                <div className="absolute left-0 top-0 w-full h-full" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.3)0% 35%, rgba(0,0, 0, 0.01))" }}></div>
            </div>

            <div className="flex flex-col gap-y-4 py-10 justify-center">
                <span className="inline-flex items-center gap-x-2">
                    <img src={article?.urlToImage} alt="source logo" className="w-[40px] h-[40px] rounded-full object-cover" />
                    <span className="text-gray-500 text-xl">{article?.source?.name}</span>
                    <BsDot className="text-gray-500 text-lg mt-2" />
                    <span className="text-gray-500 text-lg">{dateFix(article?.publishedAt)}</span>
                </span>

                <h2 className="text-5xl font-medium" style={{ lineHeight: "4.2rem" }}><Link to={article?.url || "/"}>{textShrink(article?.title, 8)}</Link></h2>
                <p className="text-gray-500 text-justify"><Link to={article?.url || "/"}>{article?.description}</Link></p>

                <span className="inline-flex items-center gap-x-2">
                    <span className="accent text-xl font-semibold" >{category}</span>
                    <BsDot className="text-gray-500 text-lg mt-2" />
                    <span className="text-gray-500 text-lg">{readTime}</span>
                </span>
            </div>
        </section>

    );
}


function LatestNews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 4; i++) {
        news.push(data[i])
    }

    // console.log(news[0])
    return (
        <>
            {
                news.map(article => {
                    if (!(article)) return <p>Loading...</p>;

                    return (
                        <NewsCard bannerImage={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={article?.source?.name} sourceImage={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} url={article?.url} timePosted={article?.publishedAt} title={article?.title} summary={article?.description} category={article?.category || "News"} readTime={article?.readTime || "few mins"} />
                    );
                })
            }

        </>
    );
}

function BusinessNews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 2; i++) {
        news.push(data[i])
    }

    // console.log(news[0])
    return (
        <>
            {
                news.map(article => {
                    if (!(article)) return <p>Loading...</p>;

                    return (
                        <NewsCard url={article?.url} bannerImage={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={article?.source?.name} sourceImage={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={article?.publishedAt} title={article?.title} summary={article?.description} category={article?.category || "few mins"} readTime={article?.readTime || "few mins"} />
                    );
                })
            }

        </>
    );
}

function SportNews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 2; i++) {
        news.push(data[i])
    }

    // console.log(news[0])
    return (
        <>
            {
                news.map(article => {
                    if (!(article)) return <p>Loading...</p>;

                    return (
                        <NewsCard url={article?.url} bannerImage={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={article?.source?.name} sourceImage={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={article?.publishedAt} title={article?.title} summary={article?.description} category={article?.category || "few mins"} readTime={article?.readTime || "few mins"} />
                    );
                })
            }

        </>
    );
}

function Stories() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=news&excludeDomains=yahoo.com&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 10; i++) {
        news.push(data[i])
    }

    // console.log(news[0])
    return (
        <>
            {
                news.map(article => {
                    if (!(article)) return <p>Loading...</p>;

                    return (
                        <Story image={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} name={article?.source?.name} />
                    );
                })
            }

        </>
    );
}

function MustReadNews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?category=technology&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 4; i++) {
        news.push(data[i]);
        // console.log("i pushed ", i, " times")
    }

    // console.log(news[0], news[1], news[2], news[3]);
    const item1 = news[0];
    const item2 = news[1];
    const item3 = news[2];
    const item4 = news[3];


    return (
        <>
            <NewsCard url={item1?.url} bannerImage={item1?.urlToImage} source={item1?.source?.name} sourceImage={item1?.urlToImage} timePosted={item1?.publishedAt} title={item1?.title} summary={item1?.description} category={item1?.category || "News"} readTime={item1?.readTime || "few mins"} />
            <div className="col-span-2 rounded-[15px] flex flex-col relative overflow-clip">
                <img src={item2?.urlToImage} alt="user" className="object-cover w-full h-full absolute left-0 t0p-0" />
                <div className="absolute left-0 top-0 w-full h-full" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.65)0% 25%, rgba(0,0, 0, 0.01))" }}></div>
                <div className="z-[1] mt-auto px-8 py-7 flex flex-col gap-y-4">
                    <span className="inline-flex items-center gap-x-1">
                        <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                            <img src={item2?.urlToImage} alt="source graphics" className="w-full h-full object-cover" />
                        </span>
                        <span className="text-gray-400 text-sm">{item2?.source?.name}</span>
                        <BsDot className="text-gray-400 text-sm" />
                        <span className="text-gray-400 text-sm">{dateFix(item2?.publishedAt)}</span>
                    </span>


                    <h2 className="text-2xl text-white"><Link to={item2?.url || "/"}>{textShrink(item2?.title, 8)}</Link></h2>
                    <p className="text-gray-400"><Link to={item2?.url || "/"}>{textShrink(item2?.description, 20)}</Link></p>


                    <span className="inline-flex items-center gap-x-1">
                        <span className="text-gray-400 font-semibold text-sm">{item2?.category || "News"}</span>
                        <BsDot className="text-gray-400 text-sm" />
                        <span className="text-gray-400 text-sm">{item2?.readTime || "few mins"}</span>
                    </span>
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <NewsCardSmall url={item3?.url} bannerImage={item3?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={item3?.source?.name} sourceImage={item3?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={item3?.publishedAt} title={item3?.title} category={item3?.category || "News"} readTime={item3?.readTime || "few mins"} />
                <NewsCardSmall url={item4?.url} bannerImage={item4?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={item4?.source?.name} sourceImage={item4?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={item4?.publishedAt} title={item4?.title} category={item4?.category || "News"} readTime={item4?.readTime || "few mins"} />
            </div>

        </>
    );
}


function EditorsPick() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?q=news&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 5; i++) {
        news.push(data[i]);
    }

    // console.log(news[0], news[1], news[2], news[3]);
    const item1 = news[0];
    const item2 = news[1];
    const item3 = news[2];
    const item4 = news[3];
    const item5 = news[4];

    // console.log(item1)

    return (
        <>
            <div className="col-span-full h-[500px] rounded-[15px] flex flex-col relative overflow-clip">
                <img src={item1?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} alt="user" className="object-cover w-full h-full absolute left-0 t0p-0" />
                <div className="absolute left-0 top-0 w-full h-full" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.65) 25%, rgba(0,0, 0, 0.01))" }}></div>
                <div className="z-[1] mt-auto px-8 py-7 flex flex-col gap-y-4">
                    <span className="inline-flex items-center gap-x-1">
                        <span className="flex items-center justify-center border w-[20px] h-[20px] rounded-full overflow-clip">
                            <img src={item1?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} alt="source graphics" className="w-full h-full object-cover" />
                        </span>
                        <span className="text-gray-400 text-sm">{item1?.source?.name}</span>
                        <BsDot className="text-gray-400 text-sm" />
                        <span className="text-gray-400 text-sm">{dateFix(item1?.publishedAt)}</span>
                    </span>

                    <h2 className="text-2xl text-white"><Link to={item1.url || "/"}>{textShrink(item1?.title, 15)}</Link></h2>
                    <p className="text-gray-400"><Link to={item1.url || "/"}>{textShrink(item1?.description, 50)}</Link></p>

                    <span className="inline-flex items-center gap-x-1">
                        <span className="text-gray-400 font-semibold text-sm">{item1?.category || "News"}</span>
                        <BsDot className="text-gray-400 text-sm" />
                        <span className="text-gray-400 text-sm">{item1?.readTime || "few mins"}</span>
                    </span>
                </div>
            </div>

            <NewsCard url={item2?.url} bannerImage={item2?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={item2?.source?.name} sourceImage={item2?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={item2?.publishedAt} title={item2?.title} category={item2?.category || "News"} readTime={item2?.readTime || "few mins"} />
            <NewsCard url={item3?.url} bannerImage={item3?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={item3?.source?.name} sourceImage={item3?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={item3?.publishedAt} title={item3?.title} category={item3?.category || "News"} readTime={item3?.readTime || "few mins"} />
            <NewsCard url={item4?.url} bannerImage={item4?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={item4?.source?.name} sourceImage={item4?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={item4?.publishedAt} title={item4?.title} category={item4?.category || "News"} readTime={item4?.readTime || "few mins"} />
            <NewsCard url={item5?.url} bannerImage={item5?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} source={item5?.source?.name} sourceImage={item5?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} timePosted={item5?.publishedAt} title={item5?.title} category={item5?.category || "News"} readTime={item5?.readTime || "few mins"} />
        </>
    );
}

function Creators() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=news&excludeDomains=yahoo.com&apiKey=ecb6cd52bcfd4ba09d609a6cfe231e4a";
        fetch(url)
            .then(response => response.json())
            .then(data => { setData(data.articles); })
            .catch(error => console.error(error))
    }, []);

    const news = [];
    if (!(data)) return <p>Loading...</p>;

    for (let i = 0; i < 4; i++) {
        news.push(data[i])
    }

    // console.log(news[0])
    return (
        <>
            {
                news.map(article => {
                    if (!(article)) return <p>Loading...</p>;

                    return (
                        <Creator image={article?.urlToImage || "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1731516246~exp=1731519846~hmac=de65ea5942eb0c44fc10a59b81ee734fdb7c17ecf2d24a2e83efbfa25b481656&w=740"} name={article?.source?.name} source={article?.source?.name} />
                    );
                })
            }

        </>
    );
}

export default function Home() {

    return (
        <>
            <header className="bg-[#F5F5F5] rounded-[15px] py-10 text-center flex flex-col ">
                <h1 className="uppercase text-gray-600 font-semibold tracking-[5px]">Welcome to Buletin</h1>
                <p className="mx-auto max-w-[700px] w-full font-semibold md:text-3xl" style={{ lineHeight: "45px" }}>Craft narratives ✍️ that ignites <span className="accent">inspiration</span>💡,<br /> <span className="accent">knowledge</span> 📕, and <span className="accent">entertainment</span> 🎬.</p>
            </header>

            <HeroIntro />

            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Latest news"} label={"See all"} />

                <div className="grid grid-cols-4 gap-x-5">
                    <LatestNews />
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-9">
                <Header title={"Buletin Story"} label={"See all"} />

                <div className="flex gap-x-6 ">
                    <Stories />
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Must Read"} label={"See all"} />

                <div className="grid grid-cols-4  gap-x-5">
                    <MustReadNews />
                </div>
            </section>

            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Editor's Pick"} label={"See all"} />

                <div className="grid grid-cols-4 gap-5">
                    <EditorsPick />
                </div>

            </section>

            <section className="grid grid-cols-2 gap-x-5">
                <section class="grid grid-cols-2 gap-5">
                    <div className="col-span-full">
                        <Header title={"Business"} />
                    </div>
                    <BusinessNews />
                </section>

                <section class="grid grid-cols-2 gap-5">
                    <div className="col-span-full" >
                        <Header title={"Sport News"} />
                    </div>
                    <SportNews />
                </section>
            </section>


            <section class="latest-news flex flex-col gap-y-7">
                <Header title={"Top Creator"} label={"See all"} />


                <div className="flex gap-x-32">
                    <Creators />
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