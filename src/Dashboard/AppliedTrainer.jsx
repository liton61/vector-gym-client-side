import { useEffect, useState } from "react";


const AppliedTrainer = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/trainerApplication')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-10 mt-5">Applied Trainers</h2>
            <div>
                <div className="overflow-x-auto lg:w-3/4 mx-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainers.map((trainer, index) => <tr key={trainer._id}>
                                    <th>{index + 1}</th>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={trainer.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                    <td>{trainer.name}</td>
                                    <td><i className="fa-solid fa-eye cursor-pointer"></i></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <button
                data-ripple-light="true"
                data-dialog-target="dialog"
                className="middle none center mr-4 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Open Dialog
            </button>
            <div
                data-dialog-backdrop="dialog"
                data-dialog-backdrop-close="true"
                className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
            >
                <div
                    data-dialog="dialog"
                    className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
                >
                    <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
                        Its a simple dialog.
                    </div>
                    <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
                        The key to more success is to have a lot of pillows. Put it this way, it took me
                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                        luv.
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
                        <button
                            data-ripple-dark="true"
                            data-dialog-close="true"
                            className="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            Cancel
                        </button>
                        <button
                            data-ripple-light="true"
                            data-dialog-close="true"
                            className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AppliedTrainer;