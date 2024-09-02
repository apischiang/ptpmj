'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Plus, Save, X } from "lucide-react"

interface LineItem {
  no: number
  description: string
  leadTime: string
  qty: number
  uom: string
  hargaSatuan: number
  discountPercent: number
  discountAmount: number
  jumlah: number
}

interface Customer {
  id: string
  name: string
  address: string
  receiver: string
}

interface Notification {
  message: string
  type: 'success' | 'error'
}

const initialLineItem: LineItem = {
  no: 1,
  description: '',
  leadTime: '',
  qty: 0,
  uom: '',
  hargaSatuan: 0,
  discountPercent: 0,
  discountAmount: 0,
  jumlah: 0
}

const customers: Customer[] = [
  { id: '1', name: 'Acme Corp', address: '123 Main St, Anytown, AT 12345', receiver: 'John Doe' },
  { id: '2', name: 'Globex Inc', address: '456 Oak Rd, Somewhere, SW 67890', receiver: 'Jane Smith' },
  { id: '3', name: 'Umbrella Corp', address: '789 Pine Ave, Nowhere, NW 13579', receiver: 'Bob Johnson' },
]

export function QuotationForm() {
  const [lineItems, setLineItems] = useState<LineItem[]>([initialLineItem])
  const [notification, setNotification] = useState<Notification | null>(null)
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('')
  const [quotationNumber, setQuotationNumber] = useState('')

  useEffect(() => {
    setQuotationNumber(`QT-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`)
  }, [])

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId)

  const addLineItem = () => {
    setLineItems([...lineItems, { 
      ...initialLineItem,
      no: lineItems.length + 1
    }])
  }

  const removeLineItem = (index: number) => {
    setLineItems(lineItems.filter((_, i) => i !== index))
  }

  const updateLineItem = (index: number, field: keyof LineItem, value: string | number) => {
    const updatedItems = lineItems.map((item, i) => {
      if (i === index) {
        const updatedItem = { ...item, [field]: value }
        const subtotal = updatedItem.qty * updatedItem.hargaSatuan
        updatedItem.discountAmount = subtotal * (updatedItem.discountPercent / 100)
        updatedItem.jumlah = subtotal - updatedItem.discountAmount
        return updatedItem
      }
      return item
    })
    setLineItems(updatedItems)
  }

  const saveQuotation = () => {
    console.log('Saving quotation:', { quotationNumber, selectedCustomer, lineItems, subtotal, vat, total })
    setNotification({ message: "Your quotation has been saved successfully.", type: 'success' })
  }

  const cancelQuotation = () => {
    setLineItems([initialLineItem])
    setSelectedCustomerId('')
    setNotification({ message: "Your quotation has been reset to its initial state.", type: 'error' })
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.jumlah, 0)
  const vat = subtotal * 0.11
  const total = subtotal + vat

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
    <Card className="w-full max-w-5xl mx-auto ">
      <CardHeader className="flex flex-col space-y-4 pb-2 mb-5">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">Quotation Form</CardTitle>
            <div className="mt-2">
              <Label htmlFor="customerSelect">Customer</Label>
              <Select onValueChange={setSelectedCustomerId} value={selectedCustomerId}>
                <SelectTrigger className="w-[250px]" id="customerSelect">
                  <SelectValue placeholder="Select a customer" />
                </SelectTrigger>
                <SelectContent>
                  {customers.map((customer) => (
                    <SelectItem key={customer.id} value={customer.id}>
                      {customer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold">Quotation Number</div>
            <div className="text-2xl font-bold">{quotationNumber}</div>
            {selectedCustomer && (
              <div className="mt-2 text-sm">
                <p>{selectedCustomer.address}</p>
                <p>Attn: {selectedCustomer.receiver}</p>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {notification && (
          <div className={`mb-4 p-2 rounded ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {notification.message}
          </div>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">No</TableHead>
              <TableHead className="text-center">Description</TableHead>
              <TableHead className="text-center">Lead Time</TableHead>
              <TableHead className="text-center">Qty</TableHead>
              <TableHead className="text-center">UOM</TableHead>
              <TableHead className="text-center">Harga Satuan (IDR)</TableHead>
              <TableHead className="text-center">Discount (%)</TableHead>
              <TableHead className="text-center">Discount (IDR)</TableHead>
              <TableHead className="text-center">Jumlah (IDR)</TableHead>
              <TableHead className="w-[50px] text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lineItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-center">{item.no}</TableCell>
                <TableCell>
                  <Input 
                    value={item.description} 
                    onChange={(e) => updateLineItem(index, 'description', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={item.leadTime} 
                    onChange={(e) => updateLineItem(index, 'leadTime', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    type="number" 
                    value={item.qty} 
                    onChange={(e) => updateLineItem(index, 'qty', Number(e.target.value))}
                    className="text-right"
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={item.uom} 
                    onChange={(e) => updateLineItem(index, 'uom', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    type="number" 
                    value={item.hargaSatuan} 
                    onChange={(e) => updateLineItem(index, 'hargaSatuan', Number(e.target.value))}
                    className="text-right"
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    type="number" 
                    value={item.discountPercent} 
                    onChange={(e) => updateLineItem(index, 'discountPercent', Number(e.target.value))}
                    className="text-right"
                  />
                </TableCell>
                <TableCell className="text-right">{item.discountAmount.toLocaleString('id-ID')}</TableCell>
                <TableCell className="text-right">{item.jumlah.toLocaleString('id-ID')}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" onClick={() => removeLineItem(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between items-start">
        <div className="space-x-2">
          <Button onClick={addLineItem}>
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
          <Button onClick={saveQuotation} variant="outline">
            <Save className="mr-2 h-4 w-4" /> Save Quotation
          </Button>
          <Button onClick={cancelQuotation} variant="destructive">
            <X className="mr-2 h-4 w-4" /> Cancel
          </Button>
        </div>
        <div className="text-right space-y-2">
          <div>
            <Label>Subtotal</Label>
            <div className="text-lg font-semibold">{subtotal.toLocaleString('id-ID')} IDR</div>
          </div>
          <div>
            <Label>VAT (11%)</Label>
            <div className="text-lg font-semibold">{vat.toLocaleString('id-ID')} IDR</div>
          </div>
          <div>
            <Label>Total</Label>
            <div className="text-2xl font-bold">{total.toLocaleString('id-ID')} IDR</div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}

export default QuotationForm