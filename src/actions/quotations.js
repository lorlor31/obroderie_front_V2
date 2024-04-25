export const FETCH_QUOTATIONS = 'FETCH_QUOTATIONS';
export const FETCH_QUOTATION = 'FETCH_QUOTATION';
export const LOAD_QUOTATIONS = 'LOAD_QUOTATIONS';
export const LOAD_QUOTATION = 'LOAD_QUOTATION';
export const POST_QUOTATION = 'POST_QUOTATION';
export const CREATE_QUOTATION = 'CREATE_QUOTATION';
export const PUT_QUOTATION = 'PUT_QUOTATION';
export const UPDATE_QUOTATION = 'UPDATE_QUOTATION';
export const UPDATE_QUOTATION_FIELD = 'UPDATE_QUOTATION_FIELD';
export const DELETE_QUOTATION = 'DELETE_QUOTATION';
export const DESTROY_QUOTATION = 'DESTROY_QUOTATION';
export const RESET_QUOTATION = 'RESET_QUOTATION';
export const FETCH_QUOTATION_PDF = 'FETCH_QUOTATION_PDF';

export const UPDATE_PRODUCT_FIELD = 'UPDATE_PRODUCT_FIELD';
export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';

export const fetchQuotations = () => ({
  type: FETCH_QUOTATIONS,
});

export const fetchQuotation = () => ({
  type: FETCH_QUOTATION,
});

export const loadQuotations = (quotations) => ({
  type: LOAD_QUOTATIONS,
  quotations,
});

export const loadQuotation = (id) => ({
  type: LOAD_QUOTATION,
  id: Number(id),
});

export const postQuotation = (data) => ({
  type: POST_QUOTATION,
  data,
});

export const createQuotation = (data) => ({
  type: CREATE_QUOTATION,
  data,
});

export const putQuotation = (quotationData, productsData) => {
  return {
    type: PUT_QUOTATION,
    frontData: { ...quotationData, products: productsData },
    quotation: {
      ...quotationData,
      user: quotationData.user.id,
      customer: quotationData.customer.id,
      products: productsData.map((product) => product.id),
    },
    products: productsData.map((product) => {
      return {
        ...product,
        textile: product.textile.id,
        embroidery: product.embroidery.id,
      };
    }),
  };
};

export const updateQuotation = (data) => ({
  type: UPDATE_QUOTATION,
  data,
});

export const resetQuotation = () => ({
  type: RESET_QUOTATION,
});

export const deleteQuotation = (quotationData, productsData) => ({
  type: DELETE_QUOTATION,
  quotationId: Number(quotationData.id),
  productsId: productsData.map((product) => product.id),
});

export const destroyQuotation = (id) => ({
  type: DESTROY_QUOTATION,
  id: Number(id),
});

export const updateQuotationField = (name, value) => ({
  type: UPDATE_QUOTATION_FIELD,
  name,
  value,
});

export const fetchQuotationPdf = (id) => ({
  type: FETCH_QUOTATION_PDF,
  id: Number(id),
});
