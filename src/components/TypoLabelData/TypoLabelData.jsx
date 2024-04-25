// == Import : npm
import PropTypes from 'prop-types';
import { Box, Stack } from '@mui/material';
import TypoLabel from '../TypoLabel/TypoLabel';
import TypoData from '../TypoData/TypoData';

// == Composant
const TypoLabelData = ({ label, data, labelColor }) => {
  return (
    <Box
      sx={{
        borderLeft: '2px solid',
        borderColor: labelColor,
        paddingLeft: '0.5rem',
      }}
    >
      <Stack spacing={0.5}>
        <TypoLabel text={label} color={labelColor} />
        <TypoData text={data} />
      </Stack>
    </Box>
  );
};

TypoLabelData.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelColor: PropTypes.string,
};

TypoLabelData.defaultProps = {
  labelColor: 'primary.main',
  data: '',
};

// == Export
export default TypoLabelData;
