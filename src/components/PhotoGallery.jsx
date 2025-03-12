import React from 'react';
import { motion } from 'framer-motion';
import { Image, Row, Col } from 'antd';

const PhotoGallery = ({ setCurrentPage }) => {
  // 示例照片数组，实际使用时请替换为真实的照片URL
  const photos = [
    { id: 1, url: 'https://picsum.photos/300/400', description: '我们的第一张合照' },
    { id: 2, url: 'https://picsum.photos/300/400', description: '甜蜜的约会' },
    { id: 3, url: 'https://picsum.photos/300/400', description: '浪漫的晚餐' },
    { id: 4, url: 'https://picsum.photos/300/400', description: '开心的旅行' },
    { id: 5, url: 'https://picsum.photos/300/400', description: '难忘的时刻' },
    { id: 6, url: 'https://picsum.photos/300/400', description: '美好的回忆' },
  ];

  return (
    <div className="photo-gallery container animate-fade-in">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
        style={{ marginBottom: 40, fontSize: 32, color: 'var(--primary-color)' }}
      >
        我们的甜蜜相册
      </motion.h2>

      <Row gutter={[24, 24]}>
        {photos.map((photo, index) => (
          <Col xs={24} sm={12} md={8} key={photo.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card"
              style={{ overflow: 'hidden' }}
            >
              <Image
                src={photo.url}
                alt={photo.description}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                style={{
                  marginTop: 16,
                  textAlign: 'center',
                  fontSize: 18,
                  color: 'var(--text-color)'
                }}
              >
                {photo.description}
              </motion.p>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        className="text-center"
        style={{ marginTop: 40 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
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

export default PhotoGallery;