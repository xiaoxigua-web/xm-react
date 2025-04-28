import React,{useContext, useState} from "react"

interface themeType {
  theme:string
}
const themeContext = React.createContext({} as themeType)

const Child = ()=>{
  const theme = useContext(themeContext)
  const style = {
    with: '100px',
    height: '100px',
    background:theme.theme==='light'?'orange':'black'
  }
  return(
    <>
    <h2>child:{theme.theme}</h2>
    <div style={style}></div>
    </>
  )
}

const Parent = ()=>{
  const theme = useContext(themeContext)
  const style = {
    with: '100px',
    height: '100px',
    background:theme.theme==='light'?'orange':'black'
  }
  return(
    <>
    <h2>Parent:{theme.theme}</h2>
    <div style={style}></div>
    </>
  )
}


function ContextTest(){
  const [theme,setTheme] = useState('black')
  return (
    <>
    <h1>useContextTest:{theme}</h1>
    <button onClick={()=>setTheme(theme==='black'?'light':'black')}>切换主题</button>
    <br />
    <themeContext.Provider value={{theme}}>
      <Parent></Parent>
      <Child></Child>
    </themeContext.Provider>
    </>
  )
}

export default ContextTest