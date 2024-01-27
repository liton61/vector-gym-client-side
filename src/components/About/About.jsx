import about from '../../assets/about.webp';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.webp';
import profile3 from '../../assets/profile3.png';

const About = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="lg:w-3/4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-0 px-5">
                    <div>
                        <img src={about} alt="Gym" className="w-full rounded" />
                    </div>
                    <div>
                        <div>
                        <h1 className="text-3xl text-center font-semibold mb-3">About Us</h1>
                            <p className="text-gray-700 mb-2 text-justify">
                                Founded in 2009, Vector Gym is dedicated to providing a holistic fitness experience for individuals of all levels.
                                We are committed to helping you achieve your fitness goals and fostering a healthier lifestyle.
                            </p>
                            <p className="text-gray-700 mb-2 text-justify">
                                Our facilities boast state-of-the-art equipment, diverse fitness classes, expert trainers, and a welcoming community atmosphere.
                                At Vector gym, we believe in making fitness enjoyable, effective, and accessible to everyone.
                            </p>
                        </div>
                        <div>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={profile1} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={profile2} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={profile3} />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <i className="fa-solid fa-star text-yellow-500"></i>
                            <i className="fa-solid fa-star text-yellow-500"></i>
                            <i className="fa-solid fa-star text-yellow-500"></i>
                            <i className="fa-solid fa-star text-yellow-500"></i>
                            <i className="fa-solid fa-star text-yellow-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;