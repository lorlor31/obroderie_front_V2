import PropTypes from 'prop-types';
import { Paper, Stack, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TypoLabel from '../TypoLabel/TypoLabel';
import TypoLabelData from '../TypoLabelData/TypoLabelData';
import { dateUtils } from '../../utils/dateUtils';

const CardEmbroideryShow = ({ embroidery, handleEdit }) => {
  const onClickEdit = () => {
    handleEdit(embroidery.id);
  };
  return (
    <Paper
      sx={{
        padding: '1.5rem',
        margin: '0.1rem auto',
        width: '100%',
      }}
      elevation={5}
    >
      <Stack direction="column" spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TypoLabel text={`#${embroidery.id}`} />
          <IconButton aria-label="edit" onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2}>
          <TypoLabelData label="Nom" data={embroidery.name} />
          <TypoLabelData label="Design" data={embroidery.design} />
          <TypoLabelData label="Texte à broder" data={embroidery.text} />
          <TypoLabelData label="Détails" data={embroidery.detail} />
          <TypoLabelData
            label="Créé le"
            data={dateUtils(embroidery.createdAt)}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

CardEmbroideryShow.propTypes = {
  embroidery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    design: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
};
export default CardEmbroideryShow;
