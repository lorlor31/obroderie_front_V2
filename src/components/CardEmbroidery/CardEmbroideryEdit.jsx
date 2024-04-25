import { Paper, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import FieldInput from '../Field/FieldInput';

const CardEmbroideryEdit = ({ embroidery, onChange }) => {
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
          value={embroidery.name}
          name="name"
          label="Nom de la broderie"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={embroidery.design}
          name="design"
          label="Design"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={embroidery.text}
          name="text"
          label="Texte"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={embroidery.detail}
          name="detail"
          label="Détail"
          onChange={(e) => onChange(e)}
          required
        />
      </Stack>
    </Paper>
  );
};

CardEmbroideryEdit.propTypes = {
  embroidery: PropTypes.shape({
    name: PropTypes.string,
    design: PropTypes.string,
    text: PropTypes.string,
    detail: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardEmbroideryEdit;
