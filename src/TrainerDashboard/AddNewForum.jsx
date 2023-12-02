import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const AddNewForum = () => {
    const handlePost = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const upVotes = form.upVotes.value;
        const downVotes = form.downVotes.value;
        const description = form.description.value;

        const postInfo = { title, upVotes, downVotes, description };


        fetch("https://vector-gym-server-side.vercel.app/forum", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your post has been submitted successfully !',
                });
                form.reset();
            });
    };

    return (
        <div className="bg-gray-100 pb-5">
            <h2 className="text-4xl text-center font-semibold border-b-2 border-yellow-500 w-80 mx-auto p-2 mb-5">Add New Forum</h2>
            <div className="w-3/4 mx-auto bg-white rounded-md p-6 shadow-md">
                <form onSubmit={handlePost} action="#" method="POST">
                    <div className="mb-2">
                        <label className="block text-gray-700 font-semibold mb-2">Title</label>
                        <input type="text" id="title" name="title" placeholder="Title" className="border-gray-300 border rounded-md px-4 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 font-semibold mb-2">Up votes</label>
                        <input type="text" id="upVotes" name="upVotes" placeholder="Up votes" className="border-gray-300 border rounded-md px-4 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 font-semibold mb-2">Down votes</label>
                        <input type="text" id="downVotes" name="downVotes" placeholder="Down votes" className="border-gray-300 border rounded-md px-4 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Description</label>
                        <textarea id="description" name="description" placeholder="Description" className="border-gray-300 border rounded-md px-4 py-2 w-full h-32 resize-none focus:outline-none"></textarea>
                    </div>
                    <button type="submit" className="bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 w-full">Post</button>
                </form>
            </div>
            <Helmet>
                <title>Vector Gym | Add New Forum</title>
            </Helmet>
        </div>
    );
};

export default AddNewForum;
