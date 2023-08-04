import React from 'react'

const Body = ({Data}) => {
  return (
    <div>
        {
          Data.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
  )
}

export default Body
