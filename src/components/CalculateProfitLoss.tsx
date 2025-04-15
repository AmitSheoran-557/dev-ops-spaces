"use client";

import React, { useState } from "react";

const ProfitLossCalculator = () => {
    const [sellingPrice, setSellingPrice] = useState("");
    const [costPrice, setCostPrice] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const calculateProfitLoss = () => {
        const sp = Number(sellingPrice);
        const cp = Number(costPrice);

        if (isNaN(sp) || isNaN(cp)) {
            setError("Please enter valid numbers.");
            setResult("");
            return;
        }

        setError("");

        const difference = sp - cp;
        if (difference > 0) {
            setResult(`Profit: ₹${difference.toFixed(2)}`);
        } else if (difference < 0) {
            setResult(`Loss: ₹${(sp - cp).toFixed(2)}`);
        } else {
            setResult("No Profit, No Loss.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-400 items-center justify-center px-6">
            <div className="bg-white xl:p-10 lg:p-8 md:p-7 sm:p-6 p-4 rounded-xl shadow-lg w-full max-w-xl">
                <h2 className="text-3xl font-semibold mb-8 text-center text-blue-600">Profit or Loss Calculator</h2>

                <div className="mb-5">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Selling Price (₹)</label>
                    <input type="number" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500" placeholder="Enter Selling Price" />
                </div>

                <div className="mb-5">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Cost Price (₹)</label>
                    <input type="number" value={costPrice} onChange={(e) => setCostPrice(e.target.value)} className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500" placeholder="Enter Cost Price" />
                </div>

                {error && (
                    <div className="text-red-600 text-lg font-semibold mb-4">{error}</div>
                )}

                <button onClick={calculateProfitLoss} className="w-full py-2 cursor-pointer bg-black border-2 border-transparent hover:border-black text-white rounded-md hover:bg-white hover:text-black transition-all ease-linear duration-300">
                    Calculate Result
                </button>

                {result && (<div className="mt-6 text-center text-xl font-semibold text-gray-800"> {result}</div>)}
            </div>
        </div>
    );
};

export default ProfitLossCalculator;
