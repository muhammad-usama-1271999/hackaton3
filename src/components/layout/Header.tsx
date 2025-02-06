"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { client } from "@/sanity/lib/client";

// Define types
interface HeaderProps {
  text: string;
  title: string;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

interface WishlistItem {
  id: string;
  name: string;
}

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  available: boolean;
  tags: string[];
}

const Header: React.FC<HeaderProps> = ({  }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);

    const wishlistItems: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(wishlistItems);

    // Fetch products from Sanity
    const fetchProducts = async () => {
      const data: Product[] = await client.fetch(
        `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          image,
          description,
          available,
          tags
        }`
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(updatedCart);

      const updatedWishlist: WishlistItem[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlist(updatedWishlist);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500 lg:block hidden">FoodTuck</h1>
          <nav className="lg:block hidden">
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ourmenu">Menu</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/ourchef">Chef</Link></li>
              <li><Link href="/aboutus">About</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <Link href="/user"><PiUserBold className="text-white text-[24px] cursor-pointer" /></Link>

              {/* Shopping Cart Icon with Count */}
              <Link href="/shoppingcart">
                <div className="relative">
                  <HiOutlineShoppingBag className="text-white text-[24px] cursor-pointer" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#ff9f0d] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </div>
              </Link>

              {/* Wishlist Icon with Count */}
              <Link href="/wishlist">
                <div className="relative">
                  <FaRegHeart className="text-white text-[24px] cursor-pointer" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#ff9f0d] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </div>
              </Link>
              
              {/* Search Bar */}
              <div className="flex gap-4">
                <div>
                  <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-[#ff9f0d] rounded-2xl">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent outline-none text-white text-[14px] placeholder:text-white w-full"
                    />
                    <IoSearch className="text-white w-[20px] h-[20px]" />
                  </div>
                  {searchQuery && filteredProducts.length > 0 && (
                    <div className="absolute bg-white w-[240px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                      <ul>
                        {filteredProducts.map((product) => (
                          <li key={product._id} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                            <Link href={`/shop/${product._id}`}>{product.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu className="text-white text-[15px] cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-black">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/ourmenu">Menu</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/ourchef">Chef</Link></li>
                  <li><Link href="/aboutus">About</Link></li>
                  <li><Link href="/shop">Shop</Link></li>
                  <li><Link href="/user">Profile</Link></li>
                </ul>
                <div className="flex gap-7">
                  <Link href="/shoppingcart">
                    <div className="relative">
                      <HiOutlineShoppingBag className="text-[#ff9f0d] text-[24px] cursor-pointer" />
                      {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#ff9f0d] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {cart.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                      )}
                    </div>
                  </Link>
                  <Link href="/wishlist">
                    <div className="relative">
                      <FaRegHeart className="text-[#ff9f0d] text-[24px] cursor-pointer" />
                      {wishlist.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#ff9f0d] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {wishlist.length}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
