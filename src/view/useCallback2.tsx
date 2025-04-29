import React,{ useCallback, useState } from "react"

const Child = React.memo((params)=>{
  console.log('child rander')
  return(
    <>
    <div>child2</div>
    </>
  )
}) 

function UseCallbackTest2(){
  const [inputValue,setInputValue] = useState('') 
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value)
  }
  // const callback = useCallback(()=>{
  //   console.log('')
  // },[])
  const callback = ()=>{
    console.log('')
  }

  return (
    <>
    <h1>usecallback2</h1>
    <input type="text" value={inputValue} onChange={handleInputChange}/>
    <Child callback={callback}></Child>
    </>
  )

}

export default UseCallbackTest2