import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const TrainerForm = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleApplied = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const age = form.age.value;
        const image = form.image.value;
        const timeDay = form.timeDay.value;
        const timeWeek = form.timeWeek.value;
        const salary = form.salary.value;
        const role = "member";
        const status = "pending";
        const skills = {
            skill1: { checked: form.skill1.checked, value: form.skill1.checked ? form.skill1.value : '' },
            skill2: { checked: form.skill2.checked, value: form.skill2.checked ? form.skill2.value : '' },
            skill3: { checked: form.skill3.checked, value: form.skill3.checked ? form.skill3.value : '' },
            skill4: { checked: form.skill4.checked, value: form.skill4.checked ? form.skill4.value : '' }
        };

        const checkedSkills = {};
        for (const [key, value] of Object.entries(skills)) {
            if (value.checked) {
                checkedSkills[key] = value.value;
            }
        }

        const trainerDoc = { email, age, timeDay, name, image, timeWeek, salary, role, status, skills: checkedSkills }
        console.log(trainerDoc);

        // send data to the server
        axiosSecure.post('/trainerApplication', trainerDoc)
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
                    navigate('/trainer')
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="p-14 bg-gray-100">
            <form onSubmit={handleApplied} className="lg:w-3/4 mx-auto bg-white p-10 rounded-lg">
                <div className='md:flex gap-6 justify-center mb-4'>

                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Full Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Employer Email </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='email' defaultValue={user?.email} className="input input-bordered focus:outline-none w-full" disabled />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-6 justify-center mb-4'>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Your Age</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name='age' placeholder="Enter Your Age" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='image' placeholder="Enter image URL" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-6 justify-center mb-4'>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Select your skills</span>
                        </label>
                        <label className="input-group">
                            <div className="gap-2">
                                <div className="flex gap-2" >
                                    <input type="checkbox"
                                        name="skill1" id="skill1" value={'Yoga'} />
                                    <label htmlFor="skill1"><a href="#">Yoga</a></label>
                                </div>
                                <div className="flex gap-2" >
                                    <input type="checkbox"
                                        name="skill2" id="skill2" value={'Body building'} />
                                    <label htmlFor="skill2"><a href="#">Body Building</a></label>
                                </div>
                                <div className="flex gap-2" >
                                    <input type="checkbox"
                                        name="skill3" id="skill3" value={'Muscle gain'} />
                                    <label htmlFor="skill3"><a href="#">Muscle Gain</a></label>
                                </div>
                                <div className="flex gap-2" >
                                    <input type="checkbox"
                                        name="skill4" id="skill4" value={'Weight loss'} />
                                    <label htmlFor="skill4"><a href="#">Weight Loss</a></label>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Available time in a week
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='timeWeek' placeholder="Enter available time in a week" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-6 justify-center mb-4'>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Available time in a day
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='timeDay' placeholder="Enter available time in a day" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 px-5">
                        <label className="label">
                            <span className='label-text font-bold'>Salary
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='salary' placeholder="Your Role" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>
                </div>

                <div className="px-5">
                    <button type="submit" className="w-full bg-[#ffd166] py-2 px-4 rounded-lg focus:outline-none font-medium">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default TrainerForm;