import { useForm } from "react-hook-form"
import Twits from "../Components/twis"

const followlaine = () => {
  const {register, watch} = useForm()  
  const showCounter= watch("showCounter") || false

  const content = watch("content") || ""
  const twits = content?.split("\n\n\n").map(twit => twit.trim()).filter( (twit) => twit )
    
    
    return(<div className="max-w-6xl m-auto" > 
    <img  className="" src="logo-segue-fio.png" alt="seguefio" />
      
       <p className="px-8"> <label> <input className="ml-8 m-2" type='checkbox' {...register('showCounter')} />Mostrar Contador</label>  </p>
       
       
       
       <div className="flex flex-row px-6 py-2">
        
         <div className="flex-1 m-4" >
          <h2>Insights: </h2>
          <textarea {...register("content")}  className="w-full h-screen" ></textarea>
         </div>
         
         <div className="flex-1 p-2">
            
            <h2>Twits:</h2>
           
            { twits?.map( (twit, index) =>( 
             <Twits twit={twit} 
             key={index}
             showCounter={showCounter}
             current={index+1}
             total={twits.length}
             />
             ))}
          
          </div>
       
       </div> 
    </ div>)
}

export default followlaine