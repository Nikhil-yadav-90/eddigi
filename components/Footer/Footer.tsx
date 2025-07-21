import { socialNetwork } from "@/mockData/socialNetwork";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground w-full overflow-x-hidden text-black pt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-wrap justify-between items-start gap-8">

        {/* Brand */}
        <Link href='/'>
        <div className="hover:cursor-pointer font-extrabold text-4xl min-w-[150px] flex-shrink-0">
          EdDigi
        </div>
        </Link>

        {/* Menu */}
        <div className="min-w-[140px] flex-shrink-0">
          <h3 className="font-semibold mb-4">MENU</h3>
          <ul className="space-y-2 text-base">
            <Link href='/about-us'>
            <li className="cursor-pointer hover:underline">About</li>
            </Link>
            
            <li className="cursor-pointer hover:underline">Blog</li>
            <Link href='/contact-us'>
            <li className="cursor-pointer hover:underline">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Services */}
        <div className="min-w-[140px] flex-shrink-0">
          <h3 className="font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-base">
            <li className="cursor-pointer hover:underline">Learning</li>
            <li className="cursor-pointer hover:underline">Schedules</li>
            <li className="cursor-pointer hover:underline">All Services</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 min-w-[140px] flex-shrink-0">
          {socialNetwork?.map((icon) => (
            <div key={icon.id} className="relative w-10 h-10 rounded-full bg-white">
              <Link href={icon.link}className="block w-full h-full" target="blank">
                <Image
                  src={`/images/${icon.title}.png`}
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={`social_${icon.title}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-black mx-6" />

      {/* Bottom Copyright Row */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
        <div className="text-center sm:text-left">© {new Date().getFullYear()} eddigi.com. All rights reserved.</div>
        <div className="flex gap-4 justify-center sm:justify-start">
          <Link href="#" className="hover:underline cursor-pointer">Terms of Use</Link>
          <Link href="#" className="hover:underline cursor-pointer">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
