export const addFeature = (item) => {
  console.log('action creator was invoked');
  return { type: 'ADD_FEATURE', payload: item };
};

export const remFeature = (item) => {
  console.log('action creator was invoked 2');
  return { type: 'REMOVE_FEATURE', payload: item };
};
