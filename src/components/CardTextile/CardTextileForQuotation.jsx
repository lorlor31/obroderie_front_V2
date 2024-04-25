import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';

import TypoData from '../TypoData/TypoData';
import TypoLabel from '../TypoLabel/TypoLabel';

const CardTextileForQuotation = ({ textile }) => {
  return (
    <Box>
      <Stack direction="column" alignItems="center">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            border: '1px solid',
            borderRadius: '2rem',
            borderColor: 'colors.grey',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <Typography variant="body1" color="primary">
            Textile <TypoData text={textile.id} />
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Stack direction="column" alignItems="end" spacing={1}>
            <TypoLabel text="Nom" />
            <TypoLabel text="Type" />
            <TypoLabel text="Taille" />
            <TypoLabel text="Couleur" />
            <TypoLabel text="Marque" />
          </Stack>
          <Stack direction="column" spacing={1}>
            <TypoData text={textile.name} />
            <TypoData text={textile.type} />
            <TypoData text={textile.size} />
            <TypoData text={textile.color} />
            <TypoData text={textile.brand} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

CardTextileForQuotation.propTypes = {
  textile: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    brand: PropTypes.string,
  }).isRequired,
};

export default CardTextileForQuotation;
