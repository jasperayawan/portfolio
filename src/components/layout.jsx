import Header from "./header";
import {Link} from 'react-router-dom'
import Footer from "./footer";
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import InstaProject from '../assets/insta.png'
import Harvesthub from '../assets/harvesthub.png'

import React, { useState } from 'react';
import '../App.css'
import { Helmet } from "react-helmet-async";

export default function Layout(){
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursorPosition({ x, y });
  };
    return(
        <>
        <Helmet>
            <title>Portfolio</title>
            <meta name="description" content="This our porfolio. I build this portfolio for job hunting"/>
            <meta name="author" content="Jasper Pinoliad Ayawan"></meta>
            <link rel="canonical" href="/"/>
        </Helmet>

            <div className="relative overflow-hidden" onMouseMove={handleMouseMove}>
            
            <div
                className="absolute bg-gradient-to-r from-indigo-500 via-blue-500  to-slate-800 h-[200px] w-[200px] rounded-full animate-cursor-follow"
                style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                bottom: `${cursorPosition.y}px`,
                }}
            />
            <Header/>
            <main className="pb-10 pt-[8rem]">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="max-w-2xl">
                                
                                <h1 className="mt-6 text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-800 sm:text-5xl"><span className="text-indigo-900"><i>F</i></span>ull <span className="text-indigo-900"><i>S</i></span>tack <span className="text-indigo-900"><i>D</i></span>eveloper and Aspiring Game Developer</h1>
                                <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-base">I'm Jasper Ayawan, an aspiring software engineer with a strong passion for crafting intuitive and visually appealing user interfaces. Through this portfolio, I invite you to delve into my journey, projects, and expertise in the world of UI development.</p>
                                <div className="flex mt-6 gap-6">
                                    <Link to='https://www.facebook.com/jasper.ayawan.1/'>
                                        <BsFacebook className="text-zinc-500 dark:text-zinc-400 text-lg"/>
                                    </Link>
                                    <Link to='https://www.instagram.com/ejayawan22/'>
                                        <AiFillInstagram className="text-zinc-500 dark:text-zinc-400 text-lg"/>
                                    </Link>
                                    <Link to='https://github.com/jasperayawan'>
                                        <AiFillGithub className="text-zinc-500 dark:text-zinc-400 text-lg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="my-[10rem] mx-auto max-w-2xl lg:max-w-5xl flex flex-col items-center justify-center gap-28 pt-10">
                    <div className='me-auto'>
                        <h1 className='text-2xl font-bold text-zinc-800'>My Project</h1>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-6">
                        <Link className='w-full xl:w-1/2 h-auto relative group' to='https://instagram-clone-byjasper.netlify.app/'>
                            <div className=''>
                                <img src={InstaProject} alt="" className='image rounded-md'/>
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
                                <AiFillGithub className='text-2xl text-zinc-600 dark:text-zinc-200'/>
                            </div>
                        </div>
                    </div>  

                    <div className="flex flex-col xl:flex-row-reverse gap-6">
                        <Link className='w-full xl:w-1/2 h-auto relative group' to='https://jasperayawan.github.io/miniP2/'>
                            <div className=''>
                                <img src={Harvesthub} alt="" className='image rounded-md'/>
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
                            <ul className='text-xs md:text-sm tracking-wide flex gap-2 md:gap-3 justify-between'>
                                <li>
                                    <span className='text-zinc-500'>Javascript</span>
                                </li>
                                <li>
                                    <span className='text-zinc-500'>Messenger API</span>
                                </li>
                                <li>
                                    <span className='text-zinc-500'>Firebase</span>
                                </li>
                                <li>
                                    <span className='text-zinc-500'>Github Deployment</span>
                                </li>
                            </ul>
                            <div className='flex gap-5'> 
                                <AiFillGithub className='text-2xl text-zinc-600 dark:text-zinc-200'/>
                            </div>
                        </div>
                    </div> 

                    <Link className="font-bold text-slate-800 text-sm" to='/project'>
                        view all
                    </Link>
                </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
        </>
    )
}