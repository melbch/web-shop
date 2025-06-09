import React from "react";
import { TextField, MenuItem, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';

type DeliveryFormProps = {
    country: string;
    setCountry: (value: string) => void;
    firstName: string;
    setFirstName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    address: string;
    setAddress: (value: string) => void;
    apartment: string;
    setApartment: (value: string) => void;
    postalCode: string;
    setPostalCode: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    deliveryMethod: string;
    setDeliveryMethod: (value: string) => void;
    errors: { [key: string]: string };
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({
    country, setCountry,
    firstName, setFirstName,
    lastName, setLastName,
    address, setAddress,
    apartment, setApartment,
    postalCode, setPostalCode,
    city, setCity,
    phone, setPhone,
    email, setEmail,
    deliveryMethod, setDeliveryMethod,
    errors
}) => {
    return (
        <div className="space-y-4">
            <TextField
                select fullWidth label="Country" value={country} onChange={(e) => setCountry(e.target.value)} error={!!errors.country} helperText={errors.country}
                variant="outlined"
            >
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="Denmark">Denmark</MenuItem>
                <MenuItem value="Finland">Finland</MenuItem>
                <MenuItem value="Norway">Norway</MenuItem>
                <MenuItem value="Sweden">Sweden</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="United States">United States</MenuItem>  
            </TextField>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <TextField fullWidth label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} error={!!errors.firstName} helperText={errors.firstName} />
                <TextField fullWidth label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} error={!!errors.lastName} helperText={errors.lastName} />
            </div>

            <TextField fullWidth label="Address" value={address} onChange={(e) => setAddress(e.target.value)} error={!!errors.address} helperText={errors.address} />
            <TextField fullWidth label="Apartment Number (Optional)" value={apartment} onChange={(e) => setApartment(e.target.value)} />
            <TextField fullWidth label="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} error={!!errors.postalCode} helperText={errors.postalCode} />
            <TextField fullWidth label="City" value={city} onChange={(e) => setCity(e.target.value)} error={!!errors.city} helperText={errors.city} />
            <TextField fullWidth label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} error={!!errors.phone} helperText={errors.phone} />
            <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={!!errors.email} helperText={errors.email} />
            
            <FormLabel component="legend">Delivery Options</FormLabel>
            <RadioGroup value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
                <FormControlLabel value="home" control={<Radio />} label="Home Delivery (Free)" />
                <FormControlLabel value="instabox" control={<Radio />} label="Instabox (+$5.00)" />
                <FormControlLabel value="budbee" control={<Radio />} label="Budbee (+$4.00)" />
            </RadioGroup>
        </div>
    );
};

export default DeliveryForm;