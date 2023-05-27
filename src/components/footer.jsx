 import { Link } from 'react-router-dom'
 
 export default function Footer(){
    return(
        <>
            <footer className="mt-32">
                <div className="sm:px-8">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="border-t border-zinc-100">
                            <div className="relative px-4 py-5 lg:px-12">
                                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                        <div className="flex flex-wrap justify-center gap-x-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                            <Link>About</Link>
                                            <Link>Projects</Link>
                                            <Link>Contact</Link>
                                        </div>
                                        <p className="text-sm text-zinc-800 dark:text-zinc-200">
                                        © 2023 Jasper Ayawan. All rights reserved.
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </footer>
        </>
    )
 }