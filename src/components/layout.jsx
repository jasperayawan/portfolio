import Header from "./header";
import {Link} from 'react-router-dom'
import Jasper from '../assets/jasper.jpg'

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
                                    <img src={Jasper} alt="jasper ayawan profile" className="w-[40px] h-[40px] rounded-full ring-1"/>
                                </div>
                                <h1 className="mt-6 text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-800 sm:text-5xl">Aspiring Software Engineer,Game developer,designer, and Hacker</h1>
                                <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-base">I'm Jasper, a aspiring software engineer based in Philippines. I'm currently 
                                4th year college student with the course of <span>Information Technology</span></p>
                                <div className="flex mt-6 gap-6">
                                    <Link>
                                        <svg xmlns="http://www.w3.org/2000/svg"  width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/></svg>
                                    </Link>
                                    <Link>
                                        <svg xmlns="http://www.w3.org/2000/svg"  width={20} height={20} class="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                                    </Link>
                                    <Link></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}