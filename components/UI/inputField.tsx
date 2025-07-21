interface Iinputfield{
    id: string;
    lable: string;
    type?: string;
    pattern?: string;
    required?: boolean;
    changeHandler: (value:string, id:string)=>void;

}


const InputField = ({id,lable,type, pattern, required, changeHandler}: Iinputfield)=>{

    const fieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        changeHandler(e.target.value, e.target.id)
        }


    return (<>
     <div className="relative">
        <label htmlFor={id} className="block text-sm text-gray-500 mb-1">
            {`${lable} `}{required && <span className="text-red-500 required-asterisk">*</span>}
        </label>
        
        <input
            type={type}
            name={id}
            id={id}
            pattern={pattern}
            required={required}
            className="block w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 py-2.5"
            onChange={fieldChangeHandler}
        />
    </div>
    </>)

}


export default InputField;