import { useEffect, useState } from "react";


const Subscriber = () => {
    const [subscribers, setSubscriber] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/subscriber')
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
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subscribers.map((subscriber, index) => <tr key={subscriber._id}>
                                    <th>{index + 1}</th>
                                    <td>{subscriber.name}</td>
                                    <td>{subscriber.email}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Subscriber;