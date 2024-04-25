import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import {
  updateCustomerField,
  postCustomer,
  resetCustomer,
} from '../../actions/customers';

import CardCustomerEdit from '../../components/CardCustomer/CardCustomerEdit';
import TypoTitle from '../../components/TypoTitle/TypoTitle';

const CustomerNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { customerCurrent } = useSelector((state) => state.customers);

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
    dispatch(postCustomer(customerCurrent));
    navigate(`/clients`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Nouveau client" />
      <CardCustomerEdit
        customer={customerCurrent}
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

export default CustomerNew;
