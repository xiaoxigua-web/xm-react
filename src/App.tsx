import {useStorage} from './hooks/useStorage'
import { useHistory } from './hooks/useHistory'
import './App.css'

function App() {
  const [count,setCount] = useStorage('count',1)
  const [url,pushUrl,replaceUrl] = useHistory()

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>+</button>
     <button onClick={()=>setCount(count-1)}>-</button>
     <div>url:{url}</div>
     <button onClick={()=>pushUrl('/A')}>to A</button>
     <button onClick={()=>replaceUrl('/B')}>to B</button>
    </>
  )
}

export default App
