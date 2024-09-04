'use client'

import { useState } from 'react'
import { Menu, X, FileText, ShoppingCart, FileSpreadsheet } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative lg:translate-x-0 z-10`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase Order
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Quotation
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Invoice
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500 text-xl">Main content area</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard;