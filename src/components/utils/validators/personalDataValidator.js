import React from 'react'

export const personalDataValidator = ({name, surnames, dni, phone} ) => {

    let validation = {
        "name": false,
        "surnames": false,
        "dni": false,
        "phone": false
    };

    validation.name = name && !(/\d+$/.test(name)) ? true : false;
    validation.surnames = surnames && !(/\d+$/.test(surnames)) ? true : false;
    validation.dni = dni ? true : false;
    validation.phone = phone ? true : false;

    return validation;
}
