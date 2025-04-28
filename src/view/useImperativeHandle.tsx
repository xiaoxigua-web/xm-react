import { useRef,useImperativeHandle, useState } from "react"

interface childRef  {
  name:string,
  age:string,
  addCount:()=>void,
  subCount:()=>void
}

const Child = (params) => {
  const [count,setCount] = useState(0)
  const addCount = ()=>{
    setCount(count + 1)
  }
  const subCount = ()=>{
    setCount(count - 1)
  }
  useImperativeHandle(params.ref,()=>{
    return {
      addCount,
      subCount
    }
  })
  return(
    <>
      <h1>child</h1>
      <h2>{count}</h2>
    </>
    )
}

function ImperativeHandleTest() {
  const childRef = useRef<childRef>(null)

  return (
    <>
      <h1>ImperativeHandleTest</h1>
      <br />
      <Child ref={childRef}></Child>
      <button onClick={()=>childRef.current?.addCount()}>+++</button>
    </>
  )

}

export default ImperativeHandleTest