import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import AuthPage from '../../views/auth/AuthPage';
import CustomerList from '../../views/customers/CustomerList';
import CustomerNew from '../../views/customers/CustomerNew';
import CustomerEdit from '../../views/customers/CustomerEdit';
import TextileList from '../../views/textiles/TextileList';
import TextileNew from '../../views/textiles/TextileNew';
import TextileEdit from '../../views/textiles/TextileEdit';
import QuotationList from '../../views/quotations/QuotationList';
import QuotationNew from '../../views/quotations/QuotationNew';
import QuotationEdit from '../../views/quotations/QuotationEdit';
import EmbroideryList from '../../views/embroideries/EmbroideryList';
import EmbroideryNew from '../../views/embroideries/EmbroideryNew';
import EmbroideryEdit from '../../views/embroideries/EmbroideryEdit';

import './GlobalStyle.scss';

import { fetchTextiles } from '../../actions/textiles';
import { fetchCustomers } from '../../actions/customers';
import { fetchEmbroideries } from '../../actions/embroideries';
import { fetchQuotations } from '../../actions/quotations';
import Header from '../Header/Header';
import UnderConstructionOrder from '../../views/UnderConstruction/UnderConstructionOrder';
import UnderConstructionInvoice from '../../views/UnderConstruction/UnderConstructionInvoice';

const theme = createTheme({
  palette: {
    colors: {
      editable: '#ffffff',
      uneditable: '#e0e0e0',
      white: '#ffffff',
      grey: '#cccccc',
    },
    primary: {
      main: '#03808F',
    },
    secondary: {
      main: '#FAA744',
    },
    background: {
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2.5rem' },
    h3: { fontSize: '2rem' },
    h4: { fontSize: '1.5rem' },
    body3: { fontWeight: 400 },
    body4: { fontWeight: 400 },
    body5: { fontSize: '0.8rem', fontWeight: 400, color: '#898989' },
  },
});

function App() {
  const isAuthenticated = useSelector((state) => state.auth.logged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotations());
    dispatch(fetchTextiles());
    dispatch(fetchCustomers());
    dispatch(fetchEmbroideries());
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {isAuthenticated && <Header />}
        <Routes>
          <Route path="/" element={<AuthPage />} />
          {isAuthenticated ? (
            <>
              <Route path="/clients" element={<CustomerList />} />
              <Route path="/clients/nouveau" element={<CustomerNew />} />
              <Route path="/clients/modifier/:id" element={<CustomerEdit />} />

              <Route path="/broderies" element={<EmbroideryList />} />
              <Route path="/broderies/nouveau" element={<EmbroideryNew />} />
              <Route
                path="/broderies/modifier/:id"
                element={<EmbroideryEdit />}
              />
              <Route path="/textiles" element={<TextileList />} />
              <Route path="/textiles/nouveau" element={<TextileNew />} />
              <Route path="/textiles/modifier/:id" element={<TextileEdit />} />

              <Route path="/devis" element={<QuotationList />} />
              <Route path="/devis/nouveau" element={<QuotationNew />} />
              <Route path="/devis/modifier/:id" element={<QuotationEdit />} />

              <Route path="/commandes" element={<UnderConstructionOrder />} />
              <Route path="/factures" element={<UnderConstructionInvoice />} />
            </>
          ) : (
            // Redirection vers la page d'authentification si non authentifié
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </ThemeProvider>
    </div>
  );
}
export default App;
