import { useState } from 'react';

export default function NewProfileForm({ onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    youtube: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-4">Basic</h4>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Name*
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Eg. John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Email*
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Eg. John@yyz.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter Phone*
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Eg. 9723456789"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 mb-4">Social Links (Optional)</h4>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instagram Link
          </label>
          <input
            type="url"
            name="instagram"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Eg. instagram.com/username"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Youtube Link
          </label>
          <input
            type="url"
            name="youtube"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Eg. youtube.com/username"
            value={formData.youtube}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700"
        >
          Done
        </button>
      </div>
    </form>
  );
}