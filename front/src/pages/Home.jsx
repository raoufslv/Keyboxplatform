import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button className=" m-5 bg-slate-400 p-3 rounded hover:bg-slate-500 transition duration-300 ease-in-out">
                <a href="/signin">Sign in</a>
            </button>
            <button className=" m-5 bg-purple-400 p-3 rounded hover:bg-purple-500 transition duration-300 ease-in-out">
                <a href="/signup">Sign up</a>
            </button>
        </div>
    );
}

export default Home;