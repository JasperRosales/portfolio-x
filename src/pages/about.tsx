export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hi there! I&apos;m a passionate developer with a love for creating 
                innovative digital solutions. With experience in modern web technologies,
                I specialize in building responsive, user-friendly applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My journey in technology started several years ago, and since then,
                I&apos;ve been constantly learning and evolving my skills to stay
                up-to-date with the latest trends and best practices.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Python</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Skills & Expertise
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Frontend Development (React, Vue, Angular)</li>
                <li>• Backend Development (Node.js, Python)</li>
                <li>• Database Design (MongoDB, PostgreSQL)</li>
                <li>• Cloud Services (AWS, Vercel, Netlify)</li>
                <li>• UI/UX Design Principles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
