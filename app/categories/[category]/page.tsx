"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Grid, List, MapPin, Star, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

const products = [
  {
    id: 1,
    title: "Luxury 2BHK Apartment in Banjara Hills",
    category: "Homes",
    price: "₹25,000",
    period: "month",
    location: "Banjara Hills, Hyderabad",
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["2 BHK", "Furnished", "Parking", "Gym"],
  },
  {
    id: 2,
    title: "Modern Studio Apartment",
    category: "Homes",
    price: "₹15,000",
    period: "month",
    location: "Gachibowli, Hyderabad",
    rating: 4.6,
    reviews: 18,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["Studio", "Furnished", "WiFi", "AC"],
  },
  {
    id: 3,
    title: "Spacious 3BHK Villa",
    category: "Homes",
    price: "₹45,000",
    period: "month",
    location: "Jubilee Hills, Hyderabad",
    rating: 4.9,
    reviews: 31,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["3 BHK", "Villa", "Garden", "Pool"],
  },
  {
    id: 4,
    title: "Cozy 1BHK Near IT Hub",
    category: "Homes",
    price: "₹12,000",
    period: "month",
    location: "Madhapur, Hyderabad",
    rating: 4.4,
    reviews: 12,
    image: "/placeholder.svg?height=200&width=300",
    verified: false,
    features: ["1 BHK", "Semi-Furnished", "Metro"],
  },
  {
    id: 5,
    title: "Premium Penthouse",
    category: "Homes",
    price: "₹80,000",
    period: "month",
    location: "Film Nagar, Hyderabad",
    rating: 4.9,
    reviews: 8,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["Penthouse", "Luxury", "Terrace", "City View"],
  },
  {
    id: 6,
    title: "Budget Friendly PG",
    category: "Homes",
    price: "₹8,000",
    period: "month",
    location: "Ameerpet, Hyderabad",
    rating: 4.2,
    reviews: 45,
    image: "/placeholder.svg?height=200&width=300",
    verified: true,
    features: ["PG", "Meals", "WiFi", "Laundry"],
  },
]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [sortBy, setSortBy] = useState("relevance")

  const categoryName =
    params.category === "homes"
      ? "Homes & Apartments"
      : params.category === "cars"
        ? "Cars & Vehicles"
        : params.category === "furniture"
          ? "Furniture"
          : params.category === "electronics"
            ? "Electronics"
            : params.category === "bikes"
              ? "Bikes & Scooters"
              : params.category === "events"
                ? "Function Halls"
                : "All Categories"

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
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">{categoryName}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h3>

                {/* Price Range */}
                <div className="space-y-4">
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

                  {/* Property Type */}
                  <div>
                    <Label className="text-sm font-medium">Property Type</Label>
                    <div className="mt-2 space-y-2">
                      {["1 BHK", "2 BHK", "3 BHK", "Studio", "Villa", "PG"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <input type="checkbox" id={type} className="rounded" />
                          <Label htmlFor={type} className="text-sm">
                            {type}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <Label className="text-sm font-medium">Amenities</Label>
                    <div className="mt-2 space-y-2">
                      {["Furnished", "Parking", "Gym", "Pool", "WiFi", "AC"].map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <input type="checkbox" id={amenity} className="rounded" />
                          <Label htmlFor={amenity} className="text-sm">
                            {amenity}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input placeholder={`Search in ${categoryName.toLowerCase()}...`} />
              </div>
              <div className="flex items-center space-x-2">
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
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{categoryName}</h1>
              <p className="text-gray-600">{products.length} results found</p>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      {viewMode === "grid" ? (
                        <>
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
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-3 left-3 bg-white/80 hover:bg-white"
                            >
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
                        </>
                      ) : (
                        <div className="flex p-4">
                          <div className="relative w-48 h-32 mr-4 flex-shrink-0">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.title}
                              width={200}
                              height={130}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            {product.verified && (
                              <Badge className="absolute top-2 right-2 bg-green-500 text-xs">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary">{product.category}</Badge>
                              <Button variant="ghost" size="sm">
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">{product.title}</h3>
                            <div className="flex items-center text-gray-600 text-sm mb-2">
                              <MapPin className="w-4 h-4 mr-1" />
                              {product.location}
                            </div>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {product.features.map((feature) => (
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
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600 ml-1">
                                  {product.rating} ({product.reviews})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
