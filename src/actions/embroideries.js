export const FETCH_EMBROIDERIES = 'FETCH_EMBROIDERIES'; // GET datas from API
export const LOAD_EMBROIDERIES = 'LOAD_EMBROIDERIES'; // Saving datas in state
export const LOAD_EMBROIDERY = 'LOAD_EMBROIDERY'; // Saving single data in state
export const RESET_EMBROIDERY = 'RESET_EMBROIDERY'; // Empty form for new embroidery
export const POST_EMBROIDERY = 'POST_EMBROIDERY'; // POST to API
export const CREATE_EMBROIDERY = 'CREATE_EMBROIDERY'; // Creating data in state
export const PUT_EMBROIDERY = 'PUT_EMBROIDERY'; // PUT to API
export const UPDATE_EMBROIDERY = 'UPDATE_EMBROIDERY'; // Update data in state
export const UPDATE_EMBROIDERY_FIELD = 'UPDATE_EMBROIDERY_FIELD'; // Update value on key press
export const DELETE_EMBROIDERY = 'DELETE_EMBROIDERY'; // DELETE to API
export const DESTROY_EMBROIDERY = 'DESTROY_EMBROIDERY'; // Deleting data from state

export const fetchEmbroideries = () => ({
  type: FETCH_EMBROIDERIES,
});

export const loadEmbroideries = (embroideries) => ({
  type: LOAD_EMBROIDERIES,
  embroideries,
});

export const loadEmbroidery = (id) => ({
  type: LOAD_EMBROIDERY,
  id: Number(id),
});

export const postEmbroidery = (data) => ({
  type: POST_EMBROIDERY,
  data,
});

export const createEmbroidery = (data) => ({
  type: CREATE_EMBROIDERY,
  data,
});

export const putEmbroidery = (data) => ({
  type: PUT_EMBROIDERY,
  data,
});

export const updateEmbroidery = (data) => ({
  type: UPDATE_EMBROIDERY,
  data,
});

export const resetEmbroidery = () => ({
  type: RESET_EMBROIDERY,
});

export const deleteEmbroidery = (id) => ({
  type: DELETE_EMBROIDERY,
  id: Number(id),
});

export const destroyEmbroidery = (id) => ({
  type: DESTROY_EMBROIDERY,
  id: Number(id),
});

export const updateEmbroideryField = (name, value) => ({
  type: UPDATE_EMBROIDERY_FIELD,
  name,
  value,
});
