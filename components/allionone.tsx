/**
 * v0 by Vercel.
 * @see https://v0.dev/t/23nziSjhnE0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"


export default function allinone() {
  return (
    <div className="mt-5 flex flex-col min-h-[100dvh]">
      <header className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <WarehouseIcon className="h-6 w-6" />
          <span className="sr-only">PT. PUTRAMAS MULIA JAYA</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#product" className="text-sm lg:text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
            Products
          </Link>
          <Link href="#client" className="text-sm lg:text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
            Client
          </Link>
          <Link href="#" className="text-sm lg:text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl mb-5 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your One-Stop Supplier Solution
                  </h1>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    Putramas Mulia Jaya provides a wide range of high-quality products and services to meet all your business
                    needs. From raw materials to finished goods, we've got you covered.
                  </p>
                </div>
                <Link href="#" className="mx-auto inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                  Get Quotation now!
                  </Link>
              </div>
              <img
                src="/pict1.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="mb-5 text-3xl font-bold tracking-tighter sm:text-5xl" id="product">Explore Our Wide Range of Products</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From industrial supplies to office essentials, we've got you covered. Browse our top product
                  categories and find what you need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-4 rounded-xl bg-background p-6 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                <img
                  src="/pict2.jpg"
                  width="150"
                  height="150"
                  alt="Industrial Supplies"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Industrial Supplies</h3>
                  <p className="text-muted-foreground">Tools, equipment, and more for your industrial needs.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-4 rounded-xl bg-background p-6 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                <img
                  src="/pict3.jpg"
                  width="150"
                  height="150"
                  alt="Office Supplies"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Office Supplies</h3>
                  <p className="text-muted-foreground">Stationery, electronics, and more for your office.</p>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-4 rounded-xl bg-background p-6 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
              >
                <img
                  src="/pict4.jpg"
                  width="150"
                  height="150"
                  alt="Cleaning Supplies"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Electrical Supplies</h3>
                  <p className="text-muted-foreground">Electronic, and more for your facility.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our wide selection of products or contact us to discuss your specific needs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Quotation now!
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="mb-5 text-3xl font-bold tracking-tighter sm:text-5xl" id="client">Trusted by Leading Brands</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse client base includes some of the most respected names in the industry. See who trusts Putramas Mulia Jaya
                  Supplier to deliver quality products and services.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-5xl pt-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                      <img
                        src="/placeholder.svg"
                        width="140"
                        height="70"
                        alt="Client Logo"
                        className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 PT. PUTRAMAS MULIA JAYA. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function WarehouseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  )
}
