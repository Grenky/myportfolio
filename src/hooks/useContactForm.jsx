
import { useState } from "react"

export default function useContactForm() {
    const [values, setValue] = useState({
        name: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newError = {};
        const nameRegex = /^[a-zA-Zа-щА-ЩґҐєЄіІїЇ\s'-]+$/;
        const russianLettersRegex = /[ёэыъ]/i;
        const messageRegex = /^[\p{L}\p{N}\p{P}\p{Zs}\p{So}…“”"'\-–—()@!?%№+=*/\\[\]{}<>,.:\n\r\t]*$/u;

        if(!values.name.trim()) {
            newError.name = 'Name is required';
        } else if(!nameRegex.test(values.name)) {
            newError.name = 'Only letters are allowed (UA/EN)';
        } else if(russianLettersRegex.test(values.name)) {
            newError.name = 'Russian letters are not allowed';
        } else if(values.name.length < 2 || values.name.length > 50) {
            newError.name = 'Name must be between 2 and 50 characters';
        }

        if(!values.subject.trim()) {
            newError.subject = 'Subject is required';
        } else if(!nameRegex.test(values.subject)) {
            newError.subject = 'Only letters are allowed (UA/EN)';
        } else if(russianLettersRegex.test(values.subject)) {
            newError.subject = 'Russian letters are not allowed';
        } else if(values.subject.length  < 3 || values.subject.length > 100) {
            newError.subject = 'Subject must be between 3 and 100 characters';
        }

        if(!values.message.trim()) {
            newError.message = 'Message cannot be empty';
        } else if(russianLettersRegex.test(values.message)) {
            newError.message = 'Russian letters are not allowed';
        } else if(!messageRegex.test(values.message)) {
            newError.message = 'Message contains invalid characters';
        } else if(values.message.length < 10 || values.message.length > 2000) {
            newError.message = 'Message must be between 10 and 2000 characters';
        }

        setErrors(newError);
        return Object.keys(newError).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({...prev, [name]: value}));

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if(value.trim()) {
                delete newErrors[name];
            }
            return newErrors;
        });
    };

    const handleSubmit = (onSuccess) => (e) => {
        e.preventDefault();
        if(validate()) {
            onSuccess(values);
            setIsSubmitted(true);
        }
    };

    const resetForm = () => {
        setValue({name: '', subject: '', message: ''});
        setErrors({});
    }

    return { values, errors, handleChange, handleSubmit, isSubmitted, resetForm};
}