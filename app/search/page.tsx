"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Filter, MapPin, Star, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

const searchResults = [
  {
    id: 1,
    title: "Luxury 2BHK Apartment",
    category: "Homes",
    price: "₹25,000",
    period: "month",
    location: "Banjara Hills, Hyderabad",
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["2 BHK", "Furnished", "Parking"],
  },
  {
    id: 2,
    title: "Honda City 2022",
    category: "Cars",
    price: "₹2,500",
    period: "day",
    location: "Gachibowli, Hyderabad",
    rating: 4.9,
    reviews: 18,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["Automatic", "Petrol", "AC"],
  },
  {
    id: 3,
    title: "Modern Sofa Set",
    category: "Furniture",
    price: "₹800",
    period: "week",
    location: "Madhapur, Hyderabad",
    rating: 4.7,
    reviews: 12,
    image: "/placeholder.svg?height=200&width=300",
    verified: false,
    features: ["3-Seater", "Fabric", "Modern"],
  },
  {
    id: 4,
    title: "MacBook Pro M2",
    category: "Electronics",
    price: "₹3,000",
    period: "week",
    location: "Jubilee Hills, Hyderabad",
    rating: 4.9,
    reviews: 31,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["M2 Chip", "16GB RAM", "512GB SSD"],
  },
  {
    id: 5,
    title: "Royal Enfield Classic",
    category: "Bikes",
    price: "₹1,200",
    period: "day",
    location: "Film Nagar, Hyderabad",
    rating: 4.6,
    reviews: 15,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["350cc", "Classic", "Well Maintained"],
  },
  {
    id: 6,
    title: "Grand Function Hall",
    category: "Events",
    price: "₹50,000",
    period: "day",
    location: "Ameerpet, Hyderabad",
    rating: 4.8,
    reviews: 8,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["500 Capacity", "AC", "Catering"],
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-primary">RentPe</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/categories/all" className="text-gray-600 hover:text-primary">
                Browse
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-primary">
                Dashboard
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-primary">
                Help
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Rentals</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="What are you looking to rent?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg h-12"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="homes">Homes</SelectItem>
                <SelectItem value="cars">Cars</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="bikes">Bikes</SelectItem>
                <SelectItem value="events">Events</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg" className="h-12 px-8">
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <div className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h3>

                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <Label className="text-sm font-medium">Price Range</Label>
                    <div className="mt-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100000}
                        step={1000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <Label className="text-sm font-medium">Location</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="banjara-hills">Banjara Hills</SelectItem>
                        <SelectItem value="gachibowli">Gachibowli</SelectItem>
                        <SelectItem value="jubilee-hills">Jubilee Hills</SelectItem>
                        <SelectItem value="madhapur">Madhapur</SelectItem>
                        <SelectItem value="ameerpet">Ameerpet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rental Duration */}
                  <div>
                    <Label className="text-sm font-medium">Rental Duration</Label>
                    <div className="mt-2 space-y-2">
                      {["Daily", "Weekly", "Monthly", "Yearly"].map((duration) => (
                        <div key={duration} className="flex items-center space-x-2">
                          <input type="checkbox" id={duration} className="rounded" />
                          <Label htmlFor={duration} className="text-sm">
                            {duration}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Only */}
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="verified" className="rounded" />
                    <Label htmlFor="verified" className="text-sm">
                      Verified listings only
                    </Label>
                  </div>

                  {/* Rating */}
                  <div>
                    <Label className="text-sm font-medium">Minimum Rating</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Any rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                        <SelectItem value="4.0">4.0+ stars</SelectItem>
                        <SelectItem value="3.5">3.5+ stars</SelectItem>
                        <SelectItem value="3.0">3.0+ stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Search Results */}
          <div className="flex-1">
            {/* Sort and View Options */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Search Results</h2>
                <p className="text-gray-600">{searchResults.length} items found</p>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.verified && (
                          <Badge className="absolute top-3 right-3 bg-green-500">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        <Button variant="ghost" size="sm" className="absolute top-3 left-3 bg-white/80 hover:bg-white">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{product.category}</Badge>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {product.location}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features.slice(0, 3).map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-lg font-bold text-primary">{product.price}</span>
                            <span className="text-gray-600">/{product.period}</span>
                          </div>
                          <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
