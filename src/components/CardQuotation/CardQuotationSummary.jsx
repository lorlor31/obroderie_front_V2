import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';

import TypoData from '../TypoData/TypoData';
import TypoLabel from '../TypoLabel/TypoLabel';
import TypoDetail from '../TypoDetail/TypoDetail';
import { dateUtils } from '../../utils/dateUtils';

const CardQuotationSummary = ({ quotation }) => {
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
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        padding: '0.5rem 2rem',
        border: '3px solid',
        borderColor: 'primary.main',
        borderRadius: '1rem',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        alignItems={{ xs: 'center', sm: 'center' }}
        spacing={1}
      >
        <Stack
          direction="column"
          spacing={0.5}
          justifyContent="center"
          alignItems={{ xs: 'center', sm: 'start' }}
        >
          <Stack direction="row" spacing={0.5}>
            <TypoLabel text="Devis" />
            <TypoData text={quotation.id} />
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <TypoDetail text="Créé le:" />
            <TypoDetail text={dateUtils(quotation.createdAt)} />
          </Stack>
        </Stack>

        <Stack
          direction="column"
          spacing={0.5}
          justifyContent="center"
          alignItems={{ xs: 'center', sm: 'end' }}
        >
          <Stack direction="row" spacing={0.5}>
            <TypoLabel text="Client" />
            <TypoData text={quotation.customer.name} />
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <TypoDetail text="Statut:" />
            <TypoDetail
              text={
                statusOptions.find(
                  (status) => status.value === quotation.status
                ).label
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

CardQuotationSummary.propTypes = {
  quotation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    status: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardQuotationSummary;
