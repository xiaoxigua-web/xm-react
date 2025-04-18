import { useSyncExternalStore } from "react"

export const useStorage = (key:string,initValue:any)=>{
    console.log(key,initValue)

    const subscribe = (callback:()=>void)=>{
        window.addEventListener('storage',callback)
        return ()=>{
          window.removeEventListener('storage',callback)
        }
    }

    const getSnapshot = ()=>{
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : initValue
    }

    const updateFn = (newValue:any)=>{
      localStorage.setItem(key,JSON.stringify(newValue))
      window.dispatchEvent(new StorageEvent('storage'))

    }

    const res = useSyncExternalStore(subscribe,getSnapshot)

    return [res,updateFn]
}