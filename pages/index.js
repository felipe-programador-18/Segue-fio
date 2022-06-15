import { useForm } from "react-hook-form"
import Twits from "../Components/twis"
import { useRouter } from "next/router"
import { useEffect} from "react"
import {BsLinkedin ,BsGithub } from 'react-icons/bs'
import {MdShare} from 'react-icons/md'

const followlaine = () => {
  const router = useRouter()
  const {register, watch, setValue} = useForm()  
  const showCounter= watch('showCounter') || false
  
  const content = watch('content') || ''  
  
  const twits = content?.split('\n\n\n')
  .map((twit) => twit.trim())
  .filter( (twit) => twit )
  
  useEffect(() => {
    if(router?.query?.content){
      setValue('content',router.query.content)
    }
    if(router?.query?.showCounter){
      setValue('showCounter', router.query.showCounter)
    }
    //setValue('content',router.query.content)   
  },[router])



// functions to share all insights of trendins!!
const share = async () => {
  const shareUrl =  process.env.NEXT_PUBLIC_APP_URL +'?content=' + escape(content) + '&showCounter=' + (showCounter)
  await navigator.clipboard.writeText(shareUrl)
} 



    
    return(<div className="max-w-6xl m-auto" > 
      <div className="text-center">
        <img  className="inline" src="logo-segue-fio.png" alt="seguefio" />
      </div>
      
      <p className=" inline px-2 mr-10 "> <label>
        <input className="ml-8 m-2" type='checkbox' {...register('showCounter')}/>
          Mostrar Contador
        </label>  
      </p>
       
      <button onClick={share} className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-2 border border-blue-700 rounded" > <MdShare className="inline-block mr-2"/>   Compartilhar</button>
       
       
       <div className="flex flex-row px-6 py-2">
        
         <div className="flex-1 m-4" >
          <h2>Contéudo: </h2>
          <textarea {...register("content")}  placeholder='Digite seu conteúdo aqui  ...'  className="w-full h-screen" ></textarea>
         </div>
         
         <div className="flex-1 p-2">
            
            <h2>Twits:</h2>
           
            { twits?.map((twit, index) =>( 
             <Twits twit={twit} 
             key={twit + '-' + index}
             showCounter={showCounter}
             current={index+1}
             total={twits.length}
             />
             ))}
          
            {twits.length === 0  && (<div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-2 m-2" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p className="capitalize">Comece digitando seu conteúdo.</p>
</div>) 
             
                         
             }

          </div>
          
       </div> 
         <footer className="text-center my-4">
            <p>  <a href="https://www.linkedin.com/in/felipe-martins-programador/" > <BsLinkedin className="inline" />Felipe Martins </a>  </p>

            <p>
               <a href="https://github.com/felipe-programador-18" > <BsGithub className="inline" /> FeProg-18  </a>
            </p>
               <p>Projeto Desenvolvido Por: Felipe Martins.</p>
         </footer>
    
</ div>)
}

export default followlaine


