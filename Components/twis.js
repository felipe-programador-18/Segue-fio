import React from "react"
import {IoIosCopy} from "react-icons/io"

const Twits = ({twit}) => {
  const content = twit.trim()
  
// this function serve to save text!!!
  const copyRight = async() => {
  await  navigator.clipboard.writeText(content)
  }
  
  const len = content.length    
return(
        <>
        <div className="transition-all group relative shadow border border-blue-700 border-indigo-500/200 rounded-lg p-4 my-2 cursor-pointer hover:bg-blue-100 "  onClick={copyRight} >

        <IoIosCopy className="opacity-0 absolute top-2 right-4 group-hover:opacity-100" />
        
        {content}
       
        <p className="text-right text-sm text-green-800 h-10  "  >
   { len <= 280 && <span className="text-blue-700 bg-green-100 rounded mb-2  ">{len} </span> }

   {len > 280 && <span className="text-red-700 bg-red-100 p-1 rounded  " > {280-len} </span> }
            
        </p> 
        </div>
            


</>)
}

export default Twits
