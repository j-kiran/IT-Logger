import {
  GET_TECHS,
  ADD_TECHS,
  DELETE_TECHS,
  SET_LOADING,
  TECHS_ERROR
} from './types';

//Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Add technician to server
export const addTechs = techs => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(techs),
      headers: {
        'Content-Type': 'application/json'
      }
    } );
    const data = await res.json();

    dispatch({
      type: ADD_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Delete techs from server
export const deleteTechs = (id) => async dispatch => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method:'DELETE'
    });

    dispatch({
      type: DELETE_TECHS,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
