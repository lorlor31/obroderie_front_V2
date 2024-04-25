import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const TypoTitle = ({ text }) => {
  return (
    <Box
      sx={{
        textTransform: 'uppercase',
        width: 'fit-content',
        paddingRight: '3rem',
        margin: '2rem',
        fontWeight: 'bold',
      }}
    >
      <Typography variant="h4" color="primary">
        {text}
      </Typography>
    </Box>
  );
};

TypoTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypoTitle;
