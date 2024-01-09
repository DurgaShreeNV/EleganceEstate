import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-cyan-100 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl'>
                        <span className='text-indigo-900'>Elegance Estate</span>
                    </h1>
                </Link>
                <form className='bg-cyan-50 p-3 rounded-lg flex items-center'>
                    <input type='text' placeholder='Search...'
                        className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-indigo-900' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-indigo-900 hover:underline'>
                            Home
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-indigo-900 hover:underline'>
                            About
                        </li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className='hidden sm:inline text-indigo-900 hover:underline'>
                            Sign in
                        </li>
                    </Link>

                </ul>
            </div>

        </header>
    )
}