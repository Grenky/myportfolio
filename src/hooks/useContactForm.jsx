
import { useState } from "react"

export default function useContactForm() {
    const [values, setValue] = useState({
        name: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newError = {};

        if(!values.name.trim()) {
            newError.name = 'Name is required';
        }

        if(!values.subject.trim()) {
            newError.subject = 'Subjects if required';
        }

        if(!values.message.trim()) {
            newError.message = 'Message cannot be empty';
        }

        setErrors(newError);
        return Object.keys(newError).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (onSuccess) => (e) => {
        e.preventDefault();
        if(validate()) {
            onSuccess(values);
        }
    };

    return { values, errors, handleChange, handleSubmit };
}