import { useEffect, useState } from "react";

// Components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {

    const [workouts, setWorkouts] = useState([]);
    
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('api/workouts');

            if (response.ok) {
                const text = await response.text();
                console.log('Response text:', text);
                try {
                    const json = JSON.parse(text);
                    setWorkouts(json);
                } catch (error) {
                    console.error('Failed to parse JSON:', error);
                }
            } else {
                console.error('Failed to fetch workouts:', response.status, response.statusText);
            }
        }

        fetchWorkouts();
    }, []); 
    
    return (
        <div>
            <h1>Home</h1>

            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div> 
    );
};

export default Home;