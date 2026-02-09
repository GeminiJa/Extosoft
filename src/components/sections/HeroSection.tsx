import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Zap, Shield } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-400/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-300/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern-light opacity-50" />
        
        {/* Floating Elements with enhanced animations */}
        <motion.div
          className="absolute top-32 right-32 w-16 h-16"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-sm border border-blue-300/50 flex items-center justify-center shadow-lg">
            <Sparkles className="w-7 h-7 text-blue-600" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-24 w-14 h-14"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-400/30 to-pink-500/30 backdrop-blur-sm border border-purple-300/50 flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-amber-400/30 to-orange-500/30 backdrop-blur-sm border border-amber-300/50 flex items-center justify-center shadow-lg">
            <Shield className="w-5 h-5 text-amber-600" />
          </div>
        </motion.div>

        {/* Additional floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content with scroll-based animations */}
      <motion.div 
        style={{ y, opacity, scale }} 
        className="relative z-10 section-padding w-full pt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge with animation */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </motion.div>
                <span className="text-sm text-blue-600 font-medium tracking-wide">
                  IT Services & Consulting Excellence
                </span>
              </motion.div>

              {/* Main Heading with stagger animation */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block text-slate-800"
                >
                  Extosoft
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block gradient-text"
                >
                  Company
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl sm:text-2xl text-slate-600 mb-4 font-light"
              >
                IT Services and IT Consulting
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-slate-500 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                A leader in software quality assurance industry since 2013. 
                We deliver comprehensive testing solutions that ensure your 
                products meet the highest quality standards.
              </motion.p>

              {/* Stats with stagger */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
              >
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Delivered' },
                  { value: '25+', label: 'Industries Covered' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center cursor-default"
                  >
                    <motion.div
                      className="font-display text-3xl sm:text-4xl font-bold gradient-text-blue"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1, type: 'spring' }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - 3D Visual with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square">
                {/* Central Glow with pulse */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-amber-400/25 blur-[80px]" />
                </motion.div>
                
                {/* Floating Cards with enhanced animations */}
                <motion.div
                  className="absolute top-10 right-10 bg-white rounded-2xl p-5 w-44 shadow-xl border border-slate-100"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <Shield className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <span className="text-slate-800 font-semibold text-sm">Security</span>
                  </div>
                  <div className="text-slate-500 text-xs">Enterprise-grade protection</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-24 left-0 bg-white rounded-2xl p-5 w-48 shadow-xl border border-slate-100"
                  animate={{
                    y: [0, 12, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center"
                      whileHover={{ rotate: -10 }}
                    >
                      <Zap className="w-5 h-5 text-purple-600" />
                    </motion.div>
                    <span className="text-slate-800 font-semibold text-sm">Performance</span>
                  </div>
                  <div className="text-slate-500 text-xs">Optimized for speed</div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-0 bg-white rounded-2xl p-5 w-40 shadow-xl border border-slate-100"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <Sparkles className="w-5 h-5 text-amber-600" />
                    </motion.div>
                    <span className="text-slate-800 font-semibold text-sm">Quality</span>
                  </div>
                  <div className="text-slate-500 text-xs">99.9% uptime</div>
                </motion.div>

                {/* Central Element with rotation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-amber-400 flex items-center justify-center shadow-2xl shadow-blue-500/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center">
                      <motion.span
                        className="font-display text-4xl font-bold gradient-text"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        E
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-slate-400 text-xs">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
