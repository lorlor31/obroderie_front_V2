import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Grid, Container, Stack } from '@mui/material';

import TypoTitle from '../../components/TypoTitle/TypoTitle';
import CardCustomerShow from '../../components/CardCustomer/CardCustomerShow';
import Loading from '../../components/Loading/Loading';

const CustomerList = () => {
  const navigate = useNavigate();

  const { customerList, isCustomersLoaded } = useSelector(
    (state) => state.customers
  );

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TypoTitle text="Liste des clients" />

        <Button
          variant="contained"
          onClick={() => navigate(`/clients/nouveau`)}
          sx={{ height: 'fit-content' }}
        >
          Créer nouveau client
        </Button>
      </Stack>

      {!isCustomersLoaded ? (
        <Loading />
      ) : (
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {customerList.map((customer) => {
            return (
              <Grid
                item
                key={customer.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
              >
                <CardCustomerShow
                  customer={customer}
                  handleEdit={() =>
                    navigate(`/clients/modifier/${customer.id}`)
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

export default CustomerList;
