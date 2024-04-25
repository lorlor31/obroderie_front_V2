import PropTypes from 'prop-types';
import { Paper, Stack, Typography } from '@mui/material';

import FieldInput from '../Field/FieldInput';
import FieldSelectTextile from '../Field/FieldSelectTextile';
import FieldSelectEmbroidery from '../Field/FieldSelectEmbroidery';

const CardProductEdit = ({
  product,
  onChange,
  onChangeTextile,
  allTextilesList,
  onChangeEmbroidery,
  allEmbroideriesList,
}) => {
  return (
    <Paper
      sx={{
        padding: '2rem',
        margin: ' 2rem auto',
        maxWidth: '80rem',
      }}
      elevation={5}
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="row" alignItems="baseline" spacing={2}>
          <Typography component="span" variant="body1">
            Produit
          </Typography>
          <Typography variant="h5" color="primary">
            #{product.id}
          </Typography>
        </Stack>
        <FieldInput
          value={product.name}
          name={`name-product-${product.id}`}
          label="Nom du produit"
          onChange={(e) => onChange(e)}
          width="100%"
          required
        />
        <Stack direction="row" spacing={4}>
          <FieldSelectTextile
            value={product.textile === undefined ? '' : product.textile.id}
            label="Textile"
            name={`textile-product-${product.id}`}
            selectOption={allTextilesList}
            onChange={(e) => onChangeTextile(e)}
          />
          <FieldSelectEmbroidery
            value={
              product.embroidery === undefined ? '' : product.embroidery.id
            }
            label="Broderie"
            name={`embroidery-product-${product.id}`}
            selectOption={allEmbroideriesList}
            onChange={(e) => onChangeEmbroidery(e)}
          />
        </Stack>

        <Stack direction="row" spacing={4}>
          <FieldInput
            value={product.quantity}
            name={`quantity-product-${product.id}`}
            label="Quantité"
            type="number"
            onChange={(e) => onChange(e)}
          />
          <FieldInput
            value={product.manufacturingDelay}
            name={`manufacturingDelay-product-${product.id}`}
            label="Délai de fabrication"
            type="number"
            onChange={(e) => onChange(e)}
            unit="jour(s)"
            required
          />
          <FieldInput
            value={product.price}
            name={`price-product-${product.id}`}
            label="Prix"
            onChange={(e) => onChange(e)}
            unit="€"
            required
          />
        </Stack>
        <FieldInput
          value={product.comment}
          name={`comment-product-${product.id}`}
          label="Commentaire"
          onChange={(e) => onChange(e)}
          multiline={2}
        />
      </Stack>
    </Paper>
  );
};

CardProductEdit.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    productOrder: PropTypes.number,
    manufacturingDelay: PropTypes.number,
    price: PropTypes.string,
    comment: PropTypes.string,
    textile: PropTypes.shape({ id: PropTypes.number }),
    embroidery: PropTypes.shape({ id: PropTypes.number }),
  }),
  onChange: PropTypes.func.isRequired,
  allTextilesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.string,
      color: PropTypes.string,
      brand: PropTypes.string,
    })
  ),
  onChangeTextile: PropTypes.func.isRequired,
  allEmbroideriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      design: PropTypes.string,
      text: PropTypes.string,
      detail: PropTypes.string,
    })
  ),
  onChangeEmbroidery: PropTypes.func.isRequired,
};

CardProductEdit.defaultProps = {
  product: {},
};

export default CardProductEdit;
