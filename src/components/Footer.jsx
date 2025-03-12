import React from 'react';
import { motion } from 'framer-motion';
import { HeartFilled } from '@ant-design/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      className="app-footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      style={{
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 40,
        borderTop: '1px solid rgba(233, 30, 99, 0.2)'
      }}
    >
      <div className="container">
        <p style={{ fontSize: 16, marginBottom: 10 }}>
          <HeartFilled style={{ color: 'var(--primary-color)', marginRight: 8 }} />
          骆邹阳 & 倪金萍 的爱情空间
          <HeartFilled style={{ color: 'var(--primary-color)', marginLeft: 8 }} />
        </p>
        <p style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.6)' }}>
          © {currentYear} 用爱创造 | 永远爱你
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;