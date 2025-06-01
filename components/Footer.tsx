import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return (
        <div>
            <div className="bg-foreground flex-col w-full">
                <div className="text-black flex  items-baseline  justify-evenly flex-1 h-52 py-56">
                    <div className="font-extrabold text-6xl mr-4">
                        <div>EdDigi</div>
                    </div>

                    <div className="w-6">
                        <div>MENU</div>
                        <div className="mt-10">
                            <ul>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <div>SERVICE</div>
                        <div className="mt-10">
                            <ul>
                                <li>Learning</li>
                                <li>Schedules</li>
                                <li>All Services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between basis-[15%]">
                        <div className="relative bg-white w-12 h-12 rounded-full ">
                            <Link href="#" className="hover: cursor-pointer">
                                <Image
                                    src='/facebook.png'
                                    fill
                                    style={{ objectFit: 'contain' }} // or 'cover', 
                                    alt='social_facebook'
                                />
                            </Link>
                        </div>
                        <div className="relative bg-background w-12 h-12 rounded-full ">
                            <Link href="#" className="hover: cursor-pointer">
                                <Image
                                    src='/instagram.png'
                                    fill
                                    style={{ objectFit: 'contain' }} // or 'cover', 
                                    alt='social_instagram'
                                />
                            </Link>
                        </div>
                        <div className="relative bg-white w-12 h-12 rounded-full ">
                            <Link href="#" className="hover: cursor-pointer">
                                <Image
                                    src='/youtube.png'
                                    fill
                                    style={{ objectFit: 'contain' }} // or 'cover', 
                                    alt='social_youtube'
                                />
                            </Link>
                        </div>
                    </div>

                </div>
                <hr className="border-t  border-black my-4" />
                <div className="px-5">
                    <div className="flex basis-[20%] font-medium h-16 items-start">
                        <div className="text-black flex-1">Copyright&copy;{new Date().getFullYear()} eddigi.com. All Rights Reserved.</div>
                        <div className="text-black basis-[20%] shrink-0">Terms of Use</div>
                        <div className="text-black basis-[20%] shrink-0">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;