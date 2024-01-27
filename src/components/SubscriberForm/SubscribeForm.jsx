import Swal from "sweetalert2";


const SubscribeForm = () => {
    const handleSubscribe = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const subscriber = { name, email };
        console.log(subscriber);
        fetch('https://vector-gym-server-side.vercel.app/subscriber', {
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
        <section className="lg:w-3/4 mx-auto lg:px-0 px-5">
            <div className="bg-[#ffd166] lg:px-20 px-5 py-10  rounded">
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
