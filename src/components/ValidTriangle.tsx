"use client";

import React, { useState } from "react";

const ValidTriangle = () => {
    const [angle1, setAngle1] = useState(""); // Store angle 1 input
    const [angle2, setAngle2] = useState(""); // Store angle 2 input
    const [angle3, setAngle3] = useState(""); // Store angle 3 input
    const [result, setResult] = useState(""); // Store the result message

    const checkTriangle = () => {
        const a1 = parseFloat(angle1);
        const a2 = parseFloat(angle2);
        const a3 = parseFloat(angle3);

        // Check if all inputs are numbers
        if (isNaN(a1) || isNaN(a2) || isNaN(a3)) {
            setResult("Please enter valid numbers for all angles.");
            return;
        }

        // Check if angles are positive numbers
        if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
            setResult("All angles must be greater than 0.");
            return;
        }

        // Check if the sum of the angles equals 180
        const sum = a1 + a2 + a3;
        if (sum === 180) {
            setResult("These angles form a valid triangle!");
        } else {
            setResult("The angles do not form a valid triangle.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-blue-50">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-center mb-4">
                    🔺 Triangle Validator
                </h1>

                {/* Input for Angle 1 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Angle 1 (°)</label>
                    <input
                        type="number"
                        value={angle1}
                        onChange={(e) => setAngle1(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter first angle"
                    />
                </div>

                {/* Input for Angle 2 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Angle 2 (°)</label>
                    <input
                        type="number"
                        value={angle2}
                        onChange={(e) => setAngle2(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter second angle"
                    />
                </div>

                {/* Input for Angle 3 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Angle 3 (°)</label>
                    <input
                        type="number"
                        value={angle3}
                        onChange={(e) => setAngle3(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter third angle"
                    />
                </div>

                {/* Button to check triangle */}
                <button
                    onClick={checkTriangle}
                    className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                    Check Triangle
                </button>

                {/* Display the result */}
                {result && (
                    <div className="mt-4 text-center text-lg font-semibold text-gray-800">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ValidTriangle;
