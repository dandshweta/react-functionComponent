// import {useState,useEffect}from 'react'

// const useMemo = () => {
//     const{add,setadd}=useState[0];
//     const{sub,setsub}=useState[100];
//     const multiplication=()=>{
//         console.log("......");
//         return add*2;
//     }
//   return (
//     <div>useMemo</div>
//     {multiplication()}
//     <button onClick={()=>setadd(add+1)}>add</button>
//     <span>{add}</span>
//     <button onclick={()=>setsub(sub-1)}>sub</button>
//     <span>{sub}</span>
//   )
// }
// export default useMemo

// import { useState } from "react";

// const UseMemo1 = () => {
//   const [add, setAdd] = useState(0);
//   const [sub, setSub] = useState(100);

//   const multiplication = useMemo(
//     function mul() {
//       console.log("......");
//       return add * 2;
//     },
//     [add]
//   );

//   return (
//     <div>
//       <div>useMemo</div>
//       {multiplication()}
//       <button onClick={() => setAdd(add + 1)}>add</button>
//       <span>{add}</span>
//       <button onClick={() => setSub(sub - 1)}>sub</button>
//       <span>{sub}</span>
//     </div>
//   );
// };

// export default UseMemo1;

import { useState, useMemo } from "react";

const UseMemo1 = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const multiplication = useMemo(() => {
    console.log("......");
    return add * 2;
  }, [add]);

  return (
    <div>
      <div>useMemo</div>
      <div>Multiplication: {multiplication}</div>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <span>{add}</span>
      <button onClick={() => setSub(sub - 1)}>Sub</button>
      <span>{sub}</span>
    </div>
  );
};

export default UseMemo1;
