import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'; // Import icons from react-lucide
import { logo } from '../images/index'

const Navbar = ({ scrollToAboutUs, scrollToWhatIDo, scrollToServices, scrollToConsultation, scrollToLetsMeet }) => {
    const navItems = [
        { name: 'About Me', scrollTo: scrollToAboutUs },
        { name: 'What I Do', scrollTo: scrollToWhatIDo },
        { name: 'Services', scrollTo: scrollToServices },
        { name: 'Consultation', scrollTo: scrollToConsultation },
        { name: "Let's Meet", scrollTo: scrollToLetsMeet },
    ];

    const handleButtonClick = (item) => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href='/' className='flex'>
                        <img src={logo} alt='Divine-Energies-logo' className='w-8 h-8' />
                            <span className="ml-2 text-xl font-bold text-gray-900 ">DivineEnergies</span>
                        </a>
                    </div>

                    <ul className="hidden md:flex space-x-12">
                        {navItems.map((item) => (
                            <li>
                                <button onClick={item.scrollTo} className="text-gray-600 font-bold text-sm lg:text-base hover:text-indigo-600"
                                >{item.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-600 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Use react-lucide icons */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 bg-gradient-to-br from-purple-900 to-violet-800">
                        {navItems.map((item) => (
                            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white"
                                key={item.name}
                                onClick={() => handleButtonClick(item)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar


// bg-gradient-to-br from-gray-900 to-blue-900 text-white text-gray-700 hover:bg-gray-200