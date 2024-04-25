export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'; // GET datas from API
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'; // Saving datas in state
export const LOAD_PRODUCT = 'LOAD_PRODUCT'; // Saving single data in state
export const RESET_PRODUCT = 'RESET_PRODUCT'; // Empty form for new product
export const POST_PRODUCT = 'POST_PRODUCT'; // POST to API
export const CREATE_PRODUCT = 'CREATE_PRODUCT'; // Creating data in state
export const PUT_PRODUCT = 'PUT_PRODUCT'; // PUT to API
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'; // Update data in state
export const UPDATE_PRODUCT_FIELD = 'UPDATE_PRODUCT_FIELD'; // Update value on key press
export const DELETE_PRODUCT = 'DELETE_PRODUCT'; // DELETE to API
export const DESTROY_PRODUCT = 'DESTROY_PRODUCT'; // Deleting data from state
export const LOAD_PRODUCT_FROM_QUOTATION = 'LOAD_PRODUCT_FROM_QUOTATION';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products,
});

export const loadProduct = (id) => ({
  type: LOAD_PRODUCT,
  id: Number(id),
});

export const postProduct = (data) => ({
  type: POST_PRODUCT,
  data,
});

export const createProduct = (data) => ({
  type: CREATE_PRODUCT,
  data,
});

export const putProduct = (data) => ({
  type: PUT_PRODUCT,
  data,
});

export const updateProduct = (data) => ({
  type: UPDATE_PRODUCT,
  data,
});

export const resetProduct = () => ({
  type: RESET_PRODUCT,
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id: Number(id),
});

export const destroyProduct = (id) => ({
  type: DESTROY_PRODUCT,
  id: Number(id),
});

export const updateProductField = (id, name, value) => ({
  type: UPDATE_PRODUCT_FIELD,
  id: Number(id),
  name,
  value,
});

export const loadProductsFromQuotation = (products) => ({
  type: LOAD_PRODUCT_FROM_QUOTATION,
  products,
});
