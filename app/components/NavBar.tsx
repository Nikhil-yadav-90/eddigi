import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <div className="flex-col bg-black text-gray-400">
        <ul className=" max-w-7xl font-sans  flex relative text-gray-400 sm:left-20 md:left-32 h-20 justify-evenly pt-6 items-center w-64">
          <li>For Students</li>
          <li>For Professionals</li>
        </ul>
        <hr className="border-t-[0.5px] border-gray-400" />


        <div className="flex h-28 pt-2">
          <div className="flex-col relative  ">
            <div className="flex left-6 items-center space-x-2 w-full h-16 relative">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="eddigi_logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="text-3xl font-serif ">EdDigi</span>
            </div>

            <div className="relative left-6 bottom-3">
              <p className="uppercase italic font-semibold  text-sm">Your Choice, Our Legacy</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default NavBar;
