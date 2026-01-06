'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

// 地址信息
const address = {
  street: '120 County Rd.',
  city: 'Tenafly',
  state: 'NJ',
  zip: '07670',
  suite: 'Suite 100-101',
  fullAddress: '120 County Rd., Tenafly, NJ 07670',
  plusCode: 'W2HQ+7C Tenafly, NJ',  // Google Plus Code
  coordinates: { lat: 40.9281, lng: -73.9612 }  // 更精确的坐标
};

// Google Maps 嵌入 URL（俯视图）
// 使用完整地址查询，显示地址信息而不是坐标
// hl=en 参数强制使用英文界面
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address.fullAddress)}&t=m&z=16&ie=UTF8&output=embed&hl=en`;

// Google Maps 链接（在新标签页打开）
// 使用地址查询，更方便用户
// hl=en 参数强制使用英文界面
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.fullAddress)}&hl=en`;

// 导航栏组件
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-bold text-2xl text-gray-800 tracking-tight">DeepBrain Academy</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Programs</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</Link>
          <Link href="/location" className="text-blue-600 hover:text-blue-700 font-medium">Location</Link>
          <a 
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
          >
            Find a Center <MapPin className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

// 地址信息卡片组件
const AddressCard = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <MapPin className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <div className="ml-6 flex-1">
        <div className="space-y-2 text-gray-700">
          <p className="text-lg font-semibold">{address.street}</p>
          <p className="text-lg">{address.suite}</p>
          <p className="text-lg">{address.city}, {address.state} {address.zip}</p>
        </div>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          View on Google Maps
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

// 地图容器组件
const MapContainer = ({ title, embedUrl, type }: { title: string; embedUrl: string; type: 'map' | 'streetview' }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
    <div className="p-6 border-b border-gray-100 bg-gray-50">
      <div className="flex items-center">
        {type === 'map' ? (
          <Navigation className="w-6 h-6 text-blue-600 mr-3" />
        ) : (
          <MapPin className="w-6 h-6 text-blue-600 mr-3" />
        )}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
    </div>
    <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  </div>
);

// 街景视图组件 - 显示卫星地图视图
const StreetViewContainer = ({ title }: { title: string }) => {
  // 卫星地图嵌入URL（更近的视图，可以看到建筑物）
  // 使用完整地址查询，显示地址信息而不是坐标
  // t=k 表示卫星视图
  // hl=en 参数强制使用英文界面
  const satelliteMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent('120 County Rd., Tenafly, NJ 07670')}&t=k&z=19&ie=UTF8&output=embed&hl=en`;
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center">
          <MapPin className="w-6 h-6 text-blue-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
      </div>
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src={satelliteMapUrl}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </div>
    </div>
  );
};

// 页脚组件
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-bold tracking-tight text-white">DeepBrain Academy</span>
          <p className="mt-4 text-gray-400">
            Empowering the next generation of thinkers through Math, Reading, and Strategy Games.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Programs</h3>
          <ul className="mt-4 space-y-4">
            <li><Link href="/" className="text-base text-gray-300 hover:text-white">Math & Reading</Link></li>
            <li><Link href="/" className="text-base text-gray-300 hover:text-white">Chess & Go</Link></li>
            <li><Link href="/" className="text-base text-gray-300 hover:text-white">AMC Competition</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500"/> Find a Center</li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Franchise Opportunities</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center">
        <p className="text-base text-gray-400">&copy; 2025 DeepBrain Academy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// 主页面组件
export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Hero 区域 */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Find Us</h1>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 地址信息卡片 */}
        <div className="mb-8">
          <AddressCard />
        </div>

        {/* 地图区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Google Maps 俯视图 */}
          <MapContainer
            title="Map View"
            embedUrl={mapEmbedUrl}
            type="map"
          />

          {/* Google Street View 街景图 */}
          <StreetViewContainer title="Street View" />
        </div>

        {/* 额外信息 */}
        <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">How to Get Here</h3>
          <div className="space-y-3 text-gray-700">
            <p className="text-base">
              <strong>Address:</strong> {address.fullAddress}
            </p>
            <p className="text-base">
              We are located in downtown Tenafly, with convenient transportation and parking. If you have any questions or need help finding our location, please feel free to contact us.
            </p>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Get Directions
              <Navigation className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

