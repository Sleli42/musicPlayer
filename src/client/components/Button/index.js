import React, { PropTypes } from 'react';

const Button = ({ onClick }) => <button onClick={onClick} />;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
