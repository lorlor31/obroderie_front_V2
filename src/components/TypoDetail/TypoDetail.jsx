// == Import : npm
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

// == Composant
const TypoDetail = ({ text }) => {
  return <Typography variant="body5">{text}</Typography>;
};

TypoDetail.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// == Export
export default TypoDetail;
