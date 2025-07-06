interface ICourseBrief {
    title: string;
    detail: string;
}

interface CourseBriefProps {
    courseBriefs: ICourseBrief[];
}

const CourseBrief = ({ courseBriefs }: CourseBriefProps) => {
    return (
        <div className="
            relative bottom-20 left-28 z-60 
            h-[20%] w-[60%] 
            bg-white border-2 text-black 
            flex items-center justify-center 
            max-[674px]:static max-[674px]:w-full max-[674px]:h-auto 
            max-[674px]:px-4 max-[674px]:py-6 max-[674px]:flex-col
        ">
            <div className="
                flex-1 h-[75px] flex items-baseline justify-evenly 
                max-[674px]:flex-col max-[674px]:items-start max-[674px]:gap-4
            ">
                {courseBriefs.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center h-full max-[674px]:h-auto"
                    >
                        <div className={`
                            h-full
                            flex-col pr-6 ml-2 
                            ${idx !== courseBriefs.length - 1 ? 'border-r-2 max-[674px]:border-r-0 max-[674px]:border-b-2' : ''}
                            max-[674px]:pr-0 max-[674px]:pb-4
                        `}>
                            <div className="text-xl font-bold">{item.title}</div>
                            <div className="text-xs w-[98%]">{item.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseBrief;
