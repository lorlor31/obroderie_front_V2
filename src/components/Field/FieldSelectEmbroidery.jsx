// == Import : npm
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@mui/material';

// == Composant
const FieldSelectEmbroidery = ({
  value,
  type,
  name,
  label,
  onChange,
  width,
  selectOption,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target);
  };

  const inputId = `FieldSelectEmbroidery-${name}`;

  const selectBool = selectOption.length !== 0;

  return (
    <TextField
      select={selectBool}
      id={inputId}
      className="FieldInput"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      variant="outlined"
      size="normal"
      sx={{
        backgroundColor: 'colors.editable',
        width: { width },
      }}
    >
      {selectBool &&
        selectOption.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {`${option.id} ｜ ${option.name} ｜ ${option.design}`}
          </MenuItem>
        ))}
    </TextField>
  );
};

FieldSelectEmbroidery.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string,
  selectOption: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      design: PropTypes.string.isRequired,
    })
  ),

  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
FieldSelectEmbroidery.defaultProps = {
  value: '',
  type: 'text',
  width: '100%',
  selectOption: [],
};

// == Export
export default FieldSelectEmbroidery;
