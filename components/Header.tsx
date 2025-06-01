import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
    return (
        <nav className="bg-background px-6 py-3 h-32 flex w-full">
            <div className="flex items-center h-full w-full">
                {/* Logo */}

                <div className="relative basis-[20%] shrink-0 h-24">
                    <Link className='hover: cursor-pointer' href='/'>
                        <Image
                            src='/logo.svg'
                            fill
                            style={{ objectFit: 'contain' }} // or 'cover', 'contain' etc.
                            alt='logo_eddigi'
                        />
                    </Link>
                </div>


                {/* Center Nav Links */}
                <ul className="flex-1 flex justify-evenly space-x-8 text-base font-extrabold">

                    <li className="hover:underline cursor-pointer">
                        <Link href='/courses'>
                            Courses
                        </Link>
                    </li>
                    <Link href='/about-us'>
                        <li className="hover:underline cursor-pointer">About</li>
                    </Link>
                    <li className="hover:underline cursor-pointer">Services</li>
                    <li className="hover:underline cursor-pointer">Blog</li>
                </ul>

                {/* Right CTA */}
                <div className="basis-[15%] shrink-0 flex justify-start text-center">
                    <a
                        className="h-14 px-10 flex items-center justify-center text-foreground rounded-lg text-sm font-medium hover:rounded-xl hover:ring-2 hover:ring-blue-400 shadow-md transition"
                        href="#"
                    >
                        Start Learning
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
