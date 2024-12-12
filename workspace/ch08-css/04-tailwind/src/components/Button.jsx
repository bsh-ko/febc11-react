import PropTypes from "prop-types";
import "./Button.css";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(["blue", "red", "yellow"]), // 글자 색상
  bg: PropTypes.oneOf(["blue", "red", "yellow", "gray"]), // 배경 색상
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
};

export default function Button({
  children,
  bg = "gray",
  color = "black",
  size = "md",
  type = "button",
  onClick: clickHandler,
}) {
  return (
    <button className={`bg-gray-500`} type={type} onClick={clickHandler}>
      {children}
    </button>
  );
}
