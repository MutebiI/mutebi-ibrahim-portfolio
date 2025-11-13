"use client";

import { motion } from "framer-motion";
import { MessageCircle, Code, Book, Users, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Floating Particles Component - Client Side Only
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{left: string; top: string}>>([]);

  useEffect(() => {
    // This only runs on client after hydration
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles - Fixed with client-side component */}
        <div className="absolute inset-0">
          <FloatingParticles />
        </div>

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/256774506291"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 4px 6px rgba(34, 197, 94, 0.3)",
            "0 10px 15px rgba(34, 197, 94, 0.5)", 
            "0 4px 6px rgba(34, 197, 94, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Photo with Glow Effect */}
            <motion.div
              className="relative mx-auto mb-8 w-36 h-36"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white/20 shadow-2xl overflow-hidden">
                <img 
                  src="/mutebi.jpg" 
                  alt="Mutebi Ibrahim" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Animated Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={12} className="inline mr-1" />
                Available
              </motion.div>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Mutebi <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Ibrahim</span>
            </motion.h1>

            {/* Animated Tagline */}
            <motion.div
              className="text-xl sm:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="flex flex-wrap justify-center gap-4">
                <motion.span 
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code size={20} className="text-blue-400" />
                  Full-Stack Developer
                </motion.span>
                <motion.span 
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Book size={20} className="text-green-400" />
                  Educator & Author
                </motion.span>
                <motion.span 
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Users size={20} className="text-purple-400" />
                  Problem-Solver
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Crafting <span className="text-yellow-400 font-semibold">digital experiences</span>, 
              empowering through <span className="text-green-400 font-semibold">education</span>, and 
              solving <span className="text-purple-400 font-semibold">diverse challenges</span> with innovative solutions.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="#services"
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What I <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Offer</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive solutions tailored to your needs - from digital innovation to educational empowerment
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full-Stack Development",
                description: "Custom web applications and websites built with modern technologies like React, Next.js, and JavaScript",
                features: ["Responsive Design", "Modern Tech Stack", "Fast Performance", "SEO Optimized"],
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/10 to-cyan-500/10",
                delay: 0.1
              },
              {
                icon: <Book className="w-8 h-8" />,
                title: "Academic Coaching",
                description: "Master Mathematics, Physics, and Chemistry with personalized coaching sessions",
                features: ["One-on-One Sessions", "Concept Clarity", "Exam Preparation", "Flexible Scheduling"],
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-500/10 to-emerald-500/10",
                delay: 0.2
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Microsoft Office Mastery",
                description: "Comprehensive training in Word, Excel, PowerPoint for personal and professional growth",
                features: ["Advanced Formulas", "Professional Documents", "Impactful Presentations", "Time-Saving Tips"],
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/10 to-pink-500/10",
                delay: 0.3
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Versatile problem-solving for unique challenges - tell me what you need!",
                features: ["Flexible Approach", "Quick Learning", "Creative Solutions", "Project Management"],
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-500/10 to-red-500/10",
                delay: 0.4
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-slate-900" />
                </div>

                <div className="relative z-10">
                  {/* Service Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: service.delay + featureIndex * 0.1 }}
                      >
                        <motion.span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-300 text-lg mb-6">
              Have a specific project in mind? Let's discuss custom solutions!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Let's Talk About Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
      {/* My Journey & Versatility Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-800/50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        My <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Journey</span> & Versatility
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        From data management to educational innovation - a path of continuous growth and adaptability
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Achievements & Experiences */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-8">Key Achievements & Experiences</h3>
        
        <div className="space-y-6">
          {/* Book Author */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Book size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Author of Luganda Mathematics Book</h4>
                <p className="text-gray-300">
                  Created an innovative educational resource making mathematics accessible in local language, 
                  demonstrating deep subject mastery and commitment to education.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div 
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Diverse Professional Background</h4>
                <p className="text-gray-300 mb-3">
                  Gained valuable experience in government systems as a <strong>Data Entrant at Ministry</strong> 
                  and led content strategies as <strong>Head of Publications at Outcast Activists Forum</strong>.
                </p>
                <p className="text-gray-400 text-sm">
                  These roles honed my attention to detail, understanding of organizational systems, and leadership capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Versatility & Flexibility */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-8">Why Choose a Versatile Professional?</h3>
        
        <div className="space-y-6">
          <motion.div 
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold text-white mb-3">🚀 Quick Adaptation</h4>
            <p className="text-gray-300">
              Proven ability to quickly learn new fields and adapt to different environments - 
              from government offices to educational innovation and tech development.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-xl p-6 border border-orange-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold text-white mb-3">💡 Creative Problem-Solving</h4>
            <p className="text-gray-300">
              Unique perspective from diverse experiences allows me to approach challenges 
              with innovative solutions that specialists might overlook.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-lg font-semibold text-white mb-3">🌍 Broad Understanding</h4>
            <p className="text-gray-300">
              Experience across sectors gives me valuable insights into how different industries work, 
              making me effective in cross-functional roles and diverse projects.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-300 mb-4">
            Looking for someone who can wear multiple hats and adapt to your unique needs?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles size={20} />
            Let's Discuss Your Needs
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
{/* Portfolio Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 relative">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        My <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Creative Work</span>
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Visual showcases of design excellence and technical craftsmanship
      </motion.p>
    </motion.div>

    {/* Portfolio Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Modern School Platform",
          description: "A beautiful, responsive website for educational institutions with engaging user experience",
          gradient: "from-blue-500/20 to-cyan-500/20",
          borderGradient: "from-blue-400 to-cyan-400",
          technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
          featured: true,
          mockup: "💻"
        },
        {
          title: "E-Learning Dashboard",
          description: "Interactive learning management system with clean, modern interface design",
          gradient: "from-purple-500/20 to-pink-500/20", 
          borderGradient: "from-purple-400 to-pink-400",
          technologies: ["React", "Chart.js", "UI/UX Design"],
          featured: false,
          mockup: "📊"
        },
        {
          title: "Business Portfolio",
          description: "Professional portfolio website showcasing business services and achievements",
          gradient: "from-green-500/20 to-emerald-500/20",
          borderGradient: "from-green-400 to-emerald-400",
          technologies: ["Responsive Design", "SEO", "Performance"],
          featured: false,
          mockup: "💼"
        },
        {
          title: "Educational App UI",
          description: "Mobile-first application interface for interactive learning experiences",
          gradient: "from-orange-500/20 to-red-500/20",
          borderGradient: "from-orange-400 to-red-400",
          technologies: ["Mobile Design", "Figma", "Prototyping"],
          featured: false,
          mockup: "📱"
        },
        {
          title: "Corporate Website",
          description: "Professional corporate website with modern aesthetics and user-friendly navigation",
          gradient: "from-indigo-500/20 to-purple-500/20",
          borderGradient: "from-indigo-400 to-purple-400",
          technologies: ["Web Design", "Brand Identity", "UX Research"],
          featured: false,
          mockup: "🏢"
        },
        {
          title: "Custom Web Solution",
          description: "Tailored web application solving specific business challenges with elegant design",
          gradient: "from-rose-500/20 to-pink-500/20",
          borderGradient: "from-rose-400 to-pink-400",
          technologies: ["Custom Development", "Problem Solving", "Innovation"],
          featured: false,
          mockup: "⚡"
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Beautiful Gradient Placeholder */}
          <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                  Featured Project
                </span>
              </div>
            )}
            
            {/* Animated Device Mockup */}
            <motion.div 
              className="text-6xl opacity-60"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {project.mockup}
            </motion.div>
            
            {/* Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
            <div className="absolute inset-[2px] rounded-2xl bg-slate-900" />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Portfolio CTA */}
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <p className="text-gray-300 text-lg mb-6">
        Ready to create something beautiful together?
      </p>
      <motion.a
        href="#contact"
        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles size={20} />
        Let's Build Your Vision
      </motion.a>
    </motion.div>
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-800/30">
  <div className="max-w-4xl mx-auto">
    {/* Section Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Let's <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Work Together</span>
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Ready to bring your ideas to life? Let's discuss your project and create something amazing.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
        
        <div className="space-y-6">
          {/* Email */}
          <motion.a
            href="mailto:mutebiibrahim503@gmail.com"
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300 group"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Email</p>
              <p className="text-white font-semibold group-hover:text-green-400 transition-colors">
                mutebiibrahim503@gmail.com
              </p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/256774506291"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300 group"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">WhatsApp</p>
              <p className="text-white font-semibold group-hover:text-green-400 transition-colors">
                +256 774 506 291
              </p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10"
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
              <Users size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Based In</p>
              <p className="text-white font-semibold">Kampala, Uganda</p>
            </div>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-xl border border-green-400/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles size={20} className="text-green-400" />
            <h4 className="text-white font-semibold">Quick Response Guarantee</h4>
          </div>
          <p className="text-gray-300 text-sm">
            I typically respond within 2-4 hours during business hours. Let's start your project today!
          </p>
        </motion.div>
      </motion.div>

      {/* Simple Contact Instructions */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-white mb-8">How to Reach Me</h3>
        
        <div className="space-y-6">
          {/* Direct Contact Method */}
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white">
                <MessageCircle size={20} />
              </div>
              <h4 className="text-white font-semibold text-lg">Direct Message</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              For the fastest response, message me directly on WhatsApp or email. I'll get back to you within hours!
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://wa.me/256774506291"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
              <motion.a
                href="mailto:mutebiibrahim503@gmail.com"
                className="flex-1 bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </motion.a>
            </div>
          </motion.div>

          {/* What to Include */}
          <motion.div
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Sparkles size={18} className="text-purple-400" />
              What to Include in Your Message
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Your name and contact information
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Project type (website, coaching, etc.)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Timeline and budget expectations
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Any specific requirements or goals
              </li>
            </ul>
          </motion.div>

          {/* Response Promise */}
          <motion.div
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-xl p-6 border border-yellow-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white">
                <span className="text-sm font-bold">✓</span>
              </div>
              <h4 className="text-white font-semibold">You'll Hear Back Quickly!</h4>
            </div>
            <p className="text-gray-300 text-sm">
              I respond to all messages within 2-4 hours during business hours. If you don't hear back, 
              feel free to send a follow-up message!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}