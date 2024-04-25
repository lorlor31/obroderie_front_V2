import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import Loading from '../../components/Loading/Loading';
import {
  putTextile,
  updateTextileField,
  deleteTextile,
  resetTextile,
  loadTextile,
} from '../../actions/textiles';

import CardTextileEdit from '../../components/CardTextile/CardTextileEdit';
import TypoTitle from '../../components/TypoTitle/TypoTitle';

const TextileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { textileCurrent, isTextileLoaded, isTextilesLoaded } = useSelector(
    (state) => state.textiles
  );

  useEffect(() => {
    if (isTextilesLoaded && !isTextileLoaded) {
      dispatch(loadTextile(id));
    }
  }, [dispatch, id, isTextileLoaded, isTextilesLoaded]);

  useEffect(() => {
    return () => {
      dispatch(resetTextile());
    };
  }, [dispatch]);

  const handleChange = ({ name, value }) => {
    dispatch(updateTextileField(name, value));
  };

  const handleCancel = () => {
    navigate(`/textiles`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putTextile(textileCurrent));
    navigate(`/textiles`);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTextile(id));
    navigate(`/textiles`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Modifier le textile" />
      {!isTextileLoaded ? (
        <Loading />
      ) : (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <CardTextileEdit
            textile={textileCurrent}
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
export default TextileEdit;
