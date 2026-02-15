import { useState } from 'react';

export default function CommunicationForm({ fields, onSubmit, title, buttonLabel, isLoading }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData, () => {
            setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
        });
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>
                Send {title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                {fields.map((field) => (
                    <div key={field.name}>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder={`Enter ${field.label.toLowerCase()}...`}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all resize-none"
                            />
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                placeholder={`Enter ${field.label.toLowerCase()}...`}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                            />
                        )}
                    </div>
                ))}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-indigo-700 active:transform active:scale-95 transition-all shadow-md shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        buttonLabel
                    )}
                </button>
            </form>
        </div>
    );
}
