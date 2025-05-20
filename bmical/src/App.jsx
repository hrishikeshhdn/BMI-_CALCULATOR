import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      
      // let bmiCalc = (weight / (height * height)) * 703;

      
      const heightInMeters = height / 100;
      const bmiCalc = weight / (heightInMeters * heightInMeters);

      setBmi(bmiCalc.toFixed(1));

      if (bmiCalc < 18.5) {
        setMessage("You are underweight");
      } else if (bmiCalc >= 18.5 && bmiCalc < 24.9) {
        setMessage("You have a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">BMI Calculator</h2>
        <form onSubmit={calcBmi} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight in kg"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height in cm"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={reload}
              className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-md hover:bg-indigo-100 transition"
            >
              Reload
            </button>
          </div>
        </form>
        {bmi && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold">Your BMI is: {bmi}</h3>
            <p className="text-gray-700">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
