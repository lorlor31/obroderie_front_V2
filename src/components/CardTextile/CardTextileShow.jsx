import PropTypes from 'prop-types';
import { Paper, Stack, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TypoLabel from '../TypoLabel/TypoLabel';
import TypoLabelData from '../TypoLabelData/TypoLabelData';
import { dateUtils } from '../../utils/dateUtils';

const CardTextileShow = ({ textile, handleEdit }) => {
  const onClickEdit = () => {
    handleEdit(textile.id);
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
          <TypoLabel text={`#${textile.id}`} />
          <IconButton aria-label="edit" onClick={onClickEdit}>
            <EditIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2}>
          <TypoLabelData label="Nom" data={textile.name} />
          <TypoLabelData label="Type" data={textile.type} />
          <TypoLabelData label="Taille" data={textile.size} />
          <TypoLabelData label="Couleur" data={textile.color} />
          <TypoLabelData label="Marque" data={textile.brand} />
          <TypoLabelData label="Commentaire" data={textile.comment} />
          <TypoLabelData label="Créé le" data={dateUtils(textile.createdAt)} />
        </Stack>
      </Stack>
    </Paper>
  );
};

CardTextileShow.propTypes = {
  textile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    brand: PropTypes.string,
    comment: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default CardTextileShow;
