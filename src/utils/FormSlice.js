import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  address: '',
  country: '',
  countryCode: '',
  phoneNo: '',
  errors: {},
  openModal:false, // Object to store validation errors
};

// this is a slice for create Account(register) state and actions

const FormSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearField:(state) =>{
        // return initialState
        state.firstname= '';
        state.lastname= '';
        state.email= '';
        state.address= '';
        state.country= '';
        state.countryCode= '';
        state.phoneNo= '';
    },
    openModal:(state) =>{
        state.openModal = !state.openModal;
    },

    validateForm: (state) => {
      // Perform your form validation here we can make a separate Fn for validation so we can reuse as many places 
      const errors = {};
      if (!state.firstname) {
        errors.firstname = 'firstname is required';
      }
      if (!state.lastname) {
        errors.lastname = 'lastname is required';
      }
      if (!state.email) {
        errors.email = 'Email is required';
      }
      if (!state.address) {
        errors.address = 'Address is required';
      }
      if (!state.countryCode) {
        errors.countryCode = 'Country Code is required';
      }
      if (!state.country) {
        errors.country = 'Country is required';
      }
      if (!state.phoneNo) {
        
        errors.phoneNo = 'Phone Number is required';
      }
        if(state.phoneNo.length!==10)
        {
            errors.phoneNo = 'Please Provide Correct Phone Number';
        }
      
      // Add more validation rules as needed

      state.errors = errors;
    },
  },
});

export const { updateField, validateForm,clearField,openModal } = FormSlice.actions;
export default FormSlice.reducer;
