

const Booked = () => {
    return (
        <div className="bg-gray-100 py-8 px-4">
            <h2 className="text-4xl text-center font-semibold border-b-4 border-blue-600 w-96 mx-auto p-2 mb-10 mt-5">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 md:w-full w-full mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-md w-72 flex flex-col justify-between mx-auto mb-10">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Silver Plan</h2>
                        <p>Included:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>5 fitness classes/month</li>
                            <li>Access to gym facilities</li>
                            <li>Personalized diet plan</li>
                        </ul>
                    </div>
                    <button className="mt-4 btn btn-active btn-secondary text-white">
                        Join Now
                    </button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md w-72 flex flex-col justify-between mx-auto mb-10">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Gold Plan</h2>
                        <p>Included:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>10 fitness classes/month</li>
                            <li>Access to gym facilities</li>
                            <li>Personal trainer sessions</li>
                            <li>Swimming pool access</li>
                        </ul>
                    </div>
                    <button className="mt-4 btn btn-active btn-secondary text-white">
                        Join Now
                    </button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md w-72 flex flex-col justify-between mx-auto mb-10">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Diamond Plan</h2>
                        <p>Included:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Unlimited fitness classes</li>
                            <li>Access to gym facilities</li>
                            <li>Personal trainer sessions</li>
                            <li>Swimming pool access</li>
                            <li>Spa &amp; sauna facilities</li>
                        </ul>
                    </div>
                    <button className="mt-4 btn btn-active btn-secondary text-white">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Booked;