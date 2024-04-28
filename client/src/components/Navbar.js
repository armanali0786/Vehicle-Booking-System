import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <section class="w-full px-8 text-gray-700 bg-white">
            <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div class="relative flex flex-col md:flex-row">
                    <Link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">Vehicle Booking Service<span class="text-indigo-600">.</span></span>
                    </Link>
                    <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                        <Link to="/" className="mr-5 font-medium underline leading-6 text-black hover:text-[#5B63B7]">Home</Link>
                        <Link to="/booking" className="mr-5 font-medium leading-6 text-black hover:text-[#5B63B7]">Booking</Link>
                    </nav>
                </div>
            </div>
        </section>
    )
}