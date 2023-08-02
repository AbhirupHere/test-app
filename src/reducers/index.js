import { v4 as uuidv4 } from 'uuid';


export default function tableItems(state = {}, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const id = uuidv4();

      return {
        ...state,
        [id]: {
          uuid: id,
          time: new Date(),
          name: action.name,
          description: action.description,
        }
      };
    case 'UPDATE_ITEM_NAME':
      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          name: action.name,
        }
      };
    case 'UPDATE_ITEM_DESCRIPTION':
      return {
        ...state,
        [action.uuid]: {
          ...state[action.uuid],
          description: action.description,
        }
      };
  
    case 'REMOVE_ITEM':
      let nextState = { ...state };
      delete nextState[action.uuid];

      return nextState;
    default:
      return state;
  }
}