// app/projects/page.tsx
import Header from '../components/Header'

export default function ProjectsPage() {
  return (
    <div className="w-screen h-auto flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-start pt-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-500/30 hover:shadow-blue-500/40 hover:border-blue-400/50">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-white text-6xl opacity-50">📱</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Mobile App Project</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A modern mobile application built with React Native. Features include user authentication, 
                real-time data synchronization, and an intuitive user interface.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">React Native</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Firebase</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Second Project Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-green-500/30 hover:shadow-green-500/40 hover:border-green-400/50">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-white text-6xl opacity-50">🌐</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Web Dashboard</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A comprehensive web dashboard for data visualization and analytics. 
                Includes interactive charts, real-time updates, and responsive design.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">Tailwind</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">D3.js</span>
              </div>
            </div>
          </div>

          {/* Third Project Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-orange-500/30 hover:shadow-orange-500/40 hover:border-orange-400/50">
            <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-white text-6xl opacity-50">🤖</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">AI Chat Bot</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                An intelligent chatbot powered by machine learning. Provides customer support, 
                answers queries, and learns from user interactions.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">TensorFlow</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">NLP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}