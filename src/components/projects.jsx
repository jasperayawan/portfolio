import { Link } from 'react-router-dom'
import InstaProject from '../assets/insta.png'
import { AiFillGithub } from 'react-icons/ai'

export default function Projects(){
    return(
        <>
            <div className="my-[10rem] mx-auto max-w-2xl lg:max-w-5xl flex flex-col items-center justify-center gap-28 pt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <Link className='w-full xl:w-1/2 h-auto relative group' to='https://instagram-clone-byjasper.netlify.app/'>
                        <div className=''>
                            <img src={InstaProject} alt="" className='ring-1 rounded-md ring-zinc-200'/>
                        </div>
                    </Link>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-center text-right xl:-ml-16 z-10'>
                        <div>
                            <p>Featured Project</p>
                            <h3>Instagram clone 2.0</h3>
                        </div>
                        <p className='bg-zinc-400 md:text-base p-2 md:p-6 rounded-md'>
                            An Instagram clone for visualizing Instagram website. using reactjs and tailwindcss
                        </p>
                        <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between'>
                            <li>
                                <Link>Reactjs</Link>
                            </li>
                            <li>
                                <Link>Javascript</Link>
                            </li>
                            <li>
                                <Link>Tailwindcss</Link>
                            </li>
                            <li>
                                <Link>Netlify Deployment</Link>
                            </li>
                        </ul>
                        <div className='flex gap-5'> 
                            <AiFillGithub />
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}