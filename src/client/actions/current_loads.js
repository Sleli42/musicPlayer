export const ADD_LOADING = 'currentLoads/addLoading';
export const DEL_LOADING = 'currentLoads/delLoading';

export const addLoading = () => ({
  type: ADD_LOADING,
});

export const delLoading = () => ({
  type: DEL_LOADING,
});

export default {
  addLoading,
  delLoading,
};
