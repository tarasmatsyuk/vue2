export const Validators = {
    getValidationState(form) {
        const formState = {...form};
        let validatedState = new Map();
        for (const [key, field] of Object.entries(formState)) {
            validatedState.set(key, {
                ...Validators.isRequired(field),
                ...Validators.isInteger(field),
                ...Validators.isFloat(field)}
            );
        }

        return validatedState;

    },
    isRequired(formField) {
        if(formField.validators.includes('required')) {
            return formField.value.toString().length > 0 ? null : {required : true}
        }
    },
    isInteger(formField) {
        if(formField.validators.includes('int')) {
            return isNaN(parseInt(formField.value)) ? {int: true} : null;
        }
    },
    isFloat(formField) {
        if(formField.validators.includes('float')) {
            const value = formField.value % 1;

            return isNaN(value) || value === 0 ? {float: true} : null;
        }
    }
}
