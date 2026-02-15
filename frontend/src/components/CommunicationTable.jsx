export default function CommunicationTable({ columns, data, title }) {
    if (!data || data.length === 0) {
        return (
            <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-gray-100 mt-4">
                <p className="text-gray-400">No {title.toLowerCase()} records found.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                            {columns.map((col) => (
                                <th key={col.key} className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {col.label}
                                </th>
                            ))}
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                {columns.map((col) => (
                                    <td key={col.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {item[col.key]}
                                    </td>
                                ))}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(item.created_at).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
