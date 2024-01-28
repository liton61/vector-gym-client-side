import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";



const Profile = () => {
    const { user } = useAuth();
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;


        fetch(`https://vector-gym-server-side.vercel.app/users/${user?.email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, photo }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Updated !',
                    text: 'Your profile has been successfully updated !',
                });
            });
    }
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center py-20 lg:px-0 px-5">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Update Your Profile</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2">Photo URL</label>
                            <input type="photo" id="photo" name="photo" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" placeholder="Enter your photo url" required />
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full bg-[#ffd166] py-2 px-4 rounded-lg focus:outline-none font-medium">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
            <Helmet>
                <title>Vector Gym | Profile Siting</title>
            </Helmet>
        </div>
    );
};

export default Profile;