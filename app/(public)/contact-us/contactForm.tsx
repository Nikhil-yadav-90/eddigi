"use client";
import { useState } from "react";
import { coursesList } from "@/mockData/courses";
import InputField from "@/components/UI/inputField";
import SelectField from "@/components/UI/selectField";

interface IcontactForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
    course: string;

}

const ContactForm = () => {
    const [formValue, setFormValue] = useState<IcontactForm>({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        message:'',
        course:''
    });


    const onChangeHandler = (value: string, label: string)=>{
            const title = label.split('_').map((item: string, idx: number)=>{
                if(idx > 0){
                    return item.substring(0,1).toUpperCase()+item.substring(1)
                }else{
                    return item;
                }
            }).join('')
            setFormValue({
                ...formValue,
                [title]: value
            })
    }


    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
             e.preventDefault();   
            console.log("this is main form component=======>", formValue)
            const message = `Hi, I am ${formValue.firstName} ${formValue.lastName} intrested in you ${formValue.course} course. We can connect either on email: ${formValue.email} or on phone: ${formValue.phoneNumber}. ${formValue.message}`
            const watssapNumber = "918387066945";
            const encodedMessage = encodeURIComponent(message);
             const whatsappURL = `https://wa.me/${watssapNumber}?text=${encodedMessage}`;
             window.open(whatsappURL, '_blank'); 

    }

    return (
        <div className="mb-10">
            <form className="max-w-lg mx-auto space-y-6" noValidate onSubmit={submitHandler}>
                {/* First and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                    <InputField id="first_name" lable="First name" changeHandler={onChangeHandler} required />
                    <InputField id="last_name" lable="Last name" changeHandler={onChangeHandler} required={false} />
                </div>

                {/* Email */}
                <InputField id="email" lable="Email address" type="email" changeHandler={onChangeHandler} required />

                {/* Phone */}
                <InputField id="phone_number" lable="Phone number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" changeHandler={onChangeHandler} required />

                {/* Course Selector with Arrow */}
                <SelectField label="course" changeHandler={onChangeHandler}  optionsList={coursesList} required />

                {/* Message */}
                <div className="relative">
                    <label htmlFor="message" className="block text-sm text-gray-500 mb-1">
                        Message
                    </label>
                    <textarea
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>onChangeHandler(e.target.value, e.target.id)}
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="block w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 resize-none py-2.5"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-actionbutton  hover:bg-foreground hover:text-actionbutton hover:ring-blue-300 hover:ring-2 text-white font-medium py-2.5 px-5 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-blue-300"

                >
                    Submit
                </button>
            </form>
        </div>
    );
};


export default ContactForm;
