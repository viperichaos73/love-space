import React from 'react';
import { motion } from 'framer-motion';
import { HeartFilled } from '@ant-design/icons';

const LoveLetter = ({ setCurrentPage }) => {
  return (
    <div className="love-letter container animate-fade-in">
      <motion.div
        className="letter-container card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: 40,
          background: 'rgba(255, 255, 255, 0.9)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          className="heart-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'var(--primary-color)',
            fontSize: 30
          }}
        >
          <HeartFilled />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: 32,
            color: 'var(--primary-color)',
            marginBottom: 30,
            textAlign: 'center'
          }}
        >
          致我最爱的倪金萍
        </motion.h2>

        <motion.div
          className="letter-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontSize: 18,
            lineHeight: 1.8,
            color: 'var(--text-color)'
          }}
        >
          <p style={{ marginBottom: 20 }}>
            亲爱的倪金萍：
          </p>
          
          <p style={{ marginBottom: 20 }}>
            当你看到这封信的时候，我希望你能感受到我对你满溢的爱意。自从遇见你，我的生活变得如此美好，每一天都因为有你而变得更加明亮。
          </p>
          
          <p style={{ marginBottom: 20 }}>
            还记得我们第一次见面的场景吗？那一刻，我就被你的笑容所吸引，仿佛世界上所有的光芒都聚集在你身上。随着时间的推移，我越来越确信，你就是我想要共度一生的人。
          </p>
          
          <p style={{ marginBottom: 20 }}>
            我爱你的善良，爱你的聪明，爱你的坚强，也爱你偶尔展现的小脆弱。和你在一起的每一刻都是珍贵的，无论是一起看电影的温馨时光，还是手牵手散步的浪漫瞬间，都深深地刻在我的记忆里。
          </p>
          
          <p style={{ marginBottom: 20 }}>
            未来的日子里，我希望能一直陪在你身边，分享你的喜怒哀乐，支持你的梦想，给你依靠的肩膀。无论遇到什么困难，我们都一起面对，因为有你在我身边，我就有无穷的勇气和力量。
          </p>
          
          <p style={{ marginBottom: 30 }}>
            倪金萍，我爱你，比昨天更爱，明天会更爱。希望我们的爱情故事能一直写下去，直到永远。
          </p>
          
          <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
            永远爱你的 骆邹阳
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="text-center"
        style={{ marginTop: 40 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          className="btn"
          onClick={() => setCurrentPage('home')}
          style={{ fontSize: 18 }}
        >
          返回首页
        </button>
      </motion.div>
    </div>
  );
};

export default LoveLetter;