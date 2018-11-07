import React from 'react';

const CounterContent = ({
  number,
  onIncrement,
  onDecrement
}) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}>증가 (+)</button>
      <button onClick={onDecrement}>감소 (-)</button>
    </div>
  );
};

CounterContent.defaultProps = {
  number: 0
}

export default CounterContent;