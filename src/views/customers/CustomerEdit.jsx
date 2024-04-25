import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import Loading from '../../components/Loading/Loading';
import {
  putCustomer,
  updateCustomerField,
  deleteCustomer,
  resetCustomer,
  loadCustomer,
} from '../../actions/customers';

import CardCustomerEdit from '../../components/CardCustomer/CardCustomerEdit';
import TypoTitle from '../../components/TypoTitle/TypoTitle';

const CustomerEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { customerCurrent, isCustomerLoaded, isCustomersLoaded } = useSelector(
    (state) => state.customers
  );

  useEffect(() => {
    if (isCustomersLoaded && !isCustomerLoaded) {
      dispatch(loadCustomer(id));
    }
  }, [dispatch, id, isCustomerLoaded, isCustomersLoaded]);

  useEffect(() => {
    return () => {
      dispatch(resetCustomer());
    };
  }, [dispatch]);

  const handleChange = ({ name, value }) => {
    dispatch(updateCustomerField(name, value));
  };

  const handleCancel = () => {
    navigate(`/clients`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putCustomer(customerCurrent));
    navigate(`/clients`);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteCustomer(id));
    navigate(`/clients`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Modifier le client" />
      {!isCustomerLoaded ? (
        <Loading />
      ) : (
        <form autoComplete="off" onSubmit={handleSubmit}>
          <CardCustomerEdit
            customer={customerCurrent}
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
export default CustomerEdit;
