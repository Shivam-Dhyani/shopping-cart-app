import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = (props) => {
  const { rating, style, onClick, fontSize } = props;
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          // Here the value of "index" is getting passed to the "Filters" compoment(from
          // child to parent component) using arrow function "onClick()" which is
          // triggered at the click of rating stars
          <span key={index} style={style} onClick={() => onClick(index)}>
            {index < rating ? (
              fontSize === "large" ? (
                <AiFillStar fontSize="30px" />
              ) : (
                <AiFillStar fontSize="15px" />
              )
            ) : fontSize === "large" ? (
              <AiOutlineStar fontSize="20px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Ratings;
