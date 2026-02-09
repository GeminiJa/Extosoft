import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  MessageSquare
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    content: '696/2 Soi Phaholyohin 32, Senanikhom 1 Yaek 18 Road, Chan Kasem, Chatuchak, Bangkok 10900',
    color: 'blue',
  },
  {
    icon: Mail,
    title: 'Email Address',
    content: 'support@extosoft.com',
    link: 'mailto:support@extosoft.com',
    color: 'purple',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    content: '02-550-6271',
    link: 'tel:02-550-6271',
    color: 'amber',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM',
    color: 'blue',
  },
];

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-200/40 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
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
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageSquare className="w-4 h-4 text-blue-600" />
              </motion.div>
              <span className="text-sm text-blue-600 font-medium tracking-wide">Company Information</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
            >
              Company{' '}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="gradient-text inline-block"
              >
                Details
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Find our location, email, phone number, and working hours below.
            </motion.p>
          </motion.div>

          <div className="grid gap-12">
            {/* Contact Info with stagger */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                        info.color === 'blue' ? 'bg-blue-100' :
                        info.color === 'purple' ? 'bg-purple-100' :
                        'bg-amber-100'
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <info.icon className={`w-6 h-6 ${
                        info.color === 'blue' ? 'text-blue-600' :
                        info.color === 'purple' ? 'text-purple-600' :
                        'text-amber-600'
                      }`} />
                    </motion.div>
                    <div>
                      <h4 className="text-slate-800 font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <motion.a 
                          href={info.link}
                          className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                          whileHover={{ x: 5 }}
                        >
                          {info.content}
                        </motion.a>
                      ) : (
                        <p className="text-slate-500 text-sm leading-relaxed">{info.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
