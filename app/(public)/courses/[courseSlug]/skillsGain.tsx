interface IskillsGainProps{
    skillsList: string[]
}
const SkillsGain = ({skillsList}:IskillsGainProps)=>{
    return(
    <div className="text-black mx-16 mt-8">
        <h1 className="text-lg font-bold">{`Skills you'll gain`}</h1>
        <div className="w-full my-4 flex flex-wrap">
        {skillsList?.map((item, idx)=>(<div className="p-2 mt-6 f bg-gray-300 h-1/4 mx-2 shadow-lg" key={idx}>
            <p className="h-full">{item}</p>
        </div>))}
        </div>
    </div>
    )
}

export default SkillsGain;