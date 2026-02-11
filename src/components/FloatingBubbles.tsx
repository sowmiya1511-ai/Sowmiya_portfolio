import React from 'react';

const FloatingBubbles: React.FC = () => {
  const bubbles = [
    { id: 1, size: 30, class: 'bubble-1' },
    { id: 2, size: 45, class: 'bubble-2' },
    { id: 3, size: 25, class: 'bubble-3' },
    { id: 4, size: 38, class: 'bubble-4' },
    { id: 5, size: 33, class: 'bubble-5' },
    { id: 6, size: 42, class: 'bubble-6' },
  ];

  return (
    <>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`floating-bubble ${bubble.class}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
        />
      ))}
    </>
  );
};

export default FloatingBubbles;
