export const useDeliveryFormValidation = () => {
    const validate = (fields: { [key: string]: string }) => {
        const newErrors: { [key: string]: string } = {};
        if (!fields.country) newErrors.country = 'Country is required';
        if (!fields.firstName) newErrors.firstName = 'First name is required';
        if (!fields.lastName) newErrors.lastName = 'Last name is required';
        if (!fields.address) newErrors.address = 'Address is required';
        if (!fields.postalCode) newErrors.postalCode = 'Postal code is required';
        if (!fields.city) newErrors.city = 'City is required';
        if (!fields.phone) newErrors.phone = 'Phone number is required';
        if (!fields.email) newErrors.email = 'Email is required';
        return newErrors;
    };

    return { validate };
};