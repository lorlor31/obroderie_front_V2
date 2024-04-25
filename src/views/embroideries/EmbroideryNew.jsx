import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import {
  updateEmbroideryField,
  postEmbroidery,
  resetEmbroidery,
} from '../../actions/embroideries';

import CardEmbroideryEdit from '../../components/CardEmbroidery/CardEmbroideryEdit';
import TypoTitle from '../../components/TypoTitle/TypoTitle';

const EmbroideryNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { embroideryCurrent } = useSelector((state) => state.embroideries);

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
    dispatch(postEmbroidery(embroideryCurrent));
    navigate(`/broderies`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Nouvelle broderie" />

      <CardEmbroideryEdit
        embroidery={embroideryCurrent}
        onChange={(e) => handleChange(e)}
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Ajouter
        </Button>
        <Button variant="outlined" onClick={handleCancel}>
          Annuler
        </Button>
      </Stack>
    </Container>
  );
};

export default EmbroideryNew;
