

const Booked = () => {
    return (
        <div className="bg-base-200 py-10">
            <h2 className="text-4xl text-center font-bold mb-10">Choose Your Plan</h2>
            <div className="lg:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-5">
                <div className="rounded-md p-5 bg-white h-80 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Silver Plan</h2>
                        <div className="mt-2">
                            <p className="font-medium">Included:</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>5 fitness classes/month</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Access to gym facilities</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Personalized diet plan</p>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-active btn-secondary text-white w-full">
                        Join Now
                    </button>
                </div>


                <div className="rounded-md p-5 bg-white h-80 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Gold Plan</h2>
                        <div className="mt-2">
                            <p className="font-medium">Included:</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>10 fitness classes/month</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Access to gym facilities</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Personal trainer sessions</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Swimming pool access</p>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-active btn-secondary text-white w-full">
                        Join Now
                    </button>
                </div>

                <div className="rounded-md p-5 bg-white h-80 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Diamond Plan</h2>
                        <div className="mt-2">
                            <p className="font-medium">Included:</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Unlimited fitness classes</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Access to gym facilities</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Personal trainer sessions</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Swimming pool access</p>
                            <p><i className="fa-solid fa-check text-green-600 mr-2"></i>Spa &amp; sauna facilities</p>
                        </div>
                    </div>
                    <button className="mt-4 btn btn-active btn-secondary text-white w-full">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Booked;