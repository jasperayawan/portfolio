import Header from "./header";
import {Link} from 'react-router-dom'
import Jasper from '../assets/jasper.jpg'
import Footer from "./footer";
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'

export default function Layout(){
    return(
        <>
            <Header/>
            <main className="py-10">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="max-w-2xl">
                                <div>
                                    <img src={Jasper} alt="jasper ayawan profile" className="w-[50px] h-[50px] rounded-full ring-1"/>
                                </div>
                                <h1 className="mt-6 text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-800 sm:text-5xl">Aspiring Software Engineer,Game developer,designer, and Hacker</h1>
                                <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-base">I'm Jasper, a aspiring software engineer based in Philippines. I'm currently 
                                4th year college student with the course of <span>Information Technology</span></p>
                                <div className="flex mt-6 gap-6">
                                    <Link>
                                        <BsFacebook className="text-zinc-800 dark:text-zinc-400 text-lg"/>
                                    </Link>
                                    <Link>
                                        <AiFillInstagram className="text-zinc-800 dark:text-zinc-400 text-lg"/>
                                    </Link>
                                    <Link>
                                        <AiFillGithub className="text-zinc-800 dark:text-zinc-400 text-lg"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}