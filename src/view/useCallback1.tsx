import { useCallback, useState } from "react"

const map = new WeakMap()
let count = 0

function UseCallbackTest(){
  const [inputValue,setInputValue] = useState('') 
  // const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  //   setInputValue(e.target.value)
  // }
  const handleInputChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value)
  },[])
  //使用usecallback来缓存函数
  if(!map.has(handleInputChange)){
    map.set(handleInputChange,1)
    count++
  }
  console.log('生成了几次handleinputchange',count)
  return (
    <>
    <h1>usecallback</h1>
    <input type="text" value={inputValue} onChange={handleInputChange}/>
    </>
  )

}

export default UseCallbackTest