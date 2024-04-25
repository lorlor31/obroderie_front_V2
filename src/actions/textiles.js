export const FETCH_TEXTILES = 'FETCH_TEXTILES'; // GET datas from API
export const LOAD_TEXTILES = 'LOAD_TEXTILES'; // Saving datas in state
export const LOAD_TEXTILE = 'LOAD_TEXTILE'; // Saving single data in state
export const RESET_TEXTILE = 'RESET_TEXTILE'; // Empty form for new textile
export const POST_TEXTILE = 'POST_TEXTILE'; // POST to API
export const CREATE_TEXTILE = 'CREATE_TEXTILE'; // Creating data in state
export const PUT_TEXTILE = 'PUT_TEXTILE'; // PUT to API
export const UPDATE_TEXTILE = 'UPDATE_TEXTILE'; // Update data in state
export const UPDATE_TEXTILE_FIELD = 'UPDATE_TEXTILE_FIELD'; // Update value on key press
export const DELETE_TEXTILE = 'DELETE_TEXTILE'; // DELETE to API
export const DESTROY_TEXTILE = 'DESTROY_TEXTILE'; // Deleting data from state

export const fetchTextiles = () => ({
  type: FETCH_TEXTILES,
});

export const loadTextiles = (textiles) => ({
  type: LOAD_TEXTILES,
  textiles,
});

export const loadTextile = (id) => ({
  type: LOAD_TEXTILE,
  id: Number(id),
});

export const postTextile = (data) => ({
  type: POST_TEXTILE,
  data,
});

export const createTextile = (data) => ({
  type: CREATE_TEXTILE,
  data,
});

export const putTextile = (data) => ({
  type: PUT_TEXTILE,
  data,
});

export const updateTextile = (data) => ({
  type: UPDATE_TEXTILE,
  data,
});

export const resetTextile = () => ({
  type: RESET_TEXTILE,
});

export const deleteTextile = (id) => ({
  type: DELETE_TEXTILE,
  id: Number(id),
});

export const destroyTextile = (id) => ({
  type: DESTROY_TEXTILE,
  id: Number(id),
});

export const updateTextileField = (name, value) => ({
  type: UPDATE_TEXTILE_FIELD,
  name,
  value,
});
