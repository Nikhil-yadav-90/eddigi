interface IspecializtionProps{
    specialization:{
        title:string,
        descriptions: string[]
    }
}
const Specialization = ({specialization}:IspecializtionProps)=>{
    return(<div className="text-black  mx-16 mt-10 p-6">
        <h1 className="text-2xl font-semi-bold py-4 mb-4">{specialization.title}</h1>
        <div className="flex flex-col justify-around space-y-2">

        {specialization.descriptions?.map((item,idx)=>(<div className="font-extralight" key={idx}>
            {item}
        </div>))}
        </div>

    </div>)
};


export default Specialization;