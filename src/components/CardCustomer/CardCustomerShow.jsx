import PropTypes from 'prop-types';
import { Paper, Stack, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TypoLabel from '../TypoLabel/TypoLabel';
import TypoLabelData from '../TypoLabelData/TypoLabelData';

const CardCustomerShow = ({ customer, handleEdit }) => {
  const onClickEdit = () => {
    handleEdit(customer.id);
  };
  return (
    <Paper
      sx={{
        padding: '1.5rem',
        margin: '0.1rem auto',
        width: '100%',
      }}
      elevation={5}
    >
      <Stack direction="column" spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TypoLabel text={`#${customer.id}`} />
          <IconButton aria-label="edit" onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2}>
          <TypoLabelData label="Nom" data={customer.name} />
          <TypoLabelData label="Adresse" data={customer.address} />
          <TypoLabelData label="Email" data={customer.email} />
          <TypoLabelData label="Téléphone" data={customer.phoneNumber} />
          <TypoLabelData label="Personne de contact" data={customer.contact} />
        </Stack>
      </Stack>
    </Paper>
  );
};

CardCustomerShow.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    contact: PropTypes.string.isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default CardCustomerShow;
