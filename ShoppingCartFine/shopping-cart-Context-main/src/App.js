import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { itemContext } from './ItemConext';


function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <itemContext.Provider value ={{item,setItem}}>
    <totalContext.Provider value ={{total,setTotal}}>
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
            {/* <itemContext.Provider value ={{total,setTotal}}>
            <Items/> */}
            </div>
            </totalContext.Provider>
            </itemContext.Provider>
       
  );
}
export default App;






// import { useState } from "react";
// import { Card } from "./Card";
// import { cardContext } from "./context";
// import "./styles.css";

// export default function App() {
//   const [text, setText] = useState("");
//   const [color, setColor] = useState("");

//   return (
//     <div className="App">
//       <form>
//         <textarea
//           placeholder="What's on your mind?"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         ></textarea>
//         <input
//           placeholder="Background Color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//         />
//       </form>
//       <cardContext.Provider value={{ text, color }}>
//         <Card />
//       </cardContext.Provider>
//     </div>
//   );
// }
