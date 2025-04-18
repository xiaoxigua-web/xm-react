import { useSyncExternalStore } from "react"

export const useHistory = ()=>{

    const subscribe = (callback:()=>void)=>{
        window.addEventListener('popstate',callback)
        window.addEventListener('hashchange',callback)
        return ()=>{
          window.removeEventListener('popstate',callback)
          window.removeEventListener('hashchange',callback)
        }
    }

    const getSnapshot = ()=>{
      return window.location.href
    }

    const url = useSyncExternalStore(subscribe,getSnapshot)

    const pushUrl = (url:string)=>{
       window.history.pushState({},'',url)
       window.dispatchEvent( new PopStateEvent('popstate'))
    }
    const replaceUrl = (url:string)=>{
       window.history.replaceState({},'',url)
       window.dispatchEvent( new PopStateEvent('popstate'))

    }
    return [url,pushUrl,replaceUrl] as const
}