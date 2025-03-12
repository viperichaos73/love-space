import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, Row, Col, message } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const MemoryGame = ({ setCurrentPage }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const cardContents = [
    { id: 1, content: '💑' },
    { id: 2, content: '💖' },
    { id: 3, content: '💕' },
    { id: 4, content: '💝' },
    { id: 5, content: '💗' },
    { id: 6, content: '💓' },
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedCards = [...cardContents, ...cardContents];
    const shuffledCards = duplicatedCards
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (uniqueId) => {
    if (disabled || flipped.includes(uniqueId) || matched.includes(uniqueId)) return;

    const newFlipped = [...flipped, uniqueId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      setMoves(moves + 1);

      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find(card => card.uniqueId === firstId);
      const secondCard = cards.find(card => card.uniqueId === secondId);

      if (firstCard.id === secondCard.id) {
        setMatched([...matched, firstId, secondId]);
        setFlipped([]);
        setDisabled(false);

        if (matched.length + 2 === cards.length) {
          setGameWon(true);
          message.success('恭喜你赢得了游戏！这是我们爱情的见证！');
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="memory-game container animate-fade-in">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
        style={{ marginBottom: 30, fontSize: 32, color: 'var(--primary-color)' }}
      >
        爱的记忆游戏
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="game-info text-center"
        style={{ marginBottom: 30 }}
      >
        <p style={{ fontSize: 18, marginBottom: 10 }}>
          移动次数: {moves}
        </p>
        <button
          className="btn btn-secondary"
          onClick={initializeGame}
          style={{ marginRight: 10 }}
        >
          重新开始
        </button>
      </motion.div>

      <Row gutter={[16, 16]} justify="center">
        {cards.map(({ uniqueId, content }) => (
          <Col xs={8} sm={6} md={4} key={uniqueId}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                onClick={() => handleCardClick(uniqueId)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleCardClick(uniqueId);
                }}
                style={{
                  cursor: 'pointer',
                  height: '100%',
                  aspectRatio: '1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: flipped.includes(uniqueId) || matched.includes(uniqueId)
                    ? '#fff'
                    : 'var(--primary-color)',
                  transition: 'all 0.3s ease',
                  touchAction: 'manipulation'
                }}
                bodyStyle={{
                  padding: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    color: flipped.includes(uniqueId) || matched.includes(uniqueId)
                      ? 'var(--primary-color)'
                      : 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {flipped.includes(uniqueId) || matched.includes(uniqueId) ? content : <HeartFilled />}
                </div>
              </Card>
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

export default MemoryGame;