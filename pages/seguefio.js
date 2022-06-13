import { useForm } from "react-hook-form"
import Twits from "../Components/twis"

const followlaine = () => {
  const {register, watch} = useForm()  
  
  const content = watch("content")
  const twits = content?.split("\n\n\n")
    
    
    return(<div className="max-w-6xl m-auto" > 
    <img  className="align-items-center" src="logo-segue-fio.png" alt="seguefio" />
    <p>....</p>
       <div className="flex flex-row p-6">
        
         <div className="flex-1" >
          <h2>Insights: </h2>
          <textarea {...register("content")}  className="w-full h-screen" ></textarea>
         </div>
         
         <div className="flex-1 p-2">
            
            <h2>Twits:</h2>
           
            { twits?.map( (twit, index) =>( 
             <Twits twit={twit} key={index}  />
             ))}
          
          </div>
       
       </div> 
    </ div>)
}

export default followlaine