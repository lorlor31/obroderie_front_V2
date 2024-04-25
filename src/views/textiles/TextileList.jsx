import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Grid, Container, Stack } from '@mui/material';

import TypoTitle from '../../components/TypoTitle/TypoTitle';
import CardTextileShow from '../../components/CardTextile/CardTextileShow';
import Loading from '../../components/Loading/Loading';

const TextileList = () => {
  const navigate = useNavigate();

  const { textileList, isTextilesLoaded } = useSelector(
    (state) => state.textiles
  );

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TypoTitle text="Liste des textiles" />

        <Button
          variant="contained"
          onClick={() => navigate(`/textiles/nouveau`)}
          sx={{ height: 'fit-content' }}
        >
          Créer nouveau textile
        </Button>
      </Stack>

      {!isTextilesLoaded ? (
        <Loading />
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {textileList.map((textile) => {
            return (
              <Grid
                item
                key={textile.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
              >
                <CardTextileShow
                  textile={textile}
                  handleEdit={() =>
                    navigate(`/textiles/modifier/${textile.id}`)
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default TextileList;
