import { memo, useState } from 'react'


function App() {
const [firstTitle,setFirstTitle] = useState("my name harkirat")

function changeTitle(){
  setFirstTitle("my name is " + Math.random());
}

  return (
  <>
  <button onClick={changeTitle}>Click to change the title</button>
  <Header title={firstTitle}/>
    <Header title='my name is harkirat'/>
    <Header title='my name is harkirat'/>
    <Header title='my name is harkirat'/>
    <Header title='my name is harkirat'/>
   </>
  );
}

const Header = memo(({title}) => {
  return <div>
    {title}
  </div>
})
export default App
