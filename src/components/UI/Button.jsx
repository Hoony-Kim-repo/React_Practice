const Button = ({ children, textOnly, className, ...rest }) => {
  const cssClass = textOnly
    ? `text-button ${className}`
    : `button ${className}`;

  return (
    <button className={cssClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
