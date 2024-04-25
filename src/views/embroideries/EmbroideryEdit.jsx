import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import Loading from '../../components/Loading/Loading';
import {
  putEmbroidery,
  updateEmbroideryField,
  deleteEmbroidery,
  resetEmbroidery,
  loadEmbroidery,
} from '../../actions/embroideries';

import CardEmbroideryEdit from '../../components/CardEmbroidery/CardEmbroideryEdit';
import TypoTitle from '../../components/TypoTitle/TypoTitle';

const EmbroideryEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { embroideryCurrent, isEmbroideryLoaded, isEmbroideriesLoaded } =
    useSelector((state) => state.embroideries);

  useEffect(() => {
    if (isEmbroideriesLoaded && !isEmbroideryLoaded) {
      dispatch(loadEmbroidery(id));
    }
  }, [dispatch, id, isEmbroideryLoaded, isEmbroideriesLoaded]);

  useEffect(() => {
    return () => {
      dispatch(resetEmbroidery());
    };
  }, [dispatch]);

  const handleChange = ({ name, value }) => {
    dispatch(updateEmbroideryField(name, value));
  };

  const handleCancel = () => {
    navigate(`/broderies`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putEmbroidery(embroideryCurrent));
    navigate(`/broderies`);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteEmbroidery(id));
    navigate(`/broderies`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Modifier la broderie" />
      {!isEmbroideryLoaded ? (
        <Loading />
      ) : (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <CardEmbroideryEdit
            embroidery={embroideryCurrent}
            onChange={(e) => handleChange(e)}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ margin: 'auto', marginTop: '1rem' }}
          >
            <Stack direction="row" spacing={2}>
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Enregistrer les modifications
              </Button>
              <Button variant="outlined" onClick={handleCancel}>
                Annuler
              </Button>
            </Stack>
            <Button variant="outlined" color="error" onClick={handleDelete}>
              Supprimer
            </Button>
          </Stack>
        </form>
      )}
    </Container>
  );
};
export default EmbroideryEdit;
