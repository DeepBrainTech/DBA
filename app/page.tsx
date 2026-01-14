'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calculator, 
  BookOpen, 
  Crown, 
  EyeOff, 
  CircleDot, 
  TrendingUp, 
  Award, 
  ArrowRight,
  MapPin,
  Menu,
  Code,
  X,
  Trophy,
  Star,
  Globe,
  GraduationCap
} from 'lucide-react';

// --- 数据部分: 课程列表 ---
const programs = [
  {
    id: 'math',
    title: 'Mental Math',
    description: 'Build a strong calculation ability and logical thinking mindset essential for academic success.',
    icon: <Calculator className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    disabled: true,
    poster: null
  },
  {
    id: 'reading',
    title: 'Reading Program',
    description: 'Develop high-level reading ability and comprehension skills through diverse literary works.',
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    color: 'bg-green-50',
    disabled: true,
    poster: null
  },
  {
    id: 'chess',
    title: 'Classical Chess',
    description: 'Master the timeless game of strategy. Enhance concentration, foresight, and tactical planning.',
    icon: <Crown className="w-8 h-8 text-purple-600" />,
    color: 'bg-purple-50',
    disabled: false,
    poster: '/chess.png'
  },
  {
    id: 'fog-chess',
    title: 'Fog of War Chess',
    description: 'Advanced strategy training. Navigate uncertainty and incomplete information in this dark chess variant.',
    icon: <EyeOff className="w-8 h-8 text-gray-700" />,
    color: 'bg-gray-100',
    disabled: false,
    poster: '/chess.png'
  },
  {
    id: 'go',
    title: 'Go (Weiqi)',
    description: 'Explore the profound complexity of Go. Develop big-picture thinking and deep strategic intuition.',
    icon: <CircleDot className="w-8 h-8 text-indigo-600" />,
    color: 'bg-indigo-50',
    disabled: false,
    poster: '/go.png'
  },
  {
    id: 'pre-amc',
    title: 'Pre-AMC Math',
    description: 'Bridge the gap between school math and competition math. Perfect for grades 6-8.',
    icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
    color: 'bg-orange-50',
    disabled: false,
    poster: '/pre_amc.png'
  },
  {
    id: 'amc',
    title: 'AMC Program',
    description: 'Elite AMC 8 foundation training. Focus on core problem-solving, logic, and contest readiness.',
    icon: <Award className="w-8 h-8 text-red-600" />,
    color: 'bg-red-50',
    disabled: false,
    poster: '/amc.png'
  },
  {
    id: 'coding',
    title: 'Coding Program',
    description: 'Master programming fundamentals and computational thinking. Build real-world projects and develop problem-solving skills through code.',
    icon: <Code className="w-8 h-8 text-teal-600" />,
    color: 'bg-teal-50',
    disabled: false,
    poster: '/coding.png'
  },
  {
    id: 'Math League',
    title: 'Math League',
    description: 'Math League is a long-established, nationwide U.S. math competition program serving elementary, middle, and high school students.',
    icon: <Trophy className="w-8 h-8 text-yellow-600" />,
    color: 'bg-yellow-50',
    disabled: true,
    poster: null
  },
  {
    id: 'MOEMS',
    title: 'MOEMS',
    description: 'A well-established, nationwide U.S. math competition for elementary and middle school students that promotes logical thinking and problem-solving skills.',
    icon: <Star className="w-8 h-8 text-blue-700" />,
    color: 'bg-blue-100',
    disabled: true,
    poster: null
  },
  {
    id: 'Spanish Program',
    title: 'Spanish Program',
    description: 'Develop listening, speaking, reading, and writing skills through practical communication and cultural exploration, from beginner to real-world use.',
    icon: <Globe className="w-8 h-8 text-pink-600" />,
    color: 'bg-pink-50',
    disabled: true,
    poster: null
  },
  {
    id: 'ESL Program',
    title: 'ESL Program',
    description: 'Designed for non-native English speakers to build strong listening, speaking, reading, and writing skills for academic and everyday communication.',
    icon: <GraduationCap className="w-8 h-8 text-cyan-600" />,
    color: 'bg-cyan-50',
    disabled: false,
    poster: '/ESL.png'
  }
];

// --- 组件: Modal 弹窗 ---
const PosterModal = ({ isOpen, onClose, posterSrc, title }: { 
  isOpen: boolean; 
  onClose: () => void; 
  posterSrc: string | null;
  title: string;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // 重置加载状态当海报变化时
  React.useEffect(() => {
    if (posterSrc) {
      setImageLoaded(false);
    }
  }, [posterSrc]);

  if (!isOpen || !posterSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm overflow-auto"
      onClick={onClose}
    >
      <div 
        className="relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>
        
        {/* 海报图片 */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* 加载指示器 */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 min-w-[300px] min-h-[400px]">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>
          )}
          
          <Image
            src={posterSrc}
            alt={title}
            width={1200}
            height={1600}
            className={`w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            quality={90}
            priority
          />
        </div>
      </div>
    </div>
  );
};

// --- 组件: 导航栏 ---
const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="font-bold text-2xl text-gray-800 tracking-tight">DeepBrain Academy</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
        <a href="#programs" className="text-gray-600 hover:text-blue-600 font-medium">Programs</a>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</Link>
          <Link href="/location" className="text-gray-600 hover:text-blue-600 font-medium">Location</Link>
          <Link 
            href="/location"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
          >
            Find a Center <MapPin className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// --- 组件: Hero 区域 ---
const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
        <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Ignite the power of</span>{' '}
              <span className="block text-blue-600 xl:inline">Deep Thinking</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Beyond standard tutoring. From Classical Strategy games like Chess and Go to Math, from Literacy to Programing, we cultivate the strategic minds of tomorrow through rigorous logic and creative problem-solving.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href= "https://docs.google.com/forms/d/e/1FAIpQLSfAceUQq9JJ3uu-EcWlHkTQ1O1jY_uzh-fptrN7_JC9rf-dqg/viewform?usp=header" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                  Free Trial Class
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#programs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg">
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    {/* Hero Image - 右侧大脑展位图 */}
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/math_child.png"
          alt="Deep Thinking - Math Child"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
    </div>
  </div>
);

// --- 组件: 课程列表区域 ---
const ProgramSection = () => {
  const [selectedPoster, setSelectedPoster] = useState<{src: string; title: string} | null>(null);
  const [hasPreloaded, setHasPreloaded] = useState(false);

  // 预加载所有海报图片
  const preloadAllPosters = () => {
    if (hasPreloaded) return;
    
    programs.forEach(program => {
      if (!program.disabled && program.poster) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = program.poster;
        document.head.appendChild(link);
      }
    });
    
    setHasPreloaded(true);
  };

  const handleLearnMoreClick = (program: typeof programs[0]) => {
    if (program.disabled) {
      // 对于disabled的program，跳转到Google表单
      window.open('https://docs.google.com/forms/d/15cX7NUtR4T_DXA9zk_9e5U-wXu6t-qncOJaKqFsl8o0', '_blank');
    } else if (program.poster) {
      // 对于有poster的program，显示海报
      setSelectedPoster({ src: program.poster, title: program.title });
      // 首次点击时预加载其他海报
      preloadAllPosters();
    }
  };

  return (
    <div id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Curriculum</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Programs for Every Stage
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We combine traditional academic foundations with advanced strategic games to build a complete intellect.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
              onMouseEnter={() => !program.disabled && preloadAllPosters()}
            >
              <div className={`p-6 ${program.color} flex justify-between items-start`}>
                 {program.icon}
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  <p className="mt-3 text-base text-gray-500">
                    {program.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button 
                    onClick={() => handleLearnMoreClick(program)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center group"
                  >
                    Learn more 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal 弹窗 */}
      <PosterModal
        isOpen={!!selectedPoster}
        onClose={() => setSelectedPoster(null)}
        posterSrc={selectedPoster?.src || null}
        title={selectedPoster?.title || ''}
      />
    </div>
  );
};

// --- 组件: 页脚 ---
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
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Math & Reading</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">Chess & Go</a></li>
            <li><a href="#" className="text-base text-gray-300 hover:text-white">AMC Competition</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/location" className="flex items-center text-base text-gray-300 hover:text-white">
                <MapPin className="w-5 h-5 mr-2 text-blue-500"/> Find a Center
              </Link>
            </li>
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

// --- 主页面 ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <ProgramSection />
      
      {/* 简单的 "Why Us" 区域 */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to challenge your mind?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join thousands of students mastering the art of logic and strategy.
          </p>
          <div className="mt-8">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Find a Center Near You
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}