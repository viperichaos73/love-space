import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Modal, message } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import HomePage from './components/HomePage';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import MemoryGame from './components/MemoryGame';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoveModal, setShowLoveModal] = useState(false);
  const [loveCount, setLoveCount] = useState(0);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    // 在组件加载后3秒显示爱心弹窗
    const timer = setTimeout(() => {
      setShowLoveModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
    setParticlesLoaded(true);
  };

  const handleLoveClick = () => {
    setLoveCount(loveCount + 1);
    if (loveCount < 5) {
      message.success('倪金萍，我爱你！', 1);
    } else if (loveCount < 10) {
      message.success('倪金萍，我非常爱你！', 1);
    } else {
      message.success('倪金萍，我爱你一万年！', 1);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'photos':
        return <PhotoGallery setCurrentPage={setCurrentPage} />;
      case 'letter':
        return <LoveLetter setCurrentPage={setCurrentPage} />;
      case 'game':
        return <MemoryGame setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ff80ab"
      },
      shape: {
        type: "heart",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 5,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 250,
          size: 12,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className="app-container">
      {particlesLoaded && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }}
        />
      )}

      <header className="app-header">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="app-title"
        >
          我们的爱情故事
        </motion.h1>
        <nav className="app-nav">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            首页
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-btn ${currentPage === 'photos' ? 'active' : ''}`}
            onClick={() => setCurrentPage('photos')}
          >
            照片墙
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-btn ${currentPage === 'letter' ? 'active' : ''}`}
            onClick={() => setCurrentPage('letter')}
          >
            情书
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`nav-btn ${currentPage === 'game' ? 'active' : ''}`}
            onClick={() => setCurrentPage('game')}
          >
            小游戏
          </motion.button>
        </nav>
      </header>

      <main className="app-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <Modal
        title={
          <div style={{ textAlign: 'center', color: '#e91e63' }}>
            <HeartFilled style={{ marginRight: 8, fontSize: 24 }} />
            来自骆邹阳的爱
          </div>
        }
        open={showLoveModal}
        onCancel={() => setShowLoveModal(false)}
        footer={null}
        centered
        width={400}
      >
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p style={{ fontSize: 18, marginBottom: 20 }}>亲爱的倪金萍，</p>
          <p style={{ marginBottom: 15 }}>这个网站是我为你精心制作的，</p>
          <p style={{ marginBottom: 15 }}>希望你喜欢这份特别的礼物！</p>
          <p style={{ marginBottom: 20 }}>请点击下面的按钮，开始我们的浪漫之旅吧！</p>
          
          <Button 
            type="primary" 
            shape="round" 
            icon={<HeartOutlined />} 
            size="large"
            onClick={() => {
              setShowLoveModal(false);
              handleLoveClick();
            }}
            style={{ 
              background: '#e91e63', 
              borderColor: '#e91e63',
              boxShadow: '0 4px 12px rgba(233, 30, 99, 0.4)'
            }}
          >
            我爱你
          </Button>
        </div>
      </Modal>

      <motion.div 
        className="floating-heart"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLoveClick}
      >
        <HeartFilled style={{ fontSize: 32, color: '#e91e63' }} />
      </motion.div>
    </div>
  );
};

export default App;