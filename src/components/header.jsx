 import { Link } from 'react-router-dom'
 import { MdVerified } from 'react-icons/md'
 import Jasper from '../assets/jasper.jpg'

 export default function Header(){
    return(
        <>
            <header className='relative'>
                     <nav className='px-4 max-w-5xl mx-auto py-4 pointer-events-auto z-50 flex justify-between items-center'>
                                <Link className="flex gap-3" to='/'>
                                    <img src={Jasper} alt="jasper ayawan profile" className="w-[50px] h-[50px] rounded-full ring-1"/>
                                    <MdVerified className="text-blue-500 text-lg"/>
                                </Link>
                            <ul className='flex gap-4'>
                                <li>
                                    <Link className='font-semibold text-zinc-800'>About</Link>
                                </li>
                                <li>
                                    <Link className='font-semibold text-zinc-800'>Articles</Link>
                                </li>
                                <li>
                                    <Link to='/project' className='font-semibold text-zinc-800'>Projects</Link>
                                </li>
                                <li>
                                    <Link className='font-semibold text-zinc-800'>Contact</Link>
                                </li>
                            </ul>
                        </nav>
            </header>
        </>
    )
 }