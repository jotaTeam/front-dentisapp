import { FormattedMessage, useIntl } from "react-intl";
import { useContext } from "react";
import { AppointmentContext } from "./Appointment.context";

export const PersonalDataDate = () => {

    const intl = useIntl();


    let {AppoinmentValues, setAppoinmentValues} = useContext(AppointmentContext);
    // console.log(AppoinmentValues);


    let {
        name,
        surname,
        phone,
        dni,
    } = AppoinmentValues.personalData;

    // console.log(pamirar);

    // const {name,surname,telephone,dni} = props
    // console.log(name);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppoinmentValues({
            ...AppoinmentValues,
            personalData: {
                ...AppoinmentValues.personalData,
                [name]: value,
            },
        });
    };

   
    return (
        <div className="personal-form">
        <h3>
            <FormattedMessage
                id="form.data"
                defaultMessage="Datos personales"
            />
        </h3>

        <section>
            <label>
                <FormattedMessage
                    id="form.name"
                    defaultMessage="Nombre:"
                />
            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placeName'})}
                type="text"
                onChange={handleInputChange}
                value={name}
                name="name"
                required
            />
        </section> 

        <section>
            <label>
                <FormattedMessage
                    id="form.surname"
                    defaultMessage="Apellidos:"
                />
            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placeLastname'})}
                type="text"
                onChange={handleInputChange}
                value={surname}
                name="lastName"
                required
            />
        </section>   


        <section>
            <label>
                <FormattedMessage
                    id="form.dni"
                    defaultMessage="DNI:"
                />

            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placeDNI'})}
                type="text"
                onChange={handleInputChange}
                value={dni}
                name="dni"
                required
            />
        </section>   

        <section>
            <label>
                <FormattedMessage
                    id="form.telephone"
                    defaultMessage="Tel??fono:"
                />
            </label>
            <input
                placeholder={intl.formatMessage({id: 'form.placePhone'})}
                type="text"
                onChange={handleInputChange}
                value={phone}
                name="phone"
                required
            />
        </section>  
    </div>
  
    )
}
