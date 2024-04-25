import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import {
  updateTextileField,
  postTextile,
  resetTextile,
} from '../../actions/textiles';

import CardTextileEdit from '../../components/CardTextile/CardTextileEdit';
import TypoTitle from '../../components/TypoTitle/TypoTitle';

const TextileNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { textileCurrent } = useSelector((state) => state.textiles);

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
    dispatch(postTextile(textileCurrent));
    navigate(`/textiles`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Nouveau textile" />
      <form autoComplete="off">
        <CardTextileEdit
          textile={textileCurrent}
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
      </form>
    </Container>
  );
};

export default TextileNew;
