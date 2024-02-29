import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [
    { id: nanoid(), name: 'Dragan Rares', number: '0730756901' },
    { id: nanoid(), name: 'Popa Daniela', number: '0730806901' },
    { id: nanoid(), name: 'Marin Ionela', number: '0730906901' },
    { id: nanoid(), name: 'Dragan Ionut', number: '0730506901' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
