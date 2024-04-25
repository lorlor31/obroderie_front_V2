// == Import : npm
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

// == Composant
const TypoData = ({ text }) => {
  return <Typography variant="body4">{text}</Typography>;
};

TypoData.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TypoData.defaultProps = {
  text: '',
};

// == Export
export default TypoData;
