import { FormattedMessage, useIntl } from "react-intl";

export const PersonalData = ({handleInputChange, formData, validation}) => {
    
    const intl = useIntl();

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
                    className = {`${validation.name === false ? "nonvalid": ""}`}
                    placeholder={intl.formatMessage({id: 'form.placeName'})}
                    type="text"
                    onChange={handleInputChange}
                    value={formData.name}
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
                    className = {`${validation.surnames === false ? "nonvalid": ""}`}
                    placeholder={intl.formatMessage({id: 'form.placeLastname'})}
                    type="text"
                    onChange={handleInputChange}
                    value={formData.surnames}
                    name="surnames"
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
                    className = {`${validation.dni === false ? "nonvalid": ""}`}
                    placeholder={intl.formatMessage({id: 'form.placeDNI'})}
                    type="text"
                    onChange={handleInputChange}
                    value={formData.dni}
                    name="dni"
                    required
                />
            </section>   

            <section>
                <label>
                    <FormattedMessage
                        id="form.telephone"
                        defaultMessage="Teléfono:"
                    />
                </label>
                <input
                    className = {`${validation.phone === false ? "nonvalid": ""}`}
                    placeholder={intl.formatMessage({id: 'form.placePhone'})}
                    type="text"
                    onChange={handleInputChange}
                    value={formData.phone}
                    name="phone"
                    required
                />
            </section>  
        </div>
      
    )
}

