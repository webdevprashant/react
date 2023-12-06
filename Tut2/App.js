import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick()  {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

function MyButton({count, onClick})  {
  return (
    <button onClick={onClick}>
      Clicked {count} Times
    </button>
  );
}
















// create component using state and hook
// import { useState } from "react";


// function MyButton()  {
//   const [count, setCount] = useState(0);
  
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export {MyButton};