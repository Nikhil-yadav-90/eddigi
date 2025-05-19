import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <div className="flex-col bg-black text-white">


        <ul className="flex relative sm:left-20 md:left-32 h-20 justify-evenly items-center w-64">
          <li>For Students</li>
          <li>For Professionals</li>
        </ul>
        <hr className="border-t-1 border-gray-300" />


        <div className="flex h-28 pt-2">
          <div className="flex-col relative  ">
            <div className="flex left-6 items-center space-x-2 w-full h-16 relative">
              <div className="relative w-8 h-8">
                <Image
                  src="/globe.svg"
                  alt="eddigi_logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="text-3xl">EdDigi</span>
            </div>

            <div className="relative left-6 bottom-3">
              <p className="uppercase  text-1xl">Your Choice, Our Legacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
