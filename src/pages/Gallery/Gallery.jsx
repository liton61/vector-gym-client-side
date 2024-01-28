import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";
import AOS from 'aos';
import 'aos/dist/aos.css';

const LIMIT = 5;

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [activePage, setActivePage] = useState(12);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(false);

    const containerStyle = {
        backgroundImage: 'url("https://i.postimg.cc/2SMhC6Yk/Gym-background.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
    };

    const fetchData = () => {
        if (loading) return;

        setLoading(true);

        axios
            .get('https://vector-gym-server-side.vercel.app/photo', {
                params: {
                    page: activePage,
                    size: LIMIT,
                },
            })
            .then(({ data }) => {
                setActivePage(activePage + 1);
                setGallery((prevGallery) => [...prevGallery, ...data]);
                setTotalData(data.length);
            })
            .catch((error) => {
                console.error('Error:', error.response);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();

    }, []);
    useEffect(() => {
        AOS.init({ duration: "3000" });

    }, []);

    return (
        <div>
            <div className="relative h-screen flex items-center justify-center" style={containerStyle}>
                <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-4xl font-bold uppercase text-center">Vector Gym || Gallery</h1>
                </div>
            </div>
            <InfiniteScroll
                dataLength={gallery.length}
                next={fetchData}
                hasMore={gallery.length < totalData}
                loader={<span className="loading loading-spinner loading-lg"></span>}
                endMessage={<p className="text-center text-2xl text-pink-500 font-bold my-5"><span className="loading loading-spinner text-secondary"></span></p>}
            >
                <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:px-0 px-5">
                    {gallery.map((galleries, index) => (
                        <div key={galleries._id || index} className="max-w-md mx-auto bg-white rounded overflow-hidden border border-pink-500">
                            <img className="h-full object-cover" src={galleries.image} alt="Card" data-aos="fade-up"
                                data-aos-duration="3000" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-center">{galleries.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
            <Helmet>
                <title>Vector Gym | Gallery</title>
            </Helmet>
        </div>
    );
};

export default Gallery;