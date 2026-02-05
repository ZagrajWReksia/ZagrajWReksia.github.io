type FlagProps = {
  code: string;
  gray?: boolean;
};

const Flag = ({ code, gray }: FlagProps) => {
  const className =
    code.toLowerCase() === 'en' ? 'flag:GB' : `flag:${code.toUpperCase()}`;
  const style = gray
    ? { opacity: 0.5, filter: 'grayscale(50%)' }
    : undefined;

  return <span className={className} style={style} />;
};

export default Flag;
