/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet";


// Function to generate random values
const getRandomValue = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const ActivityLog = () => {
    // Sample data arrays for random values
    const trainers = ['John Doe', 'Scott Perry', 'Celeste Martin'];
    const days = ['Saturday', 'Monday', 'Wednesday']
    const trainingSlots = [' 10:00am - 11:00am', '09:10am - 10:00am', '04:00pm - 05:00pm'];
    const locations = ['Vector Gym'];
    const activityTypes = ['Cardio', 'Weight Training', 'Yoga'];

    // Generate random values for each section
    const randomTrainer = getRandomValue(trainers);
    const randomDays = getRandomValue(days)
    const randomTrainingSlot = getRandomValue(trainingSlots);
    const randomLocation = getRandomValue(locations);
    const randomActivityType = getRandomValue(activityTypes);

    return (
        <div className="mt-20 lg:px-0 px-5">
            <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Today's Activity</h2>

                <div className="flex flex-col space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold">Trainer :</span>
                        <span className="text-gray-500 text-sm font-medium">{randomTrainer}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Days :</span>
                        <span className="text-gray-500 text-sm font-medium">{randomDays}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Training Time :</span>
                        <span className="text-gray-500 text-sm font-medium">{randomTrainingSlot}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Location :</span>
                        <span className="text-gray-500 text-sm font-medium">{randomLocation}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Activity Type :</span>
                        <span className="text-gray-500 text-sm font-medium">{randomActivityType}</span>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Vector Gym | Activity Log</title>
            </Helmet>
        </div>
    );
};

export default ActivityLog;
