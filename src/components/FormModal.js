import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, validateForm,clearField,openModal } from "../utils/FormSlice";

const FormModal = () => {
  const formState = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());
    // Handle form submission here if it's valid
    if (Object.keys(formState.errors).length === 0) {
      dispatch(clearField());
      dispatch(openModal());
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-80 z-10">
      <div className="fixed top-0 left-0 w-[70%] h-full bg-blue-200  z-20 overflow-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="bg-gray-200 p-3 m-4">
              {/* <img src="" />  */}
              <h2 className="text-lg"> Hi reader</h2>
              <h4 className="text-sm"> Here is your news </h4>
            </div>
            <div className="bg-gray-200 p-3 m-4">
              {/* <img src="" />  */}
              <h2 className="text-lg"> Have a Feedback</h2>
              <button
                disabled
                className="border border-white-600 p-2 bg-red-400 rounded-md text-white font-bold"
              >
                We're Listening!
              </button>
              <button
                onClick={()=>dispatch(openModal())}
                className="border border-white-600 p-2 bg-red-400 rounded-md text-white font-bold"
              >
               Close
              </button>
            </div>
          </div>
          <div className="col-span-2 py-2 px-4">
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <label>First Name</label>
                <input
                  type="text"
                  value={formState.firstname}
                  onChange={(e) =>
                    handleFieldChange("firstname", e.target.value)
                  }
                  placeholder="First name"
                  className="border border-gray-400 py-1 px-2 w-full h-10 rounded-sm"
                />
                {formState.errors.firstname && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.firstname}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <label>Last Name</label>
                <input
                  type="text"
                  value={formState.lastname}
                  onChange={(e) =>
                    handleFieldChange("lastname", e.target.value)
                  }
                  placeholder="Last name"
                  className="border border-gray-400 py-1 px-2 w-full h-10 rounded-sm"
                />
                {formState.errors.lastname && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.lastname}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <label>Address</label>

                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  value={formState.address}
                  onChange={(e) => handleFieldChange("address", e.target.value)}
                ></textarea>

                {formState.errors.address && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.address}
                  </div>
                )}
              </div>

              <div className="mt-5">
                <label>Country</label>
                <input
                  type="text"
                  value={formState.country}
                  onChange={(e) => handleFieldChange("country", e.target.value)}
                  placeholder="Country"
                  className="border border-gray-400 py-1 px-2 w-full h-10 rounded-sm"
                />
                {formState.errors.country && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.country}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <label>Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full h-10 rounded-sm"
                />
                {formState.errors.email && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.email}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <label>Phone Number</label>
                <br />
                <input
                  type="number"
                  value={formState.countryCode}
                  onChange={(e) =>
                    handleFieldChange("countryCode", e.target.value)
                  }
                  placeholder="+91"
                  className="border border-gray-400 py-1 px-2 w-[30%] h-10 rounded-sm"
                />
                <input
                  type="number"
                  value={formState.phoneNo}
                  onChange={(e) => handleFieldChange("phoneNo", e.target.value)}
                  placeholder="Phone Number"
                  className="border border-gray-400 py-1 px-2 w-[70%] h-10 rounded-sm"
                />
                {formState.errors.countryCode && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.countryCode}
                  </div>
                )}
                {formState.errors.phoneNo && (
                  <div className="text-red-500 text-xs">
                    {formState.errors.phoneNo}
                  </div>
                )}
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="border border-white-600 p-2 bg-green-400 rounded-md text-white font-bold"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
