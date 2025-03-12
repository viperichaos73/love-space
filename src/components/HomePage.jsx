import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-container container">
      <motion.div 
        className="welcome-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="heart-icon animate-pulse"
          style={{ fontSize: 60, color: '#e91e63', margin: '20px 0' }}
        >
          <HeartFilled />
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="welcome-title"
          style={{ fontSize: 36, marginBottom: 20 }}
        >
          亲爱的倪金萍
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="welcome-text"
          style={{ fontSize: 18, maxWidth: 600, margin: '0 auto 30px', lineHeight: 1.8 }}
        >
          欢迎来到我为你精心准备的爱的空间，这里记录着我对你的所有爱意和思念。
          每一页都承载着我想对你说的话，希望这份特别的礼物能让你感受到我满溢的爱意。
        </motion.p>
        
        <div className="home-buttons">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button 
              type="primary" 
              shape="round"
              size="large"
              onClick={() => setCurrentPage('photos')}
              style={{ 
                background: '#e91e63', 
                borderColor: '#e91e63',
                margin: '0 10px 20px',
                fontSize: 16,
                height: 'auto',
                padding: '10px 24px'
              }}
            >
              浏览我们的照片
            </Button>
            
            <Button 
              type="primary" 
              shape="round"
              size="large"
              onClick={() => setCurrentPage('letter')}
              style={{ 
                background: '#f48fb1', 
                borderColor: '#f48fb1',
                margin: '0 10px 20px',
                fontSize: 16,
                height: 'auto',
                padding: '10px 24px'
              }}
            >
              阅读我的情书
            </Button>
            
            <Button 
              type="primary" 
              shape="round"
              size="large"
              onClick={() => setCurrentPage('game')}
              style={{ 
                background: '#ff80ab', 
                borderColor: '#ff80ab',
                margin: '0 10px 20px',
                fontSize: 16,
                height: 'auto',
                padding: '10px 24px'
              }}
            >
              玩个小游戏
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="love-quote card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ 
          maxWidth: 700, 
          margin: '50px auto', 
          padding: 30,
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <h3 style={{ marginBottom: 20, fontSize: 24, color: '#e91e63' }}>
          爱的誓言
        </h3>
        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          "亲爱的倪金萍，自从遇见你，我的世界便充满了色彩。
          你的笑容是我每天的阳光，你的声音是我最爱的旋律。
          我承诺会一直陪伴在你身边，用我全部的爱去守护你，让你成为世界上最幸福的人。"
        </p>
        <p style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18 }}>
          永远爱你的 骆邹阳
        </p>
      </motion.div>
    </div>
  );
};

export default HomePage;