"use client";

import React, { useState } from "react";

const ValidTriangle = () => {
    const [angle1, setAngle1] = useState("");
    const [angle2, setAngle2] = useState("");
    const [angle3, setAngle3] = useState("");
    const [result, setResult] = useState("");

    const checkTriangle = () => {
        const a1 = Number(angle1);
        const a2 = Number(angle2);
        const a3 = Number(angle3);

        if (isNaN(a1) || isNaN(a2) || isNaN(a3)) {
            setResult("Please enter valid numbers for all angles.");
            return;
        }

        if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
            setResult("All angles must be greater than 0.");
            return;
        }

        const sum = a1 + a2 + a3;
        if (sum === 180) {
            setResult("These angles form a valid triangle!");
        } else {
            setResult("The angles do not form a valid triangle.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-500">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-xl font-bold text-center mb-4"> Triangle Validator</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Angle 1 (°)</label>
                    <input type="number" value={angle1} onChange={(e) => setAngle1(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter first angle" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Angle 2 (°)</label>
                    <input type="number" value={angle2} onChange={(e) => setAngle2(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter second angle" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Angle 3 (°)</label>
                    <input type="number" value={angle3} onChange={(e) => setAngle3(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter third angle" />
                </div>

                <button onClick={checkTriangle} className="w-full py-2 cursor-pointer bg-black border-2 border-transparent hover:border-black text-white rounded-md hover:bg-white hover:text-black transition-all ease-linear duration-300">
                    Check Triangle
                </button>

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
