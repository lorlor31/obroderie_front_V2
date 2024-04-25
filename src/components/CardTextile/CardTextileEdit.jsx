import { Paper, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import FieldInput from '../Field/FieldInput';

const CardTextileEdit = ({ textile, onChange }) => {
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
          value={textile.name}
          name="name"
          label="Nom du textile"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={textile.type}
          name="type"
          label="Type"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={textile.size}
          name="size"
          label="Taille"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={textile.color}
          name="color"
          label="Couleur"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={textile.brand}
          name="brand"
          label="Marque"
          onChange={(e) => onChange(e)}
          required
        />
        <FieldInput
          value={textile.comment}
          name="comment"
          label="Commentaires"
          onChange={(e) => onChange(e)}
        />
      </Stack>
    </Paper>
  );
};

CardTextileEdit.propTypes = {
  textile: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    brand: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardTextileEdit;
