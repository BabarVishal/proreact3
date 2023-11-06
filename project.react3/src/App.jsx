import { useState } from "react"


function App() {
  let[Color,setcolor] = useState("green");

  return (
    <>
      
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:Color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 px-2 rounded-3xl ">
            <button
            onClick={()=>setcolor("red")}
            className="flex outline-none p-3 m-1 rounded-full text-white"
            style={{backgroundColor:"red"}}
           >red</button>
           <button
           onClick={()=>setcolor("grey")}
            className="flex outline-none p-3 m-1 rounded-full text-white"
            style={{backgroundColor:"grey"}}
           >grey</button>
           <button
           onClick={()=>setcolor("black")}
            className="flex outline-none p-3 m-1 rounded-full text-white"
            style={{backgroundColor:"black"}}
           >black</button>
           <button
           onClick={()=>setcolor("pink")}
           style={{backgroundColor:"pink"}}
           className="flex outline-none p-3 m-1 rounded-full text-white"
           >pink</button>
           <button
           onClick={()=>setcolor("orange")}
           style={{backgroundColor:"orange"}}
           className="flex outline-none p-3 m-1 text-white rounded-full"
           >orange</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
