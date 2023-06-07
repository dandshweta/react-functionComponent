// import "./ex.style.css";

// const ex = ({ label, size, color, bold }) => {
//   return (
//     <p className={bold ? "bold" : ""} style={{ color, fontSize: size }}>
//       {label}
//     </p>
//   );
// };

// ex.defaultProps = {
//   label: "",
//   size: 11,
//   color: "black",
//   bold: false,
// };

// export default ex;







// text style
// .bold {
//   font-weight: bold;
//   padding: 12px;
//   margin: 12px;
// }





import TextView from "../Ajit-EveSession/TextView";

const TextDemo = () => {
  return (
    <div>
      <TextView label={"Ajit"} />
      <TextView label={"Arun"} size={20} />
      <TextView label={"Amit"} size={30} color={"red"} bold />
      <TextView label={"Arjun"} size={34} color={"green"} />
      <TextView label={"Abhinav"} size={38} color={"purple"} />
    </div>
  );
};

export default TextDemo;
