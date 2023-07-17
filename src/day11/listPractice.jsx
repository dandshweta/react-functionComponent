// const List = () => {
//   const data = [
//     { id: 1, name: "shweta" },
//     { id: 2, name: "sneha" },
//     { id: 3, name: "shri" },
//   ];

//   return (
//     <div>
//       {data.map((user) => {
//         <div>{user.name}</div>;
//       })}
//     </div>
//   );
// };

// const List = () => {
//   const data = [
//     { id: 1, name: "shweta" },
//     { id: 2, name: "sneha" },
//     { id: 3, name: "shri" },
//   ];

//   return (
//     <div>
//       <h2>List</h2>
//       {data.map((user) => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   );
// };
// export default List;

const List = () => {
  const User = [
    { id: 1, name: "shweta", hobby: "drawing" },
    { id: 2, name: "sneha", hobby: "singing" },
    { id: 4, name: "shri", hobby: "cricket" },
  ];
  return (
    <div>
      <h2>List1</h2>
      {User.map((data) => (
        <div key={data.id}>
          <p>
            Name:{data.name} Hobby:{data.hobby}
          </p>
        </div>
      ))}
    </div>
  );
};
export default List;
