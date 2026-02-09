import { motion } from 'framer-motion';
import { Cpu, ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Performance Testing',
  'Functional Testing',
  'Software Development',
  'Training & Consulting',
  'DevOps Services',
  'ALM Solutions',
];


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-200/30 rounded-full blur-[100px]" />

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-slate-800 tracking-wider">
                    EXTOSOFT
                  </span>
                  <span className="text-xs text-blue-500 tracking-[0.3em]">CO., LTD.</span>
                </div>
              </motion.a>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A leader in software quality assurance since 2013, 
                delivering comprehensive testing solutions for businesses worldwide.
              </p>

              {/*
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-slate-800 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-slate-500 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-blue-500 transition-colors" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-slate-800 mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-slate-500 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-slate-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Extosoft Co., Ltd. All rights reserved.
              </p>

              {/* Legal Links */}
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
