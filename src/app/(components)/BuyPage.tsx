import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart } from 'lucide-react'

export default function ProductPage() {

    const Shoe = {
      1: "Shoe_2.jpg",
      2: "Shoe_3.jpg",
      3: "Shoe_4.jpg",
      4: "Shoe_5.jpg",
    }

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-900 text-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <img 
            src="/placeholder.svg?height=600&width=600&text=Product+Image" 
            alt="Main product image" 
            className="w-full h-auto rounded-lg mb-4 bg-gray-800"
          />
          <div className="grid grid-cols-4 gap-4">
            {Object.values(Shoe).map((product, index) => (
              <img 
                key={index}
                src={`/${product}`} 
                alt={`Product ${index + 1}`} 
                className="w-full h-[400px] object-cover rounded-lg bg-gray-800"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Stylish Comfort Shoe</h1>
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-400">(128 reviews)</span>
          </div>
          <p className="text-2xl font-bold mb-4 text-gray-100">$129.99</p>
          <p className="text-gray-400 mb-6">
            Step into style and comfort with our latest shoe design. Perfect for all-day wear, 
            these shoes combine modern aesthetics with ergonomic support.
          </p>
          <div className="flex items-center mb-6">
            <span className="mr-2 font-semibold text-gray-100">Size:</span>
            {[7, 8, 9, 10, 11].map((size) => (
              <Button key={size} variant="outline" className="mr-2 border-gray-700 text-gray-100 hover:bg-gray-700">
                {size}
              </Button>
            ))}
          </div>
          <div className="flex items-center mb-6">
            <span className="mr-2 font-semibold text-gray-100">Color:</span>
            {['bg-black', 'bg-white', 'bg-red-500', 'bg-blue-500'].map((color) => (
              <div 
                key={color} 
                className={`w-8 h-8 rounded-full ${color} mr-2 cursor-pointer border-2 border-gray-700`} 
              />
            ))}
          </div>
          <div className="flex items-center mb-6">
            <Button size="lg" className="mr-4 bg-gray-800 text-gray-100 hover:bg-gray-700">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-100 hover:bg-gray-700">
              <Heart className="w-5 h-5 mr-2" />
              Add to Wishlist
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            In stock - Usually ships within 24 hours
          </p>
        </div>
      </div>

      {/* Product Tabs */}
      <Tabs defaultValue="description" className="mt-12 text-gray-100">
        <TabsList className="bg-gray-800 text-gray-100 border-gray-700">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4 bg-gray-800 p-4 rounded-lg text-gray-200">
          <p>
            Our Stylish Comfort Shoe is designed with both fashion and function in mind. 
            The breathable upper material ensures all-day comfort, while the cushioned 
            insole provides excellent support for your feet. Whether you're heading to 
            the office or out for a casual day, these shoes will keep you looking great 
            and feeling comfortable.
          </p>
        </TabsContent>
        <TabsContent value="specifications" className="mt-4 bg-gray-800 p-4 rounded-lg text-gray-200">
          <ul className="list-disc pl-5">
            <li>Upper material: Premium synthetic leather</li>
            <li>Sole: Durable rubber outsole</li>
            <li>Insole: Memory foam for added comfort</li>
            <li>Closure: Lace-up</li>
            <li>Available sizes: 7-13 (US)</li>
            <li>Available colors: Black, White, Red, Blue</li>
          </ul>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4 bg-gray-800 p-4 rounded-lg text-gray-200">
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <Card key={review} className="bg-gray-900 text-gray-100 border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">John Doe</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400">
                    These shoes are fantastic! They're comfortable right out of the box and look great with both casual and semi-formal outfits.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product} className="bg-gray-900 text-gray-100 border-gray-800">
              <img 
                src={`/placeholder.svg?height=200&width=200&text=Related+${product}`} 
                alt={`Related product ${product}`} 
                className="w-full h-48 object-cover bg-gray-800"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Related Shoe {product}</h3>
                <p className="text-gray-400 mb-2">$89.99</p>
                <Button variant="outline" className="w-full border-gray-700 text-gray-100 hover:bg-gray-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
