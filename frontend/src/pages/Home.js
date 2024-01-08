import { useEffect, useState } from "react";

const Home = () => {
    return (

        useEffect(() => {
            const fetchItems = async () => {
                const data = await fetch('https://api.github.com/users');
                const items = await data.json();
                console.log(items);
            }
        }, []),

        <div>
            <h1>Home</h1>
            <p>This is the home page.</p>
        </div>
    );
}

export default Home;