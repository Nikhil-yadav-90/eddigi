interface ICourseBrief {
    title: string;
    detail: string;
}

interface CourseBriefProps {
    courseBriefs: ICourseBrief[];
}

const CourseBrief = ({ courseBriefs }: CourseBriefProps) => {
    return (
        <div className="bg-white hidden lg:block border-2 text-black w-[70%] h-1/5 ml-10 relative -top-10">
            <div className="flex  h-full">
                {courseBriefs.map((item, idx) => (
                    
                        <div key={idx} className=" xl:flex-1 mx-4 p-2 h-full">
                            <div className={`flex flex-col items-start h-full p-6 justify-center ${idx == courseBriefs.length - 1 ? '' : 'border-r-2'}`}>
                                <h1 className=" lg:font-bold lg:text-xl">{item.title}</h1>
                                <p className=" lg:text-sm ">{item.detail}</p>
                            </div>
                        </div>
                    
                ))}


            </div>
        </div>
    );
};

export default CourseBrief;
