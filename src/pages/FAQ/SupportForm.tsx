const SupportForm: React.FC = () => (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">How Can We Help You?</h3>
        <form className="space-y-4">
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                <input type="text" required className="w-full border border-gray-300 px-4 py-2 rounded" />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input type="email" required className="w-full border border-gray-300 px-4 py-2 rounded" />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                <textarea required rows={4} className="w-full border border-gray-300 px-4 py-2 rounded resize-none" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Message
            </button>
        </form>
    </div> 
);

export default SupportForm;