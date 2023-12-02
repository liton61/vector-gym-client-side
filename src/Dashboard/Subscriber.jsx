import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const Subscriber = () => {
    const [subscribers, setSubscriber] = useState([]);
    useEffect(() => {
        fetch('https://vector-gym-server-side.vercel.app/subscriber')
            .then(res => res.json())
            .then(data => setSubscriber(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-10 mt-5">All Subscribers</h2>
            <div>
                <div className="overflow-x-auto lg:w-3/4 mx-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-yellow-500 text-white font-medium">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subscribers.map((subscriber, index) => <tr key={subscriber._id}>
                                    <th>{index + 1}</th>
                                    <td>{subscriber.name}</td>
                                    <td>{subscriber.email}</td>
                                    <td><i className="fa-solid fa-trash-can text-lg text-red-600 cursor-pointer"></i></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Helmet>
                <title>Vector Gym | All Subscribers</title>
            </Helmet>
        </div>
    );
};

export default Subscriber;