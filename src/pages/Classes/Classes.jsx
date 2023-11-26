

const Classes = () => {
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold border-b-4 border-blue-600 w-80 mx-auto p-2 mb-10 mt-5">Weekly Schedule</h2>
            <div className="overflow-x-auto lg:w-1/2 mx-auto mt-10">
                <table className="table table-zebra border">
                    {/* head */}
                    <thead>
                        <tr className="bg-pink-600 text-white">
                            <th>#</th>
                            <th>Saturday</th>
                            <th>Monday</th>
                            <th>Wednesday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Push-ups</td>
                            <td>Squats</td>
                            <td>Pull-ups</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Abs Gain</td>
                            <td>Body Building</td>
                            <td>Yoga & Meditation</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Muscle Gain</td>
                            <td>Weight Loss</td>
                            <td>Running Session</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td>Bicycle Crunches</td>
                            <td>Calf Raises</td>
                            <td>Bicep Curls</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Classes;