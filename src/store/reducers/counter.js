const init = {
  count: 1,
};
const counterreducer = (store = init, action) => {
  switch (action.type) {
    case "make-a-Change": {
      return {
        count: action.payload,
      };
    }
    case "increament": {
      return {
        count: action.payload,
      };
    }
    default: {
      return store;
    }
  }
};
export default counterreducer;
