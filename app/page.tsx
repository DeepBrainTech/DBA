'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  const scrollToContent = () => {
    const trustBadgesSection = document.getElementById('trust-badges');
    if (trustBadgesSection) {
      trustBadgesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="flex items-center justify-between h-[133px]">
            {/* Logo */}
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-gradient-to-b from-[#A8D5FF] to-[#6BB6FF] rounded-[20px] flex items-center justify-center">
                <span className="text-[40px]">🐧</span>
              </div>
              <span className="text-[40px] font-bold text-black leading-[79.7px]">DeepBrain Academy</span>
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-[53px]">
              <a href="#" className="text-[26.5px] text-[#2C3E50] hover:text-blue-600 transition">首页</a>
              <a href="#" className="text-[26.5px] text-[#2C3E50] hover:text-blue-600 transition">课程介绍</a>
              <a href="#" className="text-[26.5px] text-[#2C3E50] hover:text-blue-600 transition">留学服务</a>
              <a href="#" className="text-[26.5px] text-[#2C3E50] hover:text-blue-600 transition">成功案例</a>
              <a href="#" className="text-[26.5px] text-[#2C3E50] hover:text-blue-600 transition">关于我们</a>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-5">
              <button className="px-[30px] h-[75.67px] text-[26.5px] text-[#6BB6FF] rounded-[33px] hover:bg-gray-50 transition">
                登录
              </button>
              <button className="px-[30px] h-[75px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] text-white text-[26.5px] rounded-[33px] hover:shadow-lg transition">
                免费试听
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen pt-[133px] bg-gradient-to-b from-[#E8F4FC] to-[#FBF9F4] overflow-hidden flex flex-col">
        {/* Background Decorations */}
        <div className="absolute top-[133px] right-[67px] w-[133px] h-[133px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
        <div className="absolute bottom-[100px] left-[66px] w-[212px] h-[212px] bg-[#C4B5FD] rounded-full opacity-20 blur-[133px]"></div>

        <div className="max-w-[1920px] mx-auto px-14 py-[80px] flex-1 flex items-center">
          <div className="grid grid-cols-2 gap-[133px] w-full">
            {/* Left Content */}
            <div>
              <h1 className="text-[66.4px] font-bold text-[#2C3E50] leading-[1.2] mb-[27px]">
                启迪智慧 • 成就未来
              </h1>
              <h2 className="text-[53px] font-bold text-[#2C3E50] leading-[1.3] mb-[27px]">
                奥数 • 象棋 • 留学规划
              </h2>
              <div className="flex items-center gap-[13px] mb-[27px]">
                <span className="text-[26.5px] text-[#7EC97E]">趣味学习.</span>
                <span className="text-[26.5px] text-[#F4A460]">专业指导.</span>
                <span className="text-[26.5px] text-[#9B8FD8]">全面成长.</span>
              </div>
              <p className="text-[26.5px] text-[#7C8B99] leading-[1.6] mb-[40px] max-w-[743px]">
                结合国际教育理念与传统智力游戏，为6-15岁儿童提供奥数思维训练、中国象棋启蒙，以及专业的海外留学规划服务。让孩子在快乐中学习，在挑战中成长。
              </p>
              
              {/* Buttons */}
              <div className="flex gap-[27px] mb-[40px]">
                <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95.6px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] text-white text-[26.5px] rounded-[40px] hover:shadow-xl transition">
                  立即开始免费试听
                  <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="flex items-center justify-center gap-[13px] px-[53px] h-[95.6px] bg-white text-[#6BB6FF] text-[26.5px] rounded-[40px] hover:shadow-lg transition">
                  <svg className="w-[33px] h-[33px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.77} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  观看介绍视频
                </button>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-[27px]">
                <div className="px-[27px] h-[60px] bg-white rounded-[27px] flex items-center justify-center text-[23px] text-[#7C8B99] shadow-sm">
                  小班教学
                </div>
                <div className="px-[27px] h-[60px] bg-white rounded-[27px] flex items-center justify-center text-[23px] text-[#7C8B99] shadow-sm">
                  双师课堂
                </div>
                <div className="px-[27px] h-[60px] bg-white rounded-[27px] flex items-center justify-center text-[23px] text-[#7C8B99] shadow-sm">
                  个性化辅导
                </div>
                <div className="px-[27px] h-[60px] bg-white rounded-[27px] flex items-center justify-center text-[23px] text-[#7C8B99] shadow-sm">
                  阶梯式进阶
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-[867px] h-[587px] bg-white rounded-[40px] shadow-[0px_13px_17px_-10px_rgba(0,0,0,0.1),0px_33px_41px_-8px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-[13px] rounded-[33px] overflow-hidden">
                  <Image
                    src="/Image (儿童学习场景).svg"
                    alt="儿童学习场景"
                    fill
                    priority
                    quality={75}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating Tags */}
              <div className="absolute bottom-[89px] left-[217px] flex gap-[20px]">
                <div className="px-[50px] h-[129px] bg-[#F5FFF5] border-t-[4px] border-[#7EC97E] rounded-[33px] shadow-[0px_7px_10px_-7px_rgba(0,0,0,0.1),0px_17px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center text-[26.5px] text-[#144514]">
                  奥数
                </div>
                <div className="px-[50px] h-[129px] bg-[#FFF9F4] border-t-[4px] border-[#F4A460] rounded-[33px] shadow-[0px_7px_10px_-7px_rgba(0,0,0,0.1),0px_17px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center text-[26.5px] text-[#643A16]">
                  象棋
                </div>
                <div className="px-[50px] h-[129px] bg-[#EEEBFF] border-t-[4px] border-[#9B8FD8] rounded-[33px] shadow-[0px_7px_10px_-7px_rgba(0,0,0,0.1),0px_17px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center text-[26.5px] text-[#170E45]">
                  留学
                </div>
              </div>

              {/* Star Emoji */}
              <div className="absolute top-[-37px] right-[55px] text-[60px]">⭐</div>
              <div className="absolute bottom-[293px] left-[-40px] text-[50px] opacity-[0.86]">✨</div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <button 
            onClick={scrollToContent}
            className="w-[60px] h-[60px] bg-[#6BB6FF] hover:bg-[#4A9FEF] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="向下滚动"
          >
            <svg className="w-[30px] h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust-badges" className="py-[106px] bg-white scroll-mt-[133px]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="grid grid-cols-4 gap-[53px]">
            {[
              { 
                icon: '👥', 
                number: '10,000+', 
                label: '在读学员', 
                bgColor: 'bg-[rgba(126,201,126,0.13)]',
                numberColor: 'text-[#7EC97E]'
              },
              { 
                icon: '😊', 
                number: '98%', 
                label: '家长满意度', 
                bgColor: 'bg-[rgba(244,164,96,0.13)]',
                numberColor: 'text-[#F4A460]'
              },
              { 
                icon: '🏆', 
                number: '200+', 
                label: '获奖学员', 
                bgColor: 'bg-[rgba(155,143,216,0.13)]',
                numberColor: 'text-[#9B8FD8]'
              },
              { 
                icon: '📚', 
                number: '15年', 
                label: '教学经验', 
                bgColor: 'bg-[rgba(107,182,255,0.13)]',
                numberColor: 'text-[#6BB6FF]'
              }
            ].map((item, idx) => (
              <div key={idx} className={`${item.bgColor} rounded-[33px] p-[40px] flex flex-col items-center hover:scale-105 transition`}>
                <div className={`w-[106px] h-[106px] ${item.bgColor} rounded-[27px] flex items-center justify-center text-[53px] mb-[27px]`}>
                  {item.icon}
                </div>
                <div className={`text-[40px] font-semibold ${item.numberColor} mb-[13px]`}>
                  {item.number}
                </div>
                <div className="text-[26.5px] text-[#7C8B99]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-[106px] bg-[#FBF9F4]">
        <div className="max-w-[1920px] mx-auto px-14">
          {/* Header */}
          <div className="mb-[106px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] shadow-sm mb-[27px]">
              <span className="text-[40px]">🎯</span>
              <span className="text-[26.5px] text-[#6BB6FF]">核心课程</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              三大学习模块 · 全面发展
            </h2>
            <p className="text-[26.5px] text-[#7C8B99] max-w-[1115px]">
              专注儿童智力开发与国际教育，为孩子的未来奠定坚实基础
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-3 gap-[40px] mb-[67px]">
            {[
              {
                number: '1',
                emoji: '📊',
                title: '奥数思维训练',
                subtitle: '培养逻辑思维 · 激发数学兴趣',
                desc: '采用趣味化教学方式，从基础到竞赛，循序渐进培养孩子的数学思维能力和问题解决能力。',
                features: ['阶梯式课程体系', '思维导图训练', '竞赛真题解析', '1对1答疑辅导'],
                gradient: 'from-[rgba(126,201,126,0.1)] to-[rgba(107,184,107,0.1)]',
                accentColor: '#7EC97E',
                buttonColor: 'text-[#7EC97E]'
              },
              {
                number: '2',
                emoji: '♟️',
                title: '中国象棋课程',
                subtitle: '传承智慧 · 锻炼全局观',
                desc: '从零基础入门到提高段位，专业教练团队指导，让孩子在对弈中学习策略思维和抗挫折能力。',
                features: ['启蒙到段位课程', '实战对弈训练', '大师棋谱讲解', '线上线下比赛'],
                gradient: 'from-[rgba(244,164,96,0.1)] to-[rgba(232,148,81,0.1)]',
                accentColor: '#F4A460',
                buttonColor: 'text-[#F4A460]'
              },
              {
                number: '3',
                emoji: '✈️',
                title: '留学规划服务',
                subtitle: '提前规划 · 成就国际视野',
                desc: '为有留学意向的家庭提供一站式规划服务，从学术准备、语言培训到申请指导全方位支持。',
                features: ['个性化规划方案', '名校申请指导', '语言能力提升', '背景提升活动'],
                gradient: 'from-[rgba(155,143,216,0.1)] to-[rgba(138,126,199,0.1)]',
                accentColor: '#9B8FD8',
                buttonColor: 'text-[#9B8FD8]'
              }
            ].map((module, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br ${module.gradient} rounded-[40px] p-[53px] hover:shadow-xl transition`}>
                <div className="relative mb-[40px]">
                  <div className="absolute -top-[40px] -left-[40px] w-[212px] h-[212px] rounded-full opacity-10 blur-[80px]" style={{ backgroundColor: module.accentColor }}></div>
                  <div className="relative w-[66px] h-[66px] bg-white bg-opacity-40 rounded-[20px] flex items-center justify-center text-[33px] font-bold mb-[27px]" style={{ color: module.accentColor }}>
                    {module.number}
                  </div>
                  <div className="w-[106px] h-[106px] rounded-[27px] flex items-center justify-center text-[53px]" style={{ backgroundColor: `${module.accentColor}33` }}>
                    {module.emoji}
                  </div>
                </div>
                
                <h3 className="text-[40px] font-semibold text-[#2C3E50] mb-[13px]">
                  {module.title}
                </h3>
                <p className="text-[26.5px] mb-[27px]" style={{ color: module.accentColor }}>
                  {module.subtitle}
                </p>
                <p className="text-[26.5px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                  {module.desc}
                </p>
                
                <ul className="space-y-[13px] mb-[40px]">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-[13px]">
                      <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: module.accentColor }}></div>
                      <span className="text-[23px] text-[#2C3E50]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full h-[82px] bg-white rounded-[27px] font-medium ${module.buttonColor} hover:shadow-md transition flex items-center justify-center gap-[13px] text-[26.5px]`}>
                  了解详情
                  <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="px-[67px] h-[96px] bg-gradient-to-b from-[#6BB6FF] to-[#4A9FEF] text-white text-[26.5px] rounded-[40px] hover:shadow-xl transition">
              预约免费试听课程
            </button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-[133px] bg-white">
        <div className="max-w-[1920px] mx-auto px-14 grid grid-cols-[854px_1fr] gap-[53px]">
          {/* Left Content */}
          <div>
            <div className="mb-[53px]">
              <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
                <span className="text-[40px]">💎</span>
                <span className="text-[26.5px] text-[#6BB6FF]">我们的优势</span>
              </div>
              <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
                为什么选择DeepBrain Academy
              </h2>
              <p className="text-[26.5px] text-[#7C8B99]">
                我们深知每个孩子都是独一无二的，因此我们致力于提供最优质、最个性化的教育服务
              </p>
            </div>

            <div className="space-y-[40px]">
              {[
                { emoji: '🎮', title: '趣味化教学', desc: '游戏化学习体验，让孩子在快乐中掌握知识，保持持久学习热情', stat: '95%', label: '课堂参与度' },
                { emoji: '👥', title: '个性化关怀', desc: '小班授课，关注每个孩子的成长节奏，提供针对性指导方案', stat: '1:6', label: '师生比例' },
                { emoji: '👨‍🏫', title: '专业师资团队', desc: '来自清华、北师大等名校的资深教师，具备丰富的国际教育经验', stat: '10年+', label: '平均教龄' },
                { emoji: '📈', title: '成果可见', desc: '科学的评估体系，定期反馈学习进度，让成长看得见', stat: '每月', label: '学习报告' }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FBF9F4] rounded-[33px] p-[40px] flex items-start gap-[27px] hover:shadow-xl transition">
                  <div className="w-[93px] h-[93px] bg-gradient-to-br from-[rgba(107,182,255,0.2)] to-[rgba(74,159,239,0.2)] rounded-[23px] flex items-center justify-center text-[46px] flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[30px] font-semibold text-[#2C3E50] mb-[13px]">{item.title}</h3>
                    <p className="text-[26.5px] text-[#7C8B99] leading-[1.6] mb-[13px]">{item.desc}</p>
                    <div className="flex items-baseline gap-[13px]">
                      <span className="text-[26.5px] font-semibold text-[#6BB6FF]">{item.stat}</span>
                      <span className="text-[20px] text-[#7C8B99]">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Box */}
          <div className="relative">
            <div className="relative w-[854px] h-[431px] rounded-[40px] overflow-hidden shadow-[0px_41px_83px_-20px_rgba(0,0,0,0.25)]">
              <Image
                src="/Image (学习场景).svg"
                alt="学习场景"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[655px] top-[237px] w-[238px] h-[234px] bg-gradient-to-b from-[#7EC97E] to-[#6BB87B] rounded-[33px] shadow-[0px_13px_17px_-10px_rgba(0,0,0,0.1),0px_33px_41px_-8px_rgba(0,0,0,0.1)] p-[40px] text-white">
              <p className="text-[26.5px] opacity-90 mb-[7px]">累计服务</p>
              <p className="text-[40px] font-semibold mb-[7px]">10,000+</p>
              <p className="text-[26.5px] opacity-90">家庭信赖之选</p>
            </div>
            <div className="absolute left-[-27px] top-[-27px] w-[159px] h-[159px] bg-[#FFD4A3] rounded-full opacity-20 blur-[133px]"></div>
            <div className="absolute left-[285px] bottom-[80px] w-[133px] h-[133px] bg-[#9B8FD8] rounded-full opacity-20 blur-[133px]"></div>
          </div>
        </div>
      </section>

      {/* Rewards Data */}
      <section className="py-[133px] bg-gradient-to-b from-white to-[#E8F4FC]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[53px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] shadow-sm mb-[27px]">
              <span className="text-[40px]">🏆</span>
              <span className="text-[26.5px] text-[#6BB6FF]">学员成就</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              荣誉墙 · 见证成长
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              每一个奖项背后，都是孩子们努力的结晶
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[27px] mb-[53px]">
            {[
              { emoji: '🥇', number: '156', label: '国际奥数获奖', color: '#FFD700' },
              { emoji: '♟️', number: '89', label: '象棋段位认证', color: '#F4A460' },
              { emoji: '🎓', number: '234', label: '海外名校录取', color: '#9B8FD8' },
              { emoji: '⭐', number: '1,000+', label: '学习里程碑达成', color: '#7EC97E' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white border-t-[7px] rounded-[40px] p-[40px] text-center hover:shadow-lg transition" style={{ borderColor: stat.color }}>
                <div className="w-[133px] h-[133px] rounded-[33px] mx-auto flex items-center justify-center text-[66px] mb-[27px]" style={{ backgroundColor: `${stat.color}1A` }}>
                  {stat.emoji}
                </div>
                <div className="text-[40px] font-semibold mb-[13px]" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="text-[26.5px] text-[#7C8B99]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Latest Awards */}
          <div className="bg-white rounded-[40px] shadow-lg p-[53px] mb-[40px]">
            <div className="flex items-center justify-between mb-[53px]">
              <h3 className="text-[40px] font-semibold text-[#2C3E50]">最新获奖</h3>
              <button className="text-[26.5px] text-[#6BB6FF] hover:text-[#4A9FEF] transition">
                查看全部 →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-[27px]">
              {[
                { emoji: '👦', name: '小明', achievement: '2024年华杯赛全国一等奖', date: '2024.11' },
                { emoji: '👧', name: '小红', achievement: '获得象棋业余5段证书', date: '2024.10' },
                { emoji: '👦', name: '小李', achievement: '成功录取美国顶尖中学', date: '2024.09' }
              ].map((student, idx) => (
                <div key={idx} className="bg-[#FBF9F4] rounded-[27px] p-[40px]">
                  <div className="flex items-center gap-[27px] mb-[27px]">
                    <div className="w-[93px] h-[93px] bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,165,0,0.2)] rounded-[23px] flex items-center justify-center text-[40px]">
                      {student.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="text-[30px] font-semibold text-[#2C3E50] mb-[7px]">{student.name}</p>
                      <p className="text-[26.5px] text-[#7C8B99] leading-[1.6]">{student.achievement}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-[27px] border-t border-gray-200">
                    <span className="text-[23px] text-[#7C8B99]">{student.date}</span>
                    <span className="text-[23px]">⭐</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot Message */}
          <div className="flex items-center justify-center gap-[27px]">
            <div className="w-[107px] h-[107px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[27px] flex items-center justify-center text-[50px] flex-shrink-0">
              🐧
            </div>
            <div className="bg-white rounded-[33px] rounded-tl-none p-[40px] shadow-lg">
              <p className="text-[26.5px] text-[#2C3E50]">
                下一个获奖的就是你！继续加油哦！💪
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-[106px] bg-[#FBF9F4]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[106px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-white rounded-[33px] shadow-sm mb-[27px]">
              <span className="text-[40px]">💬</span>
              <span className="text-[26.5px] text-[#6BB6FF]">家长心声</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              听听他们怎么说
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              真实的学习体验，来自家长和孩子的认可
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[67px] mb-[80px]">
            {/* Image */}
            <div className="relative">
              <div className="w-[864px] h-[399px] rounded-[40px] overflow-hidden shadow-[0px_41px_83px_-20px_rgba(0,0,0,0.25)]">
                <Image
                  src="/Image (成功案例).svg"
                  alt="成功案例"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-[40px] -left-[40px] w-[133px] h-[133px] bg-gradient-to-br from-[#6BB6FF] to-[#4A9FEF] rounded-[33px] shadow-xl flex items-center justify-center">
                <Image
                  src="/quote.svg"
                  alt="quote"
                  width={66}
                  height={66}
                />
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <div className="bg-white rounded-[40px] shadow-[0px_7px_10px_-7px_rgba(0,0,0,0.1),0px_17px_25px_-5px_rgba(0,0,0,0.1)] p-[53px] mb-[40px] relative overflow-hidden">
                <p className="text-[26.5px] text-[#2C3E50] leading-[1.6] mb-[40px]">
                  "孩子在这里学习奥数已经一年了，从最初的抗拒到现在主动要求上课，真的看到了他对数学的热爱。老师们非常耐心，会用孩子能理解的方式讲解复杂的问题。"
                </p>
                
                <div className="inline-flex items-center gap-[27px] px-[27px] h-[73px] bg-[rgba(126,201,126,0.13)] rounded-[27px] mb-[40px]">
                  <span className="text-[33px]">🎉</span>
                  <span className="text-[23px] text-[#7EC97E] font-medium">数学成绩提升40分</span>
                </div>

                <div className="flex items-center gap-[27px] pt-[40px] border-t border-[#E8F4FC]">
                  <div className="w-[93px] h-[93px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[23px] flex items-center justify-center text-[40px]">
                    👩
                  </div>
                  <div>
                    <p className="text-[30px] font-semibold text-[#2C3E50] mb-[7px]">张女士</p>
                    <p className="text-[26.5px] text-[#7C8B99]">小学四年级家长</p>
                    <p className="text-[26.5px] text-[#7C8B99]">北京海淀区</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#7EC97E] to-[#6BB87B] rounded-b-[40px]"></div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between px-[67px]">
                <button className="w-[80px] h-[80px] bg-white rounded-[20px] shadow-md flex items-center justify-center hover:bg-gray-50 transition text-[26.5px]">
                  ←
                </button>
                <div className="flex gap-[13px]">
                  <div className="w-[53px] h-[13px] bg-[#6BB6FF] rounded-full"></div>
                  <div className="w-[13px] h-[13px] bg-[#E8F4FC] rounded-full"></div>
                  <div className="w-[13px] h-[13px] bg-[#E8F4FC] rounded-full"></div>
                </div>
                <button className="w-[80px] h-[80px] bg-white rounded-[20px] shadow-md flex items-center justify-center hover:bg-gray-50 transition text-[26.5px]">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-[27px]">
            {[
              { number: '98%', label: '家长推荐率' },
              { number: '95%', label: '续课率' },
              { number: '4.9/5.0', label: '满意度' },
              { number: '⭐⭐⭐⭐⭐', label: '推荐指数' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-[27px] p-[40px] text-center">
                <div className="text-[30px] font-semibold text-[#6BB6FF] mb-[13px]">
                  {stat.number}
                </div>
                <div className="text-[26.5px] text-[#7C8B99]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-[106px] bg-white">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="text-center mb-[106px]">
            <div className="inline-flex items-center gap-[27px] px-[27px] py-[13px] bg-[#E8F4FC] rounded-[33px] mb-[27px]">
              <span className="text-[40px]">📚</span>
              <span className="text-[26.5px] text-[#6BB6FF]">最新资讯</span>
            </div>
            <h2 className="text-[53px] font-bold text-[#2C3E50] mb-[27px] leading-[1.3]">
              教育洞察 · 持续更新
            </h2>
            <p className="text-[26.5px] text-[#7C8B99]">
              分享教育理念、学习方法和行业动态
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[67px]">
            {[
              {
                category: '行业洞察',
                categoryColor: '#7EC97E',
                title: '2024年儿童教育五大趋势：个性化学习成主流',
                excerpt: '随着AI技术的发展，个性化教育正在改变传统教学模式，为每个孩子量身定制学习路径...',
                date: '2024.11.20',
                readTime: '5分钟',
                bgGradient: 'from-[#E8F4FC] to-[#C4D9F0]'
              },
              {
                category: '课程更新',
                categoryColor: '#F4A460',
                title: '全新奥数思维课程V3.0上线：更有趣，更高效',
                excerpt: '经过半年的研发和测试，我们的奥数课程全面升级，引入更多互动元素和游戏化设计...',
                date: '2024.11.15',
                readTime: '3分钟',
                bgGradient: 'from-[#E8F4FC] to-[#C4D9F0]'
              },
              {
                category: '学习方法',
                categoryColor: '#9B8FD8',
                title: '如何培养孩子的象棋兴趣？五个实用小技巧',
                excerpt: '象棋不仅能锻炼逻辑思维，还能培养耐心和专注力。本文分享家长可以在家实践的方法...',
                date: '2024.11.10',
                readTime: '4分钟',
                bgGradient: 'from-[#E8F4FC] to-[#C4D9F0]'
              }
            ].map((article, idx) => (
              <div key={idx} className="bg-white rounded-[40px] overflow-hidden hover:shadow-xl transition border border-gray-100">
                <div className={`h-[318px] bg-gradient-to-br ${article.bgGradient} relative`}>
                  <div className="absolute top-[27px] left-[27px]">
                    <div className="inline-flex items-center gap-[13px] px-[27px] h-[60px] bg-white bg-opacity-90 rounded-[20px]">
                      <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: article.categoryColor }}></div>
                      <span className="text-[23px] font-medium" style={{ color: article.categoryColor }}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-[40px]">
                  <h3 className="text-[40px] font-semibold text-[#2C3E50] leading-[1.05] mb-[27px] hover:text-[#6BB6FF] transition">
                    {article.title}
                  </h3>
                  <p className="text-[26.5px] text-[#7C8B99] leading-[1.6] mb-[27px]">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-[27px] border-t border-gray-100">
                    <div className="flex items-center gap-[13px] text-[20px] text-[#7C8B99]">
                      <span>📅 {article.date}</span>
                      <span>•</span>
                      <span>⏱ {article.readTime}</span>
                    </div>
                    <button className="flex items-center gap-[7px] text-[23px] text-[#6BB6FF] hover:text-[#4A9FEF] font-medium">
                      阅读
                      <svg className="w-[27px] h-[27px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-[106px]">
        <div className="max-w-[1920px] mx-auto px-14">
          <div className="grid grid-cols-5 gap-[80px] mb-[80px]">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center gap-[20px] mb-[40px]">
                <div className="w-[93px] h-[93px] bg-gradient-to-br from-[#A8D5FF] to-[#6BB6FF] rounded-[23px] flex items-center justify-center text-[50px]">
                  🐧
                </div>
                <span className="text-[40px] font-semibold">DeepBrain Academy</span>
              </div>
              <p className="text-[26.5px] text-[#C8CFD6] leading-[1.6] mb-[40px]">
                专注于6-15岁儿童的智力开发与国际教育，通过奥数、象棋和留学规划三大核心服务，为孩子的未来奠定坚实基础。
              </p>
              <div className="space-y-[20px]">
                <div className="flex items-center gap-[20px]">
                  <span className="text-[27px]">📞</span>
                  <span className="text-[23px] text-white">400-888-6666</span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className="text-[27px]">📧</span>
                  <span className="text-[23px] text-white">hello@pengilearning.com</span>
                </div>
                <div className="flex items-center gap-[20px]">
                  <span className="text-[27px]">📍</span>
                  <span className="text-[23px] text-white">北京市海淀区中关村大街1号</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-[30px] font-semibold mb-[27px]">课程中心</h3>
              <ul className="space-y-[20px] text-[23px] text-[#A8B5C3]">
                <li><a href="#" className="hover:text-white transition">奥数思维训练</a></li>
                <li><a href="#" className="hover:text-white transition">中国象棋课程</a></li>
                <li><a href="#" className="hover:text-white transition">留学规划服务</a></li>
                <li><a href="#" className="hover:text-white transition">课程价格</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[30px] font-semibold mb-[27px]">关于我们</h3>
              <ul className="space-y-[20px] text-[23px] text-[#A8B5C3]">
                <li><a href="#" className="hover:text-white transition">公司介绍</a></li>
                <li><a href="#" className="hover:text-white transition">师资团队</a></li>
                <li><a href="#" className="hover:text-white transition">联系我们</a></li>
                <li><a href="#" className="hover:text-white transition">加入我们</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[30px] font-semibold mb-[27px]">帮助中心</h3>
              <ul className="space-y-[20px] text-[23px] text-[#A8B5C3]">
                <li><a href="#" className="hover:text-white transition">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition">退款政策</a></li>
                <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition">服务条款</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-[40px] border-t border-[#3D4F63]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[27px] text-[26.5px] text-[#A8B5C3]">
                <span>© 2024 Pengi Learning. All rights reserved.</span>
                <span>|</span>
                <a href="#" className="hover:text-white">京ICP备12345678号</a>
                <span>|</span>
                <a href="#" className="hover:text-white">京公网安备11010802012345号</a>
              </div>
              <div className="flex gap-[40px] text-[23px] text-[#A8B5C3]">
                <a href="#" className="hover:text-white">隐私政策</a>
                <a href="#" className="hover:text-white">用户协议</a>
                <a href="#" className="hover:text-white">网站地图</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
