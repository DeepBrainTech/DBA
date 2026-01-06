'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  BookOpen,
  GraduationCap,
  Heart,
  TrendingUp,
  Brain,
  Star,
  CheckCircle,
  University,
  Trophy,
  CircleDot
} from 'lucide-react';

// 导航栏组�?
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
          <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">About Us</Link>
          <Link href="/location" className="text-gray-600 hover:text-blue-600 font-medium">Location</Link>
          <Link 
            href="/location"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition flex items-center"
          >
            Find a Center <MapPin className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

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

// 统计数据组件
const StatsSection = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '1000+', label: 'Students Enrolled' },
    { icon: <Award className="w-8 h-8 text-green-600" />, value: '95%', label: 'Success Rate' },
    { icon: <GraduationCap className="w-8 h-8 text-purple-600" />, value: '50+', label: 'Expert Instructors' },
    { icon: <BookOpen className="w-8 h-8 text-orange-600" />, value: '8', label: 'Programs Offered' }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 使命和愿景组�?
const MissionVision = () => {
  const items = [
    {
      icon: <Target className="w-10 h-10 text-blue-600" />,
      title: 'Our Mission',
      description: 'To cultivate deep thinking and strategic minds through rigorous logic training, creative problem-solving, and comprehensive academic excellence. We empower students to excel not just in exams, but in life.',
      color: 'bg-blue-50'
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-yellow-600" />,
      title: 'Our Vision',
      description: 'To become the leading academy that bridges traditional education with strategic thinking games, creating a new generation of analytical, creative, and resilient problem-solvers ready for tomorrow\'s challenges.',
      color: 'bg-yellow-50'
    },
    {
      icon: <Heart className="w-10 h-10 text-red-600" />,
      title: 'Our Values',
      description: 'Excellence, Integrity, Innovation, and Individual Growth. We believe every student has unique potential, and our personalized approach ensures each learner reaches their highest capabilities.',
      color: 'bg-red-50'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Foundation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className={`${item.color} rounded-xl p-8 border border-gray-100`}>
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 创始人故事组�?
const FounderStory = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Founder's Story</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            From Setbacks to the World's Top Universities
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-8">
            <p className="text-lg text-gray-800 leading-relaxed italic">
              Dr. Chen's story is not the story of a "perfect student." It is the story of a child who fell behind early, learned differently, and ultimately discovered how deep thinking changes a life.
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Early Challenges</h3>
              <p className="mb-3">As a student, Dr. Chen did not follow the traditional elite-track path:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Did not get into a key middle school and experienced early academic disappointment</li>
                <li>During high school, due to illness, spent most of his time studying at home through self-directed learning</li>
              </ul>
              <p className="mt-4 text-lg font-semibold text-blue-600">
                What could have been a limitation became the foundation of a lifelong insight: True academic excellence is not determined by school labels, but by how the brain learns, adapts, and thinks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                A Journey Defined by Independent Thinking
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">High School Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Gained admission to Shanghai Jiao Tong University</li>
                    <li>Won First Prize (3rd place overall) in the National High School Mathematics Competition (Fujian Division)</li>
                    <li>Selected for the Provincial Math Training Team and the National Winter Math Camp</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">At Shanghai Jiao Tong University:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ranked #1 among over 3,000 students</li>
                    <li>Received the Outstanding Student Award</li>
                    <li>Published a first-author SCI paper as an undergraduate</li>
                    <li>Became the first PhD holder in his extended family</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">International Excellence:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>GRE Analytical Writing: 6.0/6.0 (Perfect Score, 99%+)</li>
                    <li>GRE Verbal: 770/800 (99%)</li>
                    <li>Admitted to Princeton University for his PhD</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">At Princeton University:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Earned straight A's</li>
                    <li>Received multiple prestigious honors including Daniel & Florence Guggenheim Fellowship, Cummins Fellowship, Sayre Prize, and Best Poster Presentation Award (1st Place)</li>
                    <li>Became the first Chinese scholar selected for the Branco Weiss Fellowship, one of the world's most selective science fellowships</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <University className="w-6 h-6 text-indigo-600 mr-2" />
                Educating the Next Generation
              </h3>
              <p className="mb-3">Dr. Chen has always believed that education is about people, not resumes.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Many of his former PhD and postdoctoral trainees are now professors at leading universities worldwide</li>
                <li>Others have gone on to study at Princeton, Harvard, Yale, MIT, University of Pennsylvania, Dartmouth, and Duke</li>
                <li>Has served for years as a Princeton University undergraduate admissions interviewer, giving him rare insight into what top universities truly look for beyond test scores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 核心哲学组件
const CorePhilosophy = () => {
  const philosophies = [
    {
      title: 'Non-linear Growth is Normal',
      description: "Late bloomers often become deep thinkers. Every student's journey is unique.",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Whole-Brain Development',
      description: 'Logic, creativity, memory, spatial reasoning, and metacognition must work together.',
      icon: <Brain className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Thinking Skills Come First',
      description: 'Strong thinking makes every subject easier—forever. We teach how to think, not just what to memorize.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why DeepBrain Academy</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Philosophy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            DeepBrain Academy was born from Dr. Chen's personal journey—from early setbacks to world-class achievement. It is not a test-prep factory. It is a place where students learn how to think.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {philosophy.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{philosophy.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{philosophy.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white rounded-xl p-6 inline-block">
            <p className="text-lg font-semibold">Based on this philosophy, Dr. Chen created the original</p>
            <p className="text-2xl font-bold mt-2">"DeepBrain Thinking Training Method"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 创新工具组件
const InnovativeTools = () => {
  const tools = [
    {
      title: 'Fog-of-War Chess',
      achievements: [
        'Dr. Chen is ranked Top 20 worldwide on Chess.com',
        'Placed 4th in Round 2 of the 2025 World Championship'
      ],
      benefits: 'Trains reasoning under uncertainty, memory, and strategic decision-making',
      icon: <Target className="w-8 h-8 text-gray-700" />,
      color: 'bg-gray-50'
    },
    {
      title: 'Go (Weiqi)',
      achievements: [
        'Reached 6-dan level'
      ],
      benefits: 'Trains long-term planning and pattern recognition',
      icon: <CircleDot className="w-8 h-8 text-indigo-600" />,
      color: 'bg-indigo-50'
    },
    {
      title: 'Quantum Go',
      achievements: [
        'Invented by Dr. Chen'
      ],
      benefits: 'A groundbreaking cognitive training tool designed for cognitive enhancement, Alzheimer\'s and dementia prevention research, and advanced executive-function training',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      color: 'bg-purple-50'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Innovation</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovative Thinking Tools Students Love
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className={`${tool.color} rounded-xl p-6 border border-gray-100`}>
              <div className="mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{tool.title}</h3>
              <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-700">
                {tool.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <p className="text-base text-gray-700">{tool.benefits}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 成果展示组件
const Results = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-200 font-semibold tracking-wide uppercase">Results</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Real Results That Matter to Parents
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <p className="text-xl mb-6">Students trained through DeepBrain Academy have:</p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Gained admission to Harvard, Yale, and other top universities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Demonstrated stronger independent thinking, creativity, and originality</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Shown increased confidence in unfamiliar problems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span>Developed long-term learning motivation</span>
              </li>
            </ul>
            <p className="mt-8 text-2xl font-bold text-center">
              Most importantly, they learned how to learn—a skill that lasts a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 给家长的信息组件
const MessageToParents = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              A Message to Parents
            </h2>
          </div>
          <div className="space-y-4 text-lg text-gray-800">
            <p className="font-semibold">If your child:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Did not start at the "top"</li>
              <li>Learns differently</li>
              <li>Thinks deeply but doesn't always test well</li>
              <li>Has potential that hasn't fully surfaced yet</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-blue-600">
              DeepBrain Academy was built for them.
            </p>
            <p className="text-xl font-semibold text-gray-900 mt-4">
              Not being at the starting line does not prevent a child from reaching the world stage. What matters is teaching the brain how to grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 主页面组�?
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero 区域 */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              About DeepBrain Academy
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering the next generation through deep thinking, strategic games, and academic excellence.
            </p>
          </div>
        </div>
      </div>

      {/* 关于我们介绍 */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                The Vision Behind DeepBrain Academy
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  DeepBrain Academy is more than a tutoring center. We are a comprehensive learning institution that combines traditional academic foundations with advanced strategic thinking games to build complete intellects.
                </p>
                <p>
                  From Classical Strategy games like Chess and Go to rigorous Math programs, from Literacy development to Programming, we cultivate the strategic minds of tomorrow through rigorous logic and creative problem-solving.
                </p>
                <p>
                  Our unique approach recognizes that true learning goes beyond memorization. We teach students how to think, analyze, strategize, and solve complex problems—skills that will serve them throughout their academic journey and beyond.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/math_child.png"
                alt="DeepBrain Academy Students"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 统计数据 */}
      <StatsSection />

      {/* 创始人故�?*/}
      <FounderStory />

      {/* 核心哲学 */}
      <CorePhilosophy />

      {/* 创新工具 */}
      <InnovativeTools />

      {/* 成果展示 */}
      <Results />

      {/* 给家长的信息 */}
      <MessageToParents />

      {/* CTA 区域 */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-4 text-xl text-blue-100 mb-8">
            Join our community of learners and discover the power of deep thinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/location"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Find a Center Near You
            </Link>
            <Link 
              href="/"
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-800 transition shadow-lg"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

