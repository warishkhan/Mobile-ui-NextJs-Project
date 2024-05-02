import ReactStars from 'react-stars';

const RatingStars = ({ value, onChange }) => {
  return (
    <ReactStars
      count={5}
      value={value}
      onChange={onChange}
      size={50}
      color2={'#ffd700'}
    />
  );
};

export default RatingStars;
