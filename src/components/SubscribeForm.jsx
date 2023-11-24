

const SubscribeForm = () => {

    return (
        <section className="flex justify-center items-center py-20 bg-[#ffd166]">
            <div className="p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="block w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="block w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#f72585] text-white py-2 px-4 rounded focus:outline-none justify-center"
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SubscribeForm;
