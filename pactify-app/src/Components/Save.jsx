import React, { useState } from 'react';

function Saveform({ handleClose, handleSubmit }) {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(name);
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-xl mb-4">Enter your name</h2>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter file name"
                className="border p-2 rounded w-full mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      );

}

export default Saveform;