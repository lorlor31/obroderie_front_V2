export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'; // GET datas from API
export const LOAD_CUSTOMERS = 'LOAD_CUSTOMERS'; // Saving datas in state
export const LOAD_CUSTOMER = 'LOAD_CUSTOMER'; // Saving single data in state
export const RESET_CUSTOMER = 'RESET_CUSTOMER'; // Empty form for new customer
export const POST_CUSTOMER = 'POST_CUSTOMER'; // POST to API
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER'; // Creating data in state
export const PUT_CUSTOMER = 'PUT_CUSTOMER'; // PUT to API
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'; // Update data in state
export const UPDATE_CUSTOMER_FIELD = 'UPDATE_CUSTOMER_FIELD'; // Update value on key press
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'; // DELETE to API
export const DESTROY_CUSTOMER = 'DESTROY_CUSTOMER'; // Deleting data from state

export const fetchCustomers = () => ({
  type: FETCH_CUSTOMERS,
});

export const loadCustomers = (customers) => ({
  type: LOAD_CUSTOMERS,
  customers,
});

export const loadCustomer = (id) => ({
  type: LOAD_CUSTOMER,
  id: Number(id),
});

export const postCustomer = (data) => ({
  type: POST_CUSTOMER,
  data,
});

export const createCustomer = (data) => ({
  type: CREATE_CUSTOMER,
  data,
});

export const putCustomer = (data) => ({
  type: PUT_CUSTOMER,
  data,
});

export const updateCustomer = (data) => ({
  type: UPDATE_CUSTOMER,
  data,
});

export const resetCustomer = () => ({
  type: RESET_CUSTOMER,
});

export const deleteCustomer = (id) => ({
  type: DELETE_CUSTOMER,
  id: Number(id),
});

export const destroyCustomer = (id) => ({
  type: DESTROY_CUSTOMER,
  id: Number(id),
});

export const updateCustomerField = (name, value) => ({
  type: UPDATE_CUSTOMER_FIELD,
  name,
  value,
});
