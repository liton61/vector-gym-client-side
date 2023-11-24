import Swal from "sweetalert2";


const SubscribeForm = () => {
    const handleSubscribe = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const subscriber = { name, email };
        console.log(subscriber);
        fetch('http://localhost:5000/subscriber', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(subscriber)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully subscribed !",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }

    return (
        <section className="flex justify-center items-center py-20 bg-[#ffd166]">
            <div className="p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <form onSubmit={handleSubscribe}>
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
                        className="btn btn-active btn-secondary justify-center"
                    >
                        Subscribe Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SubscribeForm;
