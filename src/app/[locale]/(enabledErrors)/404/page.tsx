export default function Custom404() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center space-y-4">
            <div className="text-9xl font-bold text-red-500">404</div>
            <div className="text-4xl font-semibold text-gray-700">Oops! Page not found.</div>
            <div className="text-lg text-gray-500">This page may not exist, or is unavailable</div>
            <a href="/" className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">Go Home</a>
        </div>
    );
}