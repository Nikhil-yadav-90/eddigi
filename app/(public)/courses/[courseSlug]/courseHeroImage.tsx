import Image from "next/image";
import Link from "next/link";

interface ICourseHeroImageParams {
    imageLink: string;
    enrollLink: string;
    altValue: string;
}

const CourseHeroImage = ({ imageLink, enrollLink, altValue }: ICourseHeroImageParams) => {
    return (
        <div className="relative h-[60%] max-[674px]:h-auto">
            <div className="w-screen h-full relative max-[674px]:h-[300px]">
                <Link href={enrollLink}>
                    <div className="
                        absolute top-[20rem] left-[7rem] z-40 
                        bg-black text-white rounded-xl 
                        flex items-center justify-center
                        w-[15%] h-[10%] 
                        max-[674px]:w-[60%] max-[674px]:h-[3rem] 
                        max-[674px]:top-[12rem] max-[674px]:left-1/2 max-[674px]:-translate-x-1/2
                    ">
                        Enroll for Free
                    </div>
                </Link>
                <Image
                    src={imageLink}
                    fill
                    alt={altValue}
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
};

export default CourseHeroImage;
