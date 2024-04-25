import { Paper, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import FieldInput from '../Field/FieldInput';

const CardCustomerEdit = ({ customer, onChange }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        padding: '1rem',
        margin: '0.5rem auto',
        maxWidth: '80rem',
        cursor: 'auto',
      }}
    >
      <Stack direction="column" spacing={2}>
        <FieldInput
          value={customer.name}
          name="name"
          label="Nom du client"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={customer.address}
          name="address"
          label="Adresse"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={customer.email}
          name="email"
          label="Email"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={customer.phoneNumber}
          name="phoneNumber"
          label="Téléphone"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={customer.contact}
          name="contact"
          label="Contact"
          onChange={(e) => onChange(e)}
          required
        />
      </Stack>
    </Paper>
  );
};

CardCustomerEdit.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    contact: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardCustomerEdit;
