import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12 pt-14">
                <h1 className="text-4xl font-bold">Welcome to the Bee Boyz</h1>
                <p className="text-xl text-gray-600">Bee Boyz is blah blah blah.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Queen Bee Tracking</h2>
                    <p>Blah Blah.</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Number of bees in the hive</h2>
                    <p>Blah Blah.</p>
                </div>
                <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center justify-center">
                    <h2 className="font-semibold text-lg">Bee Patterns</h2>
                    <p>Blah Blah.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
