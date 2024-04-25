import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Grid, Container, Stack } from '@mui/material';

import TypoTitle from '../../components/TypoTitle/TypoTitle';
import CardEmbroideryShow from '../../components/CardEmbroidery/CardEmbroideryShow';
import Loading from '../../components/Loading/Loading';

const EmbroideryList = () => {
  const navigate = useNavigate();

  const { embroideryList, isEmbroideriesLoaded } = useSelector(
    (state) => state.embroideries
  );

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TypoTitle text="Liste des broderies" />

        <Button
          variant="contained"
          onClick={() => navigate(`/broderies/nouveau`)}
          sx={{ height: 'fit-content' }}
        >
          Créer nouvelle broderie
        </Button>
      </Stack>

      {!isEmbroideriesLoaded ? (
        <Loading />
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {embroideryList.map((embroidery) => {
            return (
              <Grid
                item
                key={embroidery.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
              >
                <CardEmbroideryShow
                  embroidery={embroidery}
                  handleEdit={() =>
                    navigate(`/broderies/modifier/${embroidery.id}`)
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

export default EmbroideryList;
