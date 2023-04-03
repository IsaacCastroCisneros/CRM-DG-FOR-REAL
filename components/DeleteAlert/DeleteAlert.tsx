import { appContext } from '@/context/AppContenxt'
import React,{useContext} from 'react'
import NewButton from '../NewButton/NewButton'

export default function DeleteAlert({subject}:{subject:string}) 
{
    const{setShowPopup}=useContext(appContext)

    return(
        <>
          <strong className='block text-center text-[1.5rem] mb-[1rem]'>
            {`¿Estas seguro de elimar ${subject}?`}
          </strong>
          <div className='flex w-[100%] justify-center gap-[1rem]'>
            <NewButton label='SI' />
            <button className='hover:underline hover:text-primary text-myText'
             onClick={()=>setShowPopup(prev=>{return{...prev,show:false}})}
             >
                Regresar
            </button>
          </div>
        </>
    )
}
