import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <Outlet /> {/* Aquí se inyectarán las páginas */}
      </main>
      <Footer />
    </div>
  )
}