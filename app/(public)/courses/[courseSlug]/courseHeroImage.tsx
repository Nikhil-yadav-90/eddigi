import Image from "next/image";
import Link from "next/link";

interface ICourseHeroImageParams {
    imageLink: string;
    enrollLink: string;
    altValue: string;
}

const CourseHeroImage = ({ imageLink, enrollLink, altValue }: ICourseHeroImageParams) => {
    return (
       <div className="w-full h-1/2 relative">
        <Image
        src={imageLink}
        alt={altValue}
        fill
        priority
        />
        <Link href={enrollLink}>
        <div 
        className ="bg-black text-white absolute z-40
         w-[20%] xl:w-[15%] h-[10%] text-center rounded-xl 
         bottom-20 left-16 xl:left-28 p-1 flex justify-center items-center">
        Enroll for free
        </div>
        </Link>

       </div>
    );
};

export default CourseHeroImage;
