import React, { useState } from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the file upload logic here
        console.log('Uploading', file);
        alert('File uploaded successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold">Upload Bee Data</h1>
            </header>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <input type="file" onChange={handleFileChange} className="mb-4" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Upload File
                </button>
            </form>
        </div>
    );
};

export default Upload;
