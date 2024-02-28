// import { nanoid } from 'nanoid';
// import { combineReducers } from 'redux';

// const contactsInitialState = [
//   { id: nanoid(), name: 'Dragan Rares', number: '0730256901 ' },
//   { id: nanoid(), name: 'Niculescu Albert', number: '0730256901 ' },
//   { id: nanoid(), name: 'Marin Ionela', number: '0730256901 ' },
//   { id: nanoid(), name: 'Dragan Ionut', number: '0730256901 ' },
// ];

// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return [...state, action.payload];

//     case 'contacts/deleteContact':
//       return state.filter(item => item.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filterInitialState = '';

// const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter':
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

//* Un singur reducer //

import { nanoid } from 'nanoid';
const initialState = {
  contacts: [
    { id: nanoid(), name: 'Dragan Rares', number: '0730256901 ' },
    { id: nanoid(), name: 'Niculescu Albert', number: '0730256901 ' },
    { id: nanoid(), name: 'Marin Ionela', number: '0730256901 ' },
    { id: nanoid(), name: 'Dragan Ionut', number: '0730256901 ' },
  ],

  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };

    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
