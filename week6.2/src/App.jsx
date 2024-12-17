import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(0)


  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    })
  },[])

  return <div>
     {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
</div>


}



export default App
