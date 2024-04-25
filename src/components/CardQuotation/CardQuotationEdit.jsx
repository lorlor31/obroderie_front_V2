import PropTypes from 'prop-types';
import { Paper, Stack, Typography } from '@mui/material';

import FieldInput from '../Field/FieldInput';
import FieldSelectCustomer from '../Field/FieldSelectCustomer';
import { dateUtils } from '../../utils/dateUtils';

const CardQuotationEdit = ({
  quotation,
  onChange,
  allCustomerList,
  onChangeCustomer,
}) => {
  const statusOptions = [
    {
      label: 'Créé',
      value: 'created',
    },
    {
      label: 'Obsolète',
      value: 'obsolete',
    },
    {
      label: 'Supprimé',
      value: 'deleted',
    },
    {
      label: 'Archivé',
      value: 'archived',
    },
  ];

  return (
    <Paper
      sx={{
        border: '2px solid',
        borderColor: 'primary.main',
        padding: '2rem',
        margin: ' 2rem auto',
        maxWidth: '100rem',
      }}
      elevation={6}
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="row" alignItems="baseline" spacing={2}>
          <Typography component="span" variant="body1">
            Devis
          </Typography>
          <Typography variant="h5" color="primary">
            #{quotation.id}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="end" spacing={2}>
          <Typography component="span" variant="body1">
            Créé le {dateUtils(quotation.createdAt)}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="end" spacing={2}>
          <FieldSelectCustomer
            value={
              quotation.customer === undefined ? '' : quotation.customer.id
            }
            label="Client"
            name="customer-search"
            selectOption={allCustomerList}
            onChange={(e) => onChangeCustomer(e)}
          />
          <FieldInput
            value={quotation.status}
            label="Statut"
            name="quotation-status"
            width="15rem"
            selectOption={statusOptions}
            onChange={(e) => onChange(e)}
            required
          />
        </Stack>

        <FieldInput
          value={quotation.deliveryAddress}
          name="quotation-deliveryAddress"
          label="Adresse de livraison"
          onChange={(e) => onChange(e)}
          multiline={2}
          required
        />

        <FieldInput
          value={quotation.comment}
          name="quotation-comment"
          label="Commentaire"
          onChange={(e) => onChange(e)}
          multiline={2}
        />
      </Stack>
    </Paper>
  );
};

CardQuotationEdit.propTypes = {
  quotation: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    status: PropTypes.string,
    deliveryAddress: PropTypes.string,
    comment: PropTypes.string,
    customer: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeCustomer: PropTypes.func.isRequired,
  allCustomerList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};

export default CardQuotationEdit;
