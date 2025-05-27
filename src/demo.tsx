import {useStorage} from './hooks/useStorage'
import { useHistory } from './hooks/useHistory'
import { useRef, useState } from 'react'
import ImperativeHandleTest from './view/useImperativeHandle'
import ContextTest from './view/useContext'
import UseCallbackTest from './view/useCallback1'
import UseCallbackTest2 from './view/useCallback2'
import './App.css'

function App() {
  const [count,setCount] = useStorage('count',1)
  const [url,pushUrl,replaceUrl] = useHistory()
  const refDiv = useRef(null)
  let timer = useRef(null)
  console.log('??',refDiv.current)
  const refClick = (e)=>{
    console.log(e)
    console.log(refDiv.current)
    refDiv.current!.style.background = 'red'
  }

  const [age,setAge] = useState(0)
  const start = ()=>{
    timer.current = setInterval(() => {
      setAge((age)=>age+1)
      console.log(age)
    }, 300);
  }

  const stop = ()=>{
     if(timer){
      clearInterval(timer.current)
     }
  }

  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>+</button>
     <button onClick={()=>setCount(count-1)}>-</button>
     <div>url:{url}</div>
     <button onClick={()=>pushUrl('/A')}>to A</button>
     <button onClick={()=>replaceUrl('/B')}>to B</button>
     <div ref={refDiv}>没钱了没钱了</div>
     <button onClick={refClick}>ref按钮</button>
     <div>{age}</div>
     <button onClick={start}>开始setAge</button>
     <button onClick={stop}>结束setAge</button>
     <br />
     <ImperativeHandleTest></ImperativeHandleTest>
     <ContextTest></ContextTest>
     <UseCallbackTest></UseCallbackTest>
     <UseCallbackTest2></UseCallbackTest2>
    </>
  )
}

export default App
