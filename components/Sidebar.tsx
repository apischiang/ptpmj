import Link from 'next/link'
import { X, FileText, ShoppingCart, FileSpreadsheet, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  currentPage: string
}

export function Sidebar({ sidebarOpen, setSidebarOpen, currentPage }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: ShoppingCart, label: 'Purchase Order', href: '/dashboard/purchase-order' },
    { icon: FileText, label: 'Quotation', href: '/quotation' },
    { icon: FileSpreadsheet, label: 'Invoice', href: '/dashboard/invoice' },
  ]

  return (
    <aside className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative lg:translate-x-0 z-10`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 ${
                  currentPage === item.href 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}