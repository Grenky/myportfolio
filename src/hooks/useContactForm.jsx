
import { useState, useRef, useEffect } from "react"

export default function useContactForm() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const inputRefs = {
        name: useRef(null),
        email: useRef(null),
        message: useRef(null),
    };


    const nameRegex = /^[a-zA-Zа-щА-ЩґҐєЄіІїЇ\s'-]+$/;
    const emailRegex = /^[a-zA-Zа-щА-ЩґҐєЄіІїЇ0-9\s'’":\-.,!?()&]+$/;
    const russianLettersRegex = /[ёэыъ]/i;
    const messageRegex = /^[\p{L}\p{N}\p{P}\p{Zs}\p{So}…“”"'\-–—()@!?%№+=*/\\[\]{}<>,.:\n\r\t]*$/u;

    const validate = () => {
        const newError = {};


        if(!values.name.trim()) {
            newError.name = 'Name is required';
        } else if(!nameRegex.test(values.name)) {
            newError.name = 'Only letters are allowed (UA/EN)';
        } else if(russianLettersRegex.test(values.name)) {
            newError.name = 'Russian letters are not allowed';
        } else if(values.name.length < 2 || values.name.length > 50) {
            newError.name = 'Name must be between 2 and 50 characters';
        }

        if(!values.email.trim()) {
            newError.email = 'Subject is required';
        } else if(!emailRegex.test(values.email)) {
            newError.email = 'Only letters are allowed (UA/EN)';
        } else if(russianLettersRegex.test(values.email)) {
            newError.email = 'Russian letters are not allowed';
        } else if(values.email.length  < 3 || values.email.length > 100) {
            newError.email = 'Subject must be between 3 and 100 characters';
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
        return newError;
    };


    useEffect(() => {
        const firstErrorKey = Object.keys(errors)[0];
        if(firstErrorKey && inputRefs[firstErrorKey]?.current) {
            inputRefs[firstErrorKey].current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        let formattedValue = value

        if(name === 'name') {
            formattedValue = value
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');

            if(formattedValue.trim().length >= 2) {
                setErrors(prev => {
                    const updated = { ...prev };
                    delete updated.name;
                    return updated;

                });
            }
        }

        if(name === 'email') {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1);

            if(formattedValue.trim().length >= 3) {
                setErrors(prev => {
                    const updated = { ...prev };
                    delete updated.email;
                    return updated;
                });
            }
        }

        if(name === 'message') {
            if(value.trim().length >= 10) {
                setErrors(prev => {
                    const updated = { ...prev };
                    delete updated.message;
                    return updated;
                });
            }
        }

        setValues(prev => ({
            ...prev,
            [name]: formattedValue,
        }));

    };

    const handleSubmit = (onSuccess) => (e) => {
        e.preventDefault();
       const newErrors = validate();
       const hasErrors = Object.keys(newErrors).length > 0;

       if(!hasErrors) {
        onSuccess(values);
        resetForm();
        setIsSubmitted(true);
       } else {
        setValues((prevValues) => {
            const updated ={ ...prevValues };
            Object.keys(newErrors).forEach((key) => {
                updated[key] = '';
            });
            return updated;
        })
       }
    };

    const resetForm = () => {
        setValues({name: '', email: '', message: ''});
        setErrors({});
        setIsSubmitted(false);
    }

    return { values, errors, handleChange, handleSubmit, isSubmitted, resetForm, inputRefs};
}