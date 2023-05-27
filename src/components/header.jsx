 import { Link } from 'react-router-dom'
 
 export default function Header(){
    return(
        <>
            <header className='relative'>
                <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                    <div className='flex flex-1 justify-center'>
                        <nav className='py-4 pointer-events-auto hidden md:block fixed z-50'>
                            <ul className='flex rounded-full bg-white/90 text-sm px-5 py-3 ring-1 ring-zinc-900/5 dark:text-zinc-200 backdrop-blur gap-5 shadow-lg text-zinc-800 font-medium'>
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
                    </div>
                </div>
            </header>
        </>
    )
 }