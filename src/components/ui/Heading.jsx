const Heading = ({ title, fontSize, color, lineHeight }) => {
  const dynamicClass = `${fontSize} ${color} ${
    lineHeight ? `${lineHeight}` : ""
  }`;

  return (
    <div className={dynamicClass}>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;

  