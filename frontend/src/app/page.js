'use client';

import { useState, useEffect } from 'react';
import { fetchEmails, createEmail, fetchSMS, createSMS, fetchWhatsApp, createWhatsApp } from '../services/api';
import CommunicationForm from '../components/CommunicationForm';
import CommunicationTable from '../components/CommunicationTable';

const tabs = [
    { id: 'emails', label: 'Emails', icon: '📧' },
    { id: 'sms', label: 'SMS', icon: '📱' },
    { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
];

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('emails');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const fetchData = async () => {
        setIsLoading(true);
        try {
            let res;
            if (activeTab === 'emails') res = await fetchEmails();
            else if (activeTab === 'sms') res = await fetchSMS();
            else res = await fetchWhatsApp();
            setData(res.data);
        } catch (err) {
            console.error('Error fetching data:', err);
            showNotification('Failed to fetch data', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const showNotification = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    };

    const handleCreate = async (formData, resetForm) => {
        setIsSubmitting(true);
        try {
            if (activeTab === 'emails') await createEmail(formData);
            else if (activeTab === 'sms') await createSMS(formData);
            else await createWhatsApp(formData);

            showNotification(`${activeTab.slice(0, -1)} sent successfully!`, 'success');
            resetForm();
            fetchData();
        } catch (err) {
            console.error('Error creating record:', err);
            showNotification('Failed to send message', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getFields = () => {
        if (activeTab === 'emails') {
            return [
                { name: 'email_to', label: 'Email To', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' },
                { name: 'message', label: 'Message', type: 'textarea' },
            ];
        }
        return [
            { name: 'mobile_number', label: 'Mobile Number', type: 'text' },
            { name: 'message', label: 'Message', type: 'textarea' },
        ];
    };

    const getColumns = () => {
        if (activeTab === 'emails') {
            return [
                { key: 'email_to', label: 'Email To' },
                { key: 'subject', label: 'Subject' },
                { key: 'message', label: 'Message' },
            ];
        }
        return [
            { key: 'mobile_number', label: 'Mobile Number' },
            { key: 'message', label: 'Message' },
        ];
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <h1 className="text-2xl font-black text-indigo-600 tracking-tight flex items-center">
                        <span className="bg-indigo-600 text-white w-10 h-10 flex items-center justify-center rounded-xl mr-3 shadow-lg shadow-indigo-200">C</span>
                        COMM DASH
                    </h1>
                    {message.text && (
                        <div className={`px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-gray-100 border animate-in slide-in-from-top-2 duration-300 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'
                            }`}>
                            {message.text}
                        </div>
                    )}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-4">
                        <CommunicationForm
                            title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
                            fields={getFields()}
                            onSubmit={handleCreate}
                            buttonLabel={`Send ${activeTab.slice(0, -1)}`}
                            isLoading={isSubmitting}
                        />
                    </div>

                    {/* Right Column - Table & Tabs */}
                    <div className="lg:col-span-8">
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-100'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 scale-95 opacity-70'
                                        }`}
                                >
                                    <span className="text-xl">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {isLoading ? (
                            <div className="mt-10 flex flex-col items-center justify-center space-y-4">
                                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-gray-500 font-medium">Fetching records...</p>
                            </div>
                        ) : (
                            <CommunicationTable
                                title={activeTab}
                                columns={getColumns()}
                                data={data}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
