// == Import : npm
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

// == Composant
const TypoLabel = ({ text, color }) => {
  return (
    <Typography variant="body3" color={color}>
      {`${text}:`}
    </Typography>
  );
};

TypoLabel.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TypoLabel.defaultProps = {
  color: 'primary',
};

// == Export
export default TypoLabel;
