import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8);

  const[numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);

  const[password,setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz "

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_~`::?/><"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1);
       pass = str.charAt(char)

    }

    setPassword(pass)

  },[numberAllowed,charAllowed,setPassword])

  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center mb-4">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-white text-black"
          placeholder="Generated password"
          readOnly

    />

    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>

     <div className='flex text-sm gap-x-2'>
      <div className='flex-items-center gap-x-1'>
        <input type='range' 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          
        />
        <label>Length:{length}</label>
      </div>
     </div>
</div>

    </>
  )
}

export default App
