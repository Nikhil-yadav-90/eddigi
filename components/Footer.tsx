import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-foreground w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-wrap justify-between items-start gap-8 text-black">
        
        {/* Brand */}
        <div className="font-extrabold text-4xl min-w-[150px]">
          EdDigi
        </div>

        {/* Menu */}
        <div className="min-w-[140px]">
          <h3 className="font-semibold mb-4">MENU</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="min-w-[140px]">
          <h3 className="font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2">
            <li>Learning</li>
            <li>Schedules</li>
            <li>All Services</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 min-w-[140px]">
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
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center text-sm text-black gap-4">
        <div>© {new Date().getFullYear()} eddigi.com. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
