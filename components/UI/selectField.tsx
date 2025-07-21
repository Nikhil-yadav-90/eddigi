import { useState } from 'react'

interface Ioption {
    id: string | number;
    title: string;
}
interface IselectField {
    label: string;
    optionsList: Ioption[];
    required: boolean;
    changeHandler: (value:string, id:string)=>void;

}
const SelectField = ({ label, optionsList, required = false, changeHandler }: IselectField) => {

    const [selectedValue, setSelectedValue] = useState<string>('')

    const onSelectHandler = (selectedValue: string) => {
        console.log(" i am in select component ", selectedValue);

        setSelectedValue(selectedValue)
        changeHandler(selectedValue, 'course')
    }


    return (
        <div className="relative">
            <label htmlFor="course" className="block capitalize text-sm text-gray-500 mb-1">
                {`${label} `} {required && <span className="text-red-500 required-asterisk">*</span>}
            </label>
            <div className="relative">
                <select
                    id={label}
                    name={label}
                    value={selectedValue}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelectHandler(e.target.value)}
                    className="block w-full appearance-none bg-transparent border-b-2 border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-blue-600 pr-8 py-2.5"
                >
                    <option 
                        value=""
                        disabled hidden>
                        Select a course
                    </option>
                    {optionsList.map((item) => (
                        <option key={item.id} value={item.title}>
                            {item.title}
                        </option>
                    ))}
                </select>
                {/* Custom arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                    ▼
                </div>
            </div>

        </div>
    )
}


export default SelectField;