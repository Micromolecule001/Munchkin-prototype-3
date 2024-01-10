import { useEffect, useState } from "react";

// Components
import WorkoutDetails from "../components/WorkoutDetails";


const Home = () => {

    // Using the useState hook to declare a state variable called workouts and a function to update it called setWorkouts. The initial state is an empty array.
    const [workouts, setWorkouts] = useState([]);
    
    // Using the useEffect hook to run a side effect after the component renders. The empty array as the second argument means this effect will only run once after the initial render.
    useEffect(() => {
        const fetchWorkouts = async () => {

            // Fetching data from the 'api/workouts' endpoint. The await keyword is used to wait for the Promise to resolve.
            const response = await fetch('api/workouts');

            // Checking if the response was successful (status code in the range 200-299).
            if (response.ok) {
                // Getting the response text. The await keyword is used to wait for the Promise to resolve.
                const text = await response.text();
                // Logging the response text to the console.
                console.log('Response text:', text);
                try {

                    // Parsing the response text as JSON. The JSON.parse() method throws an error if the text is not valid JSON.
                    const json = JSON.parse(text);

                    // Updating the workouts state with the parsed JSON data.
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
    
    // The component returns a JSX element. This is what will be rendered to the screen.
    return (
        <div>
            <h1> Home </h1>

            <div className="workouts">
                {workouts && workouts.map(workout => (
                    // The WorkoutDetails component is given a key prop (which helps React optimize re-rendering) and a workout prop (which passes the workout data to the component).
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div> 
    );
};

// Exporting the Home component as the default export of this module.
export default Home;