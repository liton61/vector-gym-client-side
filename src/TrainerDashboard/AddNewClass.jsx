
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddNewClass = () => {
    const axiosSecure = useAxiosSecure();
    const handleApplied = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const timeSlot = form.timeSlot.value;
        const price = form.price.value;
        const day = form.day.value;
        const description = form.description.value;


        const classInfo = { name, image, description, timeSlot, price, day }
        console.log(classInfo);

        // send data to the server
        axiosSecure.post('http://localhost:5000/classes', classInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "You have successfully applied !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="pb-14 bg-gray-100">
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-5">Add New Class</h2>
            <form onSubmit={handleApplied} className="lg:w-3/4 mx-auto bg-white p-5 rounded-lg">
                <div className='md:flex gap-6 justify-center'>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Name" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Day</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='day' placeholder="Day" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-6 justify-center'>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='timeSlot' placeholder="Time" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full px-5">
                    <label className="label">
                        <span className='label-text font-bold'>Photo URL

                        </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='image' placeholder="Photo URL" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>
                <div className="form-control w-full px-5 mb-2">
                    <label className="label">
                        <span className='label-text font-bold'>Description
                        </span>
                    </label>
                    <label className="input-group">
                        <textarea type="text" name='description' placeholder="Description" className="input input-bordered focus:outline-none w-full h-28" />
                    </label>
                </div>
                <div className="px-5">
                    <button type="submit" className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg focus:outline-none font-medium">Add Class</button>
                </div>
            </form>
            <Helmet>
                <title>Vector Gym | Add New Class</title>
            </Helmet>
        </div>
    );
};

export default AddNewClass;