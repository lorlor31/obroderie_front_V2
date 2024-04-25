// == Import : npm
import PropTypes from 'prop-types';
import { InputAdornment } from '@material-ui/core';
import { MenuItem, TextField } from '@mui/material';

// == Composant
const FieldInput = ({
  error,
  required,
  errortext,
  value,
  type,
  name,
  label,
  onChange,
  width,
  unit,
  multiline,
  selectOption,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target);
  };

  const inputId = `FieldInput-${name}`;

  const multilineBool = multiline !== 1;
  const selectBool = selectOption.length !== 0;

  return (
    <TextField
      error={error}
      required={required}
      helperText={error ? errortext : ''}
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
      multiline={multilineBool}
      rows={multiline}
      InputProps={{
        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
      }}
      sx={{
        backgroundColor: 'colors.editable',
        width: { width },
      }}
    >
      {selectBool &&
        selectOption.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

FieldInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string,
  unit: PropTypes.string,
  multiline: PropTypes.number,
  selectOption: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),

  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  required: PropTypes.bool,
  errortext: PropTypes.string,
};

// Valeurs par défaut pour les props
FieldInput.defaultProps = {
  value: '',
  type: 'text',
  width: '100%',
  unit: '',
  multiline: 1,
  selectOption: [],
};

// == Export
export default FieldInput;
