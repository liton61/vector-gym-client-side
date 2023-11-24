

const Blogs = () => {
    return (
        <div>
            <div className="w-96 mx-auto mt-28 mb-10">
                <h1 className="text-center text-4xl font-semibold">Latest Articles</h1>
                <hr className="border-t-4 border-yellow-500 mt-2" />
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Fitness</div>
                        <h2 className="text-xl font-semibold mt-2">The Importance of Cardio in Fitness</h2>
                        <p className="text-gray-700 leading-relaxed mt-4">Cardiovascular exercise is crucial for maintaining a healthy heart...</p>
                        <a href="#" className="block mt-4 text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Nutrition</div>
                        <h2 className="text-xl font-semibold mt-2">Balanced Nutrition: A Key to Healthy Living</h2>
                        <p className="text-gray-700 leading-relaxed mt-4">Understanding the significance of a balanced diet...</p>
                        <a href="#" className="block mt-4 text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 mb-10 transition-transform transform hover:scale-125">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Exercise</div>
                        <h2 className="text-xl font-semibold mt-2">Effective Exercise Routines for Beginners</h2>
                        <p className="text-gray-700 leading-relaxed mt-4">Starting an exercise regimen that suits beginners...</p>
                        <a href="#" className="block mt-4 text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;