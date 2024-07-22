import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12 pt-14">
                <h1 className="text-4xl font-bold">Welcome to Bee Boyz</h1>
                <p className="text-xl text-gray-600">
                    Bee Boyz is an innovative platform dedicated to the real-time monitoring and management of bee colonies. Our mission is to support beekeepers by providing detailed, actionable insights to enhance the health and productivity of their hives.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Queen Bee Tracking</h2>
                    <p>Utilize cutting-edge technology to track the health and activity of the queen bee, ensuring the stability and growth of your hive.</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Number of Bees in the Hive</h2>
                    <p>Get accurate counts and statistical analysis of your hive's population, helping you make informed decisions on bee colony management.</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Bee Patterns</h2>
                    <p>Study the flight and foraging patterns of your bees with our pattern analysis tools to maximize their efficiency and health.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
