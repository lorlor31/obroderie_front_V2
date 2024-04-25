import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Stack, Container } from '@mui/material';

import TypoTitle from '../../components/TypoTitle/TypoTitle';
import CardQuotationShow from '../../components/CardQuotation/CardQuotationShow';
import Loading from '../../components/Loading/Loading';
import { fetchQuotations } from '../../actions/quotations';

const QuotationList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { quotationList, isQuotationsLoaded } = useSelector(
    (state) => state.quotations
  );

  useEffect(() => {
    dispatch(fetchQuotations());
  }, [dispatch]);

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingBottom: '5rem' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <TypoTitle text="Liste des devis" />

        <Button
          variant="contained"
          onClick={() => navigate(`/devis/nouveau`)}
          sx={{ height: 'fit-content' }}
        >
          Créer nouveau devis
        </Button>
      </Stack>
      {!isQuotationsLoaded ? (
        <Loading />
      ) : (
        <Stack>
          {quotationList.map((quotation) => {
            return (
              <CardQuotationShow
                key={quotation.id}
                quotation={quotation}
                handleEdit={() => navigate(`/devis/modifier/${quotation.id}`)}
              />
            );
          })}
        </Stack>
      )}
    </Container>
  );
};

export default QuotationList;
