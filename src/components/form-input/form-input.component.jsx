import {Group,Input, FormInputLabel } from "./form-input.styles"

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps} />
            
            {label && (
            // <label className={`${otherProps.value.length ? 'shrink' : null} 
            //     form-input-label`}> {label} </label>)}
            <FormInputLabel shrink = {otherProps.value.length}> {label} </FormInputLabel>)}
        </Group>
    );
};
export default FormInput;