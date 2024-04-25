import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';
import TypoData from '../TypoData/TypoData';
import TypoLabel from '../TypoLabel/TypoLabel';

const CardEmbroideryForQuotation = ({ embroidery }) => {
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
            marginBottom: '0.5rem',
          }}
        >
          <Typography variant="body1" color="primary">
            Broderie <TypoData text={embroidery.id} />
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Stack direction="column" alignItems="end" spacing={1}>
            <TypoLabel text="Nom" />
            <TypoLabel text="Design" />
            <TypoLabel text="Texte à broder" />
          </Stack>
          <Stack direction="column" spacing={1}>
            <TypoData text={embroidery.name} />
            <TypoData text={embroidery.design} />
            <TypoData text={`${embroidery.text.substring(0, 20)}...`} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

CardEmbroideryForQuotation.propTypes = {
  embroidery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    design: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardEmbroideryForQuotation;
