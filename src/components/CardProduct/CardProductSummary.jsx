import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';

import TypoData from '../TypoData/TypoData';
import TypoLabel from '../TypoLabel/TypoLabel';

const CardProductSummary = ({ product }) => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        padding: '0.5rem 2rem',
        border: '1px solid',
        borderColor: 'primary.main',
        borderRadius: '1rem',
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        spacing={1}
        sx={{ width: '100%' }}
      >
        <Stack direction="row" spacing={0.5}>
          <TypoLabel text="Nom" />
          <TypoData text={product.name} />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={{ xs: 'center', sm: 'space-evenly' }}
          alignItems={{ xs: 'center', sm: 'center' }}
          spacing={0.5}
          sx={{ width: '100%' }}
        >
          <Stack direction="row" spacing={0.5}>
            <TypoLabel text="Poste" />
            <TypoData text={product.productOrder} />
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <TypoLabel text="Quantité" />
            <TypoData text={product.quantity} />
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <TypoLabel text="Prix" />
            <TypoData text={`${product.price} €`} />
          </Stack>
          <Stack direction="row" spacing={0.5}>
            <TypoLabel text="Délai" />
            <TypoData text={`${product.manufacturingDelay} j.`} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

CardProductSummary.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    manufacturingDelay: PropTypes.number.isRequired,
    productOrder: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardProductSummary;
