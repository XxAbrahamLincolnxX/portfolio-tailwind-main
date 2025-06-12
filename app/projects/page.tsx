// app/projects/page.tsx
import Header from '../components/Header'

export default function ProjectsPage() {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <h1 className="text-4xl">Projects Page</h1>
      </div>
    </div>
  )
}