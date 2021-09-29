export default function validadeInfo(values) {
    let errors = {};

    //Name
    if (!values.name.trim()) {
    console.log('name error');
    }

    //Email
    if (!values.email) {
        console.log('email error');
    }

    //Phone
    if (!values.subject) {
        console.log('subject error');
    }
    //Message
    if (!values.message) {
        console.log('message error');
    }

    return errors;
}

