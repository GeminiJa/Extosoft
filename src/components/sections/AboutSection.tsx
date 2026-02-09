import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Users, Award, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Established 2013',
    description: 'Over a decade of excellence in software quality assurance',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with industry-leading expertise',
    color: 'purple',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'Internationally recognized standards and certifications',
    color: 'amber',
  },
  {
    icon: Target,
    title: 'Precision Focus',
    description: 'Meticulous attention to every detail of your software',
    color: 'blue',
  },
];

const achievements = [
  'ISO 9001:2015 Certified',
  'ISTQB Certified Testers',
  'Agile & DevOps Ready',
  '24/7 Support Available',
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-200/40 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <TrendingUp className="w-4 h-4 text-purple-600" />
              </motion.div>
              <span className="text-sm text-purple-600 font-medium tracking-wide">About Us</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
            >
              A Decade of{' '}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="gradient-text inline-block"
              >
                Excellence
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Extosoft Co., Ltd. has been at the forefront of software quality assurance since 2013, 
              supporting diverse teams across various industries with cutting-edge testing solutions.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Feature Cards with stagger */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-default"
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                      feature.color === 'blue' ? 'bg-blue-100' :
                      feature.color === 'purple' ? 'bg-purple-100' :
                      'bg-amber-100'
                    }`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`w-7 h-7 ${
                      feature.color === 'blue' ? 'text-blue-600' :
                      feature.color === 'purple' ? 'text-purple-600' :
                      'text-amber-600'
                    }`} />
                  </motion.div>
                  <h3 className="text-slate-800 font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Right - Content with slide animation */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-6 relative z-10"
                >
                  Why Choose{' '}
                  <span className="gradient-text-blue">Extosoft?</span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-slate-500 leading-relaxed mb-8 relative z-10"
                >
                  We specialize in comprehensive software quality assurance and testing services, 
                  including functional testing, performance testing, security testing, and compliance testing. 
                  Our services cover various types of software applications such as web, mobile, desktop, 
                  and embedded systems.
                </motion.p>

                <div className="space-y-4 mb-8 relative z-10">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 cursor-default"
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </motion.div>
                      <span className="text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
