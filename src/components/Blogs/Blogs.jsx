/* eslint-disable react/no-unescaped-entities */


const Blogs = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000">
            <div className="w-96 mx-auto mt-28 mb-10">
                <h1 className="text-center text-4xl font-semibold">Latest Articles</h1>
                <hr className="border-t-4 border-yellow-500 mt-2" />
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-20 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="p-8">
                        <h2 className="text-xl font-semibold mt-2">The A Journey to a Healthier You</h2>
                        <p className="text-gray-700 leading-relaxed mt-4">Fitness isn’t just about physical activity; it’s a way of life that encompasses a holistic approach to health and well-being. It's a journey that leads to a happier, healthier, and more fulfilling life....</p>
                        <a href="/fullBlogs" className="block mt-4 text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;