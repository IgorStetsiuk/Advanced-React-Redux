export default function asynch(store) {
  return function (next) {
    return function (action) {
      
      if (typeof action.payload.then !== 'function') {
        return next(action);
      }
       action.payload
        .then(({data}) => {
          const newAction = { ...action, payload: data };
          store.dispatch(newAction)
        })
    }
  }
}
