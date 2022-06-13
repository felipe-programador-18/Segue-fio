import React from "react"

const Twits = ({twit}) => {
// this case i am caught to props
// this verify code to learning and traning more!!
  const len = twit.length    
return(
        <>
        <div className=" shadow border border-blue-700 border-indigo-500/100 rounded-lg p-4 my-2">
        {twit}

        <p className="text-right text-sm text-green-800 "  >{twit.length} </p> 
        </div>
        </>
    )
}

export default Twits
