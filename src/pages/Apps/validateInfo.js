export default function validadeInfo(values) {
    let errors = {};

     //Name
     if (!values.name.trim()) {
        errors.name = "*Como podemos te chamar?";
    }

    //Email
    if (!values.email) {
        errors.email = '*Qual o seu email?';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '*Email inválido.';
    }

    //Assunto
    if (!values.subject) {
        errors.subject = '*Qual o assunto?';
    }
    //Message
    if (!values.message) {
        errors.message = '*Qual é a mensagem?';
    }

    return errors;
}

