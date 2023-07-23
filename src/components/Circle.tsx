import React, { useState } from 'react';
import './styles.css';

interface CircleProps {
}

const Circle: React.FC<CircleProps> = (props: CircleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return isExpanded ? (
    <div className='w-full h-full grid grid-cols-2 gird-rows-2'>
      <div className='flex justify-center items-center'>
        <Circle></Circle>
      </div>
      <div className='flex justify-center items-center'>
        <Circle></Circle>
      </div>
      <div className='flex justify-center items-center'>
        <Circle></Circle>
      </div>
      <div className='flex justify-center items-center'>
        <Circle></Circle>
      </div>
    </div>
  ) : (
    <div className='circle w-5/6 h-5/6 rounded-full' onClick={() => setIsExpanded(true)}>
    </div>
  );
}

export default Circle;
