import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, FileCheck, Shield, Medal, Trophy } from 'lucide-react';

const certifications = [
  {
    icon: FileCheck,
    title: 'ISO 9001:2015',
    description: 'Quality Management System certification ensuring consistent quality in all our processes and services.',
    color: 'blue',
  },
  {
    icon: BadgeCheck,
    title: 'ISTQB Certified',
    description: 'Our testers hold International Software Testing Qualifications Board certifications.',
    color: 'purple',
  },
  {
    icon: Shield,
    title: 'ISO 27001',
    description: 'Information Security Management certification for protecting data and systems.',
    color: 'amber',
  },
  {
    icon: Medal,
    title: 'CMMI Level 3',
    description: 'Capability Maturity Model Integration certification for process improvement.',
    color: 'blue',
  },
];

const achievements = [
  { icon: Trophy, value: '15+', label: 'Industry Awards' },
  { icon: Award, value: '50+', label: 'Certified Professionals' },
  { icon: BadgeCheck, value: '100%', label: 'Certified Processes' },
];

export function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-200/50 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-blue-200/50 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with animations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
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
                <Award className="w-4 h-4 text-purple-600" />
              </motion.div>
              <span className="text-sm text-purple-600 font-medium tracking-wide">Certifications</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
            >
              Industry{' '}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="gradient-text inline-block"
              >
                Recognized
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Our commitment to excellence is validated by internationally recognized certifications 
              and standards that ensure the highest quality of service delivery.
            </motion.p>
          </motion.div>

          {/* Achievement Stats with animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-20"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg shadow-slate-200/50 border border-slate-100"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <achievement.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <div>
                  <motion.div
                    className="font-display text-2xl font-bold gradient-text"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: 'spring' }}
                  >
                    {achievement.value}
                  </motion.div>
                  <div className="text-slate-500 text-sm">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Grid with animations */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
                  {/* Decorative Gradient */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 transition-opacity group-hover:opacity-50 ${
                      cert.color === 'blue' ? 'bg-blue-400' :
                      cert.color === 'purple' ? 'bg-purple-400' :
                      'bg-amber-400'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  
                  <div className="relative z-10 flex gap-6">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center ${
                        cert.color === 'blue' ? 'bg-blue-100' :
                        cert.color === 'purple' ? 'bg-purple-100' :
                        'bg-amber-100'
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <cert.icon className={`w-10 h-10 ${
                        cert.color === 'blue' ? 'text-blue-600' :
                        cert.color === 'purple' ? 'text-purple-600' :
                        'text-amber-600'
                      }`} />
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-slate-800 font-display font-bold text-xl mb-3">{cert.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>

                  {/* Badge */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      cert.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      Verified
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Banner with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 bg-white rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            {/* Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-amber-50"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-amber-400 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-4"
              >
                Your Trust, Our{' '}
                <span className="gradient-text">Commitment</span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                Every certification we hold represents our dedication to delivering 
                the highest standards of quality, security, and professionalism in everything we do.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {['Quality Assured', 'Security First', 'Process Driven', 'Compliance Ready'].map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
