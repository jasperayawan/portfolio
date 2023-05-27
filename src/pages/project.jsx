import { Link } from 'react-router-dom'
import InstaProject from '../assets/insta.png'
import { AiFillGithub } from 'react-icons/ai'
import Harvesthub from '../assets/harvesthub.png'
import ELTech from '../assets/eltech.png'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Projects(){
    return(
        <>
            <Header/>
            <div className="py-[5rem] mx-auto max-w-2xl lg:max-w-5xl flex flex-col items-center justify-center gap-28 pt-10">
                <div className='me-auto'>
                    <h1 className='text-2xl font-bold text-zinc-800 mt-10'>My Project</h1>
                </div>
                <div className="flex flex-col xl:flex-row gap-6">
                    <Link className='w-full xl:w-1/2 h-auto relative group' to='https://instagram-clone-byjasper.netlify.app/'>
                        <div className=''>
                            <img src={InstaProject} alt="" className='ring-1 rounded-md ring-zinc-200'/>
                        </div>
                    </Link>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10'>
                        <div>
                            <p className='font-bold text-zinc-800 dark:text-zinc-400'>Featured Project</p>
                            <h2 className='font-bold text-2xl text-slate-600'>Instagram clone 2.0</h2>
                        </div>
                        <p className='bg-slate-800 text-slate-400 md:text-base p-2 md:p-6 rounded-md'>
                            An Instagram clone for visualizing Instagram website. using reactjs and tailwindcss
                        </p>
                        <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between'>
                            <li>
                                <span className='text-zinc-500'>Reactjs</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Javascript</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Tailwindcss</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Netlify Deployment</span>
                            </li>
                        </ul>
                        <div className='flex gap-5'> 
                            <Link to='https://github.com/jasperayawan/Instagram-clone'>
                                <AiFillGithub className='text-2xl text-zinc-600 dark:text-zinc-200'/>
                            </Link>
                        </div>
                    </div>
                </div>  

                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <Link className='w-full xl:w-1/2 h-auto relative group' to=''>
                        <div className=''>
                            <img src={Harvesthub} alt="" className='ring-1 rounded-md ring-zinc-200'/>
                        </div>
                    </Link>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10'>
                        <div>
                            <p className='font-bold text-zinc-800 dark:text-zinc-400'>Featured Project</p>
                            <h2 className='font-bold text-2xl text-slate-600'>Harvest Hub</h2>
                        </div>
                        <p className='bg-slate-800 xl:-mr-16 text-slate-400 md:text-base p-2 md:p-6 rounded-md'>
                            An Instagram clone for visualizing Instagram website. using reactjs and tailwindcss
                        </p>
                        <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between'>
                            <li>
                                <span className='text-zinc-500'>Javascript</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Messenger API</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Local Storage API</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Github Deployment</span>
                            </li>
                        </ul>
                        <div className='flex gap-5'> 
                            <Link to='https://github.com/jasperayawan/miniP2'>
                                <AiFillGithub className='text-2xl text-zinc-600 dark:text-zinc-200'/>
                            </Link>
                        </div>
                    </div>
                </div> 

                <div className="flex flex-col xl:flex-row gap-6">
                    <Link className='w-full xl:w-1/2 h-auto relative group' to='https://jasperayawan.github.io/eLTECH/'>
                        <div className=''>
                            <img src={ELTech} alt="" className='ring-1 rounded-md ring-zinc-200'/>
                        </div>
                    </Link>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10'>
                        <div>
                            <p className='font-bold text-zinc-800 dark:text-zinc-400'>Featured Project</p>
                            <h2 className='font-bold text-2xl text-slate-600'>E-Learning Technology</h2>
                        </div>
                        <p className='bg-slate-800 xl:-mr-16 text-slate-400 md:text-base p-2 md:p-6 rounded-md'>
                            An Instagram clone for visualizing Instagram website. using reactjs and tailwindcss
                        </p>
                        <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between'>
                            <li>
                                <span className='text-zinc-500'>HTML</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>CSS</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Javascript</span>
                            </li>
                            <li>
                                <span className='text-zinc-500'>Github Deployment</span>
                            </li>
                        </ul>
                        <div className='flex gap-5'> 
                            <Link to='https://github.com/jasperayawan/eLTECH'>
                                <AiFillGithub className='text-2xl text-zinc-600 dark:text-zinc-200'/>
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>

            <Footer/>
        </>
    )
}