import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12 pt-14">
                <h1 className="text-4xl font-bold">About Bee Boyz</h1>
            </header>
            <section>
                <p className="text-xl text-gray-600">
                    Bee Boyz is dedicated to advancing beekeeping through technology. We provide tools and insights to beekeepers, helping them to maintain healthy hives and improve their yields. Our platform uses real-time data collection and analysis to monitor bee colony health, track environmental conditions, and provide predictive insights for beekeepers worldwide.
                </p>
                <p className="text-xl mt-4 text-gray-600">
                    Founded by a team of passionate beekeepers and technologists, Bee Boyz is at the forefront of agricultural innovation. We believe in the power of data to transform beekeeping, making it more sustainable and productive.
                </p>
            </section>
        </div>
    );
};

export default About;
