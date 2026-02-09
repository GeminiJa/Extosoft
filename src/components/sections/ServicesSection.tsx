import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gauge, 
  ClipboardCheck, 
  Code2, 
  GraduationCap, 
  GitBranch, 
  RefreshCw,
  ArrowRight,
  Layers
} from 'lucide-react';

const services = [
  {
    icon: Gauge,
    title: 'Performance Testing',
    shortDesc: 'System stability under workload',
    fullDesc: 'Performance testing is performed to determine how stable a system can perform under a particular workload by using advanced performance testing tools. We identify bottlenecks and optimize your application for peak performance.',
    color: 'blue',
    features: ['Load Testing', 'Stress Testing', 'Scalability Analysis', 'Performance Monitoring'],
  },
  {
    icon: ClipboardCheck,
    title: 'Functional Testing',
    shortDesc: 'Verify expected outputs',
    fullDesc: 'Functional testing is performed to determine whether the output is as expected. Our expert testers manually verify every feature to ensure your software functions exactly as specified in requirements.',
    color: 'purple',
    features: ['Manual Testing', 'Automated Testing', 'Regression Testing', 'UAT Support'],
  },
  {
    icon: Code2,
    title: 'Software Development',
    shortDesc: 'Custom application solutions',
    fullDesc: 'We support organizations by providing the analysis, design and development of applications tailored to your specific needs. From concept to deployment, we deliver high-quality software solutions.',
    color: 'amber',
    features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Consulting',
    shortDesc: 'IT professional development',
    fullDesc: 'We provide consulting and integration services in the field of information technology. We also provide IT Professional training to help your team stay ahead with the latest technologies and best practices.',
    color: 'blue',
    features: ['QA Training', 'Agile Coaching', 'Technology Consulting', 'Process Improvement'],
  },
  {
    icon: GitBranch,
    title: 'DevOps Services',
    shortDesc: 'Streamline your workflow',
    fullDesc: 'Interactively coordinate proactive e-commerce via process-centric outside-the-box thinking. We help you implement DevOps practices that accelerate delivery and improve collaboration.',
    color: 'purple',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Cloud Migration'],
  },
  {
    icon: RefreshCw,
    title: 'Application Lifecycle Management',
    shortDesc: 'End-to-end management',
    fullDesc: 'Seamlessly empower fully researched growth strategies and interoperable internal or organic sources. We manage your entire application lifecycle from planning to retirement.',
    color: 'amber',
    features: ['Requirements Management', 'Version Control', 'Release Management', 'Documentation'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-slate-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <Layers className="w-4 h-4 text-blue-600" />
              </motion.div>
              <span className="text-sm text-blue-600 font-medium tracking-wide">Our Services</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
            >
              Comprehensive{' '}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="gradient-text inline-block"
              >
                Solutions
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              From testing to development, we offer a full spectrum of IT services 
              designed to elevate your software quality and accelerate your business growth.
            </motion.p>
          </motion.div>

          {/* Services Grid with stagger animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div 
                  className="bg-white rounded-2xl p-6 h-full cursor-pointer shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                >
                  {/* Icon with animation */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 ${
                      service.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                      service.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
                      'bg-amber-100 group-hover:bg-amber-200'
                    }`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'blue' ? 'text-blue-600' :
                      service.color === 'purple' ? 'text-purple-600' :
                      'text-amber-600'
                    }`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-slate-800 font-semibold text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{service.shortDesc}</p>

                  {/* Expand Indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read more</span>
                    <motion.div
                      animate={{ rotate: selectedService === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>

                  {/* Expanded Content with AnimatePresence */}
                  <AnimatePresence>
                    {selectedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="pt-4 mt-4 border-t border-blue-100"
                        >
                          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                            {service.fullDesc}
                          </p>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex flex-wrap gap-2"
                          >
                            {service.features.map((feature, fIndex) => (
                              <motion.span
                                key={fIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.2 + fIndex * 0.05 }}
                                className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs"
                              >
                                {feature}
                              </motion.span>
                            ))}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
