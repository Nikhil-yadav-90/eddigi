import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground w-full overflow-x-hidden text-black pt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-wrap justify-between items-start gap-8">

        {/* Brand */}
        <div className="font-extrabold text-4xl min-w-[150px] flex-shrink-0">
          EdDigi
        </div>

        {/* Menu */}
        <div className="min-w-[140px] flex-shrink-0">
          <h3 className="font-semibold mb-4">MENU</h3>
          <ul className="space-y-2 text-base">
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Contact</li>
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
          {['facebook', 'instagram', 'youtube'].map((icon) => (
            <div key={icon} className="relative w-10 h-10 rounded-full bg-white">
              <Link href="#" className="block w-full h-full">
                <Image
                  src={`/${icon}.png`}
                  fill
                  style={{ objectFit: 'contain' }}
                  alt={`social_${icon}`}
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
