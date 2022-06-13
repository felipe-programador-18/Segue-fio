import React from "react"

const Twits = ({twit}) => {
  const content = twit.trim()
    // this case i am caught to props 
    // this verify code to learning and traning more!!
    // const len = twit.lenght

    const len = content.length    
return(
        <>
        <div className=" shadow border border-blue-700 border-indigo-500/100 rounded-lg p-4 my-2">
        {twit}

        <p className="text-right text-sm text-green-800 "  >
   { len <= 280 && <span className="text-blue-700 bg-green-100 p-1 rounded ">{len} </span> }

   {len > 280 && <span className="text-red-700 bg-red-100 p-1 rounded " > {280-len} </span> }
            
        </p> 
        </div>


</>)
}

export default Twits
