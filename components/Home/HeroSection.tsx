import Image from "next/image"

const HeroSection = () => {
    return (<>
        <div className="h-screen">
            <div className="h-full w-screen">

                <div className="relative h-full w-full">
                    <Image
                        src='/hero_image.png'
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="hero_image1"
                    />
                </div>
            </div>
        </div>
    </>)
}

export default HeroSection