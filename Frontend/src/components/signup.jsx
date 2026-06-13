import React from 'react'
import singimg from '../assets/signupimage.svg'
const signup = () => {
    return (
        <>
            <div className='w-full h-[90vh] mt-[10vh] flex p-[5vh] justify-evenly items-center border border-black'>
                <div className="w-full max-w-md bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 rounded-3xl shadow-2xl px-4 py-2 border border-white/20 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-center text-white">
                        Create Account
                    </h2>
                    <p className="text-center text-white/70 text-sm mt-1 mb-6">
                        Join the Lost & Found community
                    </p>
                    <div className="flex flex-col gap-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border border-white/20 bg-white/10 text-white placeholder:text-white/60 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-white transition-all"
                        />

                        <select
                            className="border border-white/20 bg-white/10 text-white p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-white transition-all"
                        >
                            <option className="text-black">Select Gender</option>
                            <option className="text-black">Male</option>
                            <option className="text-black">Female</option>
                            <option className="text-black">Other</option>
                        </select>

                        <select
                            className="border border-white/20 bg-white/10 text-white p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-white transition-all"
                        >
                            <option className="text-black">Select Role</option>
                            <option className="text-black">Student</option>
                            <option className="text-black">Faculty</option>
                            <option className="text-black">Staff</option>
                        </select>

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="border border-white/20 bg-white/10 text-white placeholder:text-white/60 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-white transition-all"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-white/20 bg-white/10 text-white placeholder:text-white/60 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-white transition-all"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="border border-white/20 bg-white/10 text-white placeholder:text-white/60 p-3 rounded-xl focus:outline-none focus:ring-0 focus:border-white transition-all"
                        />

                        <button className="bg-white text-[#2563EB] py-3 rounded-xl font-semibold mt-2 hover:scale-[1.05] hover:bg-gray-100 transition-all duration-300 shadow-lg cursor-pointer">
                            Create Account
                        </button>

                        <div className="text-center mt-2 text-sm">
                            <span className="text-white/70">
                                Already have an account?
                            </span>{" "}
                            <a
                                href="/login"
                                className="text-white font-semibold hover:underline"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-[40%]'>
                    <img src={singimg} alt="" className='w-full' />
                    <h1 className='relative insert-0 text-2xl text-white'>Welcome to Our Lost and Found Website!</h1>
                </div>
            </div>
        </>
    )
}
export default signup;
// top-[-29vh] left-[2vw]