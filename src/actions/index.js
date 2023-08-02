  
  export const addItem = (name, description) => {
    return { type: 'ADD_ITEM', name, description };
  };
  
  export const updatenameText = (uuid, name) => {
    return { type: 'UPDATE_ITEM_TEXT', uuid, name };
  };

  export const updateDescriptionText = (uuid, description) => {
    return { type: 'UPDATE_ITEM_TEXT', uuid, description };
  };
  
  export const removeItem = uuid => {
    return { type: 'REMOVE_ITEM', uuid };
  };
  