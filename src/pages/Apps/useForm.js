import { useState, useEffect } from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setSubmitting] = useState(false)

    const [errors, setErrors] = useState({});

    //MODAL
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFail, setModalFail] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(e.target.value);
    };

    const handlePress = e => {
        console.log(isSubmitting)
        e.preventDefault();

        setErrors(validate(values));

        setSubmitting(true);
        
        fetch(
            '../../../api/send-email',
            {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(function (res) {

                if (res.status == 202) {
                    setModalSuccess(true);
                }

            }).catch(function (err) {
                setModalFail(true);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return { 
        isSubmitting,
        handleChange,
        values,
        handlePress,
        errors,
        modalSuccess,
        modalFail,
        setValues,
        };

};

export default useForm;

