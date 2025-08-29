export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Portfolio
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                E-commerce Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A full-stack e-commerce solution built with React, Node.js, and MongoDB.
                Features include user authentication, payment processing, and inventory management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">MongoDB</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Task Management App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A collaborative task management application with real-time updates,
                team collaboration features, and advanced project tracking capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Vue.js</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Firebase</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">WebSocket</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Weather Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A responsive weather dashboard with location-based forecasts,
                interactive maps, and detailed weather analytics with historical data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs">Weather API</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Chart.js</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
