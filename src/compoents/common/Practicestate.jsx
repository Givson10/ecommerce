import React from 'react'

function Practicestate() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Givson');

    function increment() {
        setCount(prev => prev + 1);
    }

    function decrement() {
        setCount(prev => prev - 1);
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-xl border border-slate-100">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest">
                        User Profile
                    </h2>
                    <p className="text-2xl font-black text-slate-800">
                        {name}
                    </p>
                </div>

                {/* Display Section */}
                <div className="flex flex-col items-center py-6 mb-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <span className="text-6xl font-black text-indigo-600">
                        {count}
                    </span>
                    <span className="text-slate-400 font-medium">Current Points</span>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={decrement}
                        className="flex items-center justify-center h-12 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-red-50 hover:text-red-600 transition-all active:scale-95"
                    >
                        Decrease
                    </button>
                    <button
                        onClick={increment}
                        className="flex items-center justify-center h-12 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all active:scale-95"
                    >
                        Increase
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Practicestate