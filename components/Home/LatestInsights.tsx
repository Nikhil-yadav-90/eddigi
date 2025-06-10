"use client"
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react'


// Define the images for the carousel
const images = [
  { id: 1, src: '/scenic_view1.png', alt: 'Scenic View 1' },
  { id: 2, src: '/scenic_view2.png', alt: 'Cityscape 2' },
  { id: 3, src: '/scenic_view3.png', alt: 'Mountain Range 3' },
];

const LatestInsights = ()=>{
  // State to keep track of the currently hovered image's ID.
  // Initialize with the ID of the first image so it's 60% by default.
  const [hoveredImageId, setHoveredImageId] = useState(images[0].id);

  /**
   * Handles the mouse entering an image wrapper.
   * Sets the hoveredImageId to the ID of the image being hovered.
   * @param {number} id - The ID of the image that the mouse entered.
   */
  const handleMouseEnter = (id:number) => {
    setHoveredImageId(id);
  };

  return (
    <>
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-screen bg-white  overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold  text-gray-800 py-6 px-4">
          EdDigi Blog on Youtube
        </h1>
        {/* Updated 'gap-4' to 'gap-6' for more space between images */}
        <div className="flex w-full px-24 h-[400px] md:h-[300px] overflow-hidden rounded-b-xl gap-6 p-4">
          {images.map((image) => (
            <div
              key={image.id}
              // Dynamically set width based on hovered state
              // Now using 60% for active and 20% for others
              // Apply smooth transition for all properties over 500ms
              className={`relative h-full overflow-hidden cursor-pointer
                          transition-all duration-500 ease-in-out
                          ${hoveredImageId === image.id ? 'w-[60%]' : 'w-[20%]'}
                          flex-shrink-0 rounded-lg`} // Added rounded-lg for individual image corners
              onMouseEnter={() => handleMouseEnter(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="w-full h-full object-cover rounded-lg"
                priority
              />
              {/* Image Overlay for text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white
                          transform translate-y-full opacity-0
                          transition-all duration-300 ease-in-out
                          group-hover:translate-y-0 group-hover:opacity-100
                          peer-hover:translate-y-0 peer-hover:opacity-100
                          flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-1">{image.alt}</h3>
                <p className="text-sm text-gray-200">
                  A beautiful depiction of {image.alt.toLowerCase()}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
         <div className="md:flex shrink-0 basis-[15%] justify-center items-center my-20 text-center">
          <Link
            href="#"
            className="h-12 px-8 flex items-center bg-actionbutton justify-center text-foreground rounded-lg text-sm font-medium hover:rounded-xl hover:ring-2 shadow-md transition"
          >
            Explore Videos
          </Link>
        </div>
    </>

  );
}





export default LatestInsights