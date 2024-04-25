import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Stack, Button } from '@mui/material';
import {
  postQuotation,
  updateQuotationField,
  resetQuotation,
} from '../../actions/quotations';

import { updateProductField } from '../../actions/products';
import { fetchCustomers } from '../../actions/customers';

import TypoTitle from '../../components/TypoTitle/TypoTitle';
import CardQuotationEdit from '../../components/CardQuotation/CardQuotationEdit';
import CardProductEdit from '../../components/CardProduct/CardProductEdit';

const QuotationNew = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { quotationCurrent } = useSelector((state) => state.quotations);
  const { customerList } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers());
    return () => {
      dispatch(resetQuotation());
    };
  }, [dispatch]);

  const handleChangeQuotation = ({ name, value }) => {
    dispatch(updateQuotationField(name.replace('quotation-', ''), value));
  };

  const handleChangeCustomer = ({ value }) => {
    dispatch(
      updateQuotationField(
        'customer',
        customerList.find((x) => x.id === value)
      )
    );
  };

  const handleChangeProduct = ({ name, value }) => {
    dispatch(updateProductField(name, value));
  };

  const handleCancel = () => {
    navigate(`/devis`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      frontData: quotationCurrent,
      backData: {
        ...quotationCurrent,
        user: 2,
        customer: quotationCurrent.customer.id,
        products:
          quotationCurrent.products !== undefined
            ? quotationCurrent.products.map((product) => {
                return product.id;
              })
            : [],
      },
    };
    dispatch(postQuotation(data));
    navigate(`/devis`);
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <TypoTitle text="Nouveau devis" />
      <form autoComplete="off">
        <CardQuotationEdit
          quotation={quotationCurrent}
          onChange={(e) => handleChangeQuotation(e)}
          allCustomerList={customerList}
          onChangeCustomer={handleChangeCustomer}
        />
        <CardProductEdit onChange={(e) => handleChangeProduct(e)} />
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

export default QuotationNew;
