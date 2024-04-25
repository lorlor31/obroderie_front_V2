import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Stack, Button } from '@mui/material';
import {
  putQuotation,
  updateQuotationField,
  deleteQuotation,
  resetQuotation,
  loadQuotation,
  updateQuotation,
  fetchQuotationPdf,
} from '../../actions/quotations';

import { fetchCustomers } from '../../actions/customers';

import Loading from '../../components/Loading/Loading';

import TypoTitle from '../../components/TypoTitle/TypoTitle';

import CardQuotationEdit from '../../components/CardQuotation/CardQuotationEdit';
import CardProductEdit from '../../components/CardProduct/CardProductEdit';
import { fetchTextiles } from '../../actions/textiles';
import { fetchEmbroideries } from '../../actions/embroideries';
import {
  loadProductsFromQuotation,
  resetProduct,
  updateProductField,
} from '../../actions/products';

const QuotationEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { quotationCurrent, isQuotationLoaded, isQuotationsLoaded } =
    useSelector((state) => state.quotations);

  const { productList, isProductsLoaded } = useSelector(
    (state) => state.products
  );

  const { customerList } = useSelector((state) => state.customers);
  const { textileList } = useSelector((state) => state.textiles);
  const { embroideryList } = useSelector((state) => state.embroideries);

  useEffect(() => {
    if (isQuotationsLoaded && !isQuotationLoaded) {
      dispatch(loadQuotation(id));
      // dispatch(fetchCustomers());
      // dispatch(fetchTextiles());
      // dispatch(fetchEmbroideries());
    }
  }, [dispatch, id, isQuotationLoaded, isQuotationsLoaded]);

  useEffect(() => {
    if (isQuotationLoaded && !isProductsLoaded) {
      dispatch(loadProductsFromQuotation(quotationCurrent.products));
    }
  }, [dispatch, isQuotationLoaded, quotationCurrent, isProductsLoaded]);

  useEffect(() => {
    return () => {
      dispatch(resetQuotation());
      dispatch(resetProduct());
    };
  }, [dispatch]);

  // ----------------------------------------------------------

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

  const handleChangeProduct = ({ name, value, type }) => {
    const productId = name.split('-product-')[1];
    const fieldName = name.split('-product-')[0];
    const fieldValue = type === 'number' ? Number(value) : value;
    dispatch(updateProductField(productId, fieldName, fieldValue));
  };

  const handleChangeTextile = ({ name, value }) => {
    const textileChoice = {
      name,
      value: textileList.find((x) => x.id === value),
    };
    handleChangeProduct(textileChoice);
  };

  const handleChangeEmbroidery = ({ name, value }) => {
    const embroideryChoice = {
      name,
      value: embroideryList.find((x) => x.id === value),
    };
    handleChangeProduct(embroideryChoice);
  };

  const handleCancel = () => {
    navigate(`/devis`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putQuotation(quotationCurrent, productList));
    navigate(`/devis`);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteQuotation(quotationCurrent, productList));
    navigate(`/devis`);
  };

  const handleGeneratePdf = () => {
    dispatch(fetchQuotationPdf(quotationCurrent.id));
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TypoTitle text="Modifier devis" />
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <a
            style={{
              backgroundColor: '#03808F',
              padding: '0.7rem 1rem',
              color: 'white',
              textTransform: 'uppercase',
              borderRadius: '0.4rem',
            }}
            href={`http://opme.lorlor.site/api/contracts/${quotationCurrent.id}/renderpdf`}
          >
            Générer le devis
          </a>

          <a
            style={{
              backgroundColor: '#03808F',
              padding: '0.7rem 1rem',
              color: 'white',
              textTransform: 'uppercase',
              borderRadius: '0.4rem',
            }}
            href={`http://opme.lorlor.site/api/contracts/${quotationCurrent.id}/sendpdf?mail=laure.seng@oclock.school`}
            target="blank"
          >
            Envoyer par mail
          </a>
        </Stack>
      </Stack>
      {!isProductsLoaded ? (
        <Loading />
      ) : (
        <form autoComplete="off">
          <CardQuotationEdit
            quotation={quotationCurrent}
            onChange={(e) => handleChangeQuotation(e)}
            allCustomerList={customerList}
            onChangeCustomer={(e) => handleChangeCustomer(e)}
          />
          {productList.map((product) => (
            <CardProductEdit
              key={product.id}
              product={product}
              onChange={(e) => handleChangeProduct(e)}
              allTextilesList={textileList}
              allEmbroideriesList={embroideryList}
              onChangeTextile={(e) => handleChangeTextile(e)}
              onChangeEmbroidery={(e) => handleChangeEmbroidery(e)}
            />
          ))}

          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{ marginBottom: '2rem' }}
          >
            + produit
          </Button>
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

export default QuotationEdit;
