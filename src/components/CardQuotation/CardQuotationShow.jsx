import PropTypes from 'prop-types';
import { Paper, Stack, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CardQuotationSummary from './CardQuotationSummary';
import CardEmbroideryForQuotation from '../CardEmbroidery/CardEmbroideryForQuotation';
import CardTextileForQuotation from '../CardTextile/CardTextileForQuotation';
import CardProductSummary from '../CardProduct/CardProductSummary';

const CardQuotationShow = ({ quotation, handleEdit }) => {
  const onClickEdit = () => {
    handleEdit(quotation.id);
  };
  return (
    <Paper
      sx={{
        padding: '2.3rem 2rem 1rem 2rem',
        margin: ' 2rem 2rem',
        position: 'relative',
        width: 'auto',
      }}
      elevation={5}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="end"
        sx={{
          position: 'absolute',
          top: '3px',
          right: '3px',
        }}
      >
        <IconButton aria-label="delete" onClick={onClickEdit}>
          <EditIcon />
        </IconButton>
      </Stack>
      <Stack direction="column" spacing={2}>
        <CardQuotationSummary quotation={quotation} />

        {quotation.products.map((product) => {
          return (
            <Stack key={product.productOrder} spacing={1}>
              <CardProductSummary product={product} />
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-around"
                spacing={1}
              >
                <CardEmbroideryForQuotation
                  embroidery={product.embroidery}
                  handleEdit={() => console.log('edit embroidery')}
                />
                <CardTextileForQuotation
                  textile={product.textile}
                  handleEdit={() => console.log('edit textile')}
                />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Paper>
  );
};

CardQuotationShow.propTypes = {
  quotation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    status: PropTypes.string.isRequired,

    customer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }).isRequired,

    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.string.isRequired,
        manufacturingDelay: PropTypes.number.isRequired,
        productOrder: PropTypes.number.isRequired,
        embroidery: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          design: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          detail: PropTypes.string.isRequired,
        }).isRequired,

        textile: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          size: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          brand: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default CardQuotationShow;
