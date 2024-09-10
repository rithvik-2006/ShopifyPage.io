import React from 'react'
import { ShoppingCart, Search, User, Heart, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductPage from './(components)/BuyPage';

export default function LandingPage() {
  const Shoe = {
    1: "Shoe_2.jpg",
    2: "Shoe_3.jpg",
    3: "Shoe_4.jpg",
    4: "Shoe_5.jpg",
  };

  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold"><div><img className='w-12 rounded-full' src="./Logo_1.jpeg"/></div></div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Shop</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
          <User className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-black">
        <img 
          src="/Shoe_1.jpg" 
          alt="Stylish model wearing latest fashion" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">New Arrivals</h1>
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-playfair font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.values(Shoe).map((product, index) => (
  <div key={index} className="group relative">
    <img 
      src={`/${product}`} 
      alt={`Product ${index + 1}`} 
      className="w-full h-[400px] object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center">
      <Button className="mb-4 bg-white text-black hover:bg-gray-200 transition-colors">
        Add to Cart
      </Button>
      <Button variant="outline" className="text-black border-white hover:bg-gray-200 hover:text-black transition-colors">
        <Heart className="w-4 h-4 mr-2" />
        Add to Wishlist
      </Button>
    </div>
    
  </div>
))}
        </div>
      </section>
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Current Promotions</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((promo) => (
                <CarouselItem key={promo}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <h3 className="text-xl font-semibold mb-2">Summer Sale!</h3>
                      <p className="text-4xl font-bold text-primary mb-4">30% OFF</p>
                      <p className="text-center text-muted-foreground mb-4">Use code: SUMMER30</p>
                      <Button variant="outline">Shop Now</Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 bg-trasparent text-gray-100">
  <h2 className="text-3xl font-bold mb-8 text-gray-100">What Our Customers Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((testimonial) => (
      <Card key={testimonial} className="p-6 bg-transparent text-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img 
            src={`/placeholder.svg?height=50&width=50&text=User+${testimonial}`} 
            alt={`Customer ${testimonial}`} 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-100">Happy Customer {testimonial}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-400">
          "These shoes are amazing! Comfortable, stylish, and durable. I couldn't be happier with my purchase."
        </p>
      </Card>
    ))}
  </div>
</section>

    </div>

  )
}
