 import { Link } from 'react-router-dom'
 
 export default function Header(){
    return(
        <>
            <header className='relative w-full'>
                <nav className='pointer-events-auto fixed z-50 w-full flex justify-center'>
                            <ul className='flex items-center text-sm w-full justify-center px-5 py-3 ring-1 ring-zinc-900/5 dark:text-zinc-200 backdrop-blur gap-5 shadow-lg text-zinc-800 font-medium'>
                                <li>
                                    <Link>About</Link>
                                </li>
                                <li>
                                    <Link>Articles</Link>
                                </li>
                                <li>
                                    <Link to='/project'>Projects</Link>
                                </li>
                                <li>
                                    <Link>Contact</Link>
                                </li>
                            </ul>
                </nav>
            </header>
        </>
    )
 }