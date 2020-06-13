import React from 'react'
import Profilphoto from './Page/Profilphoto'
import Fullname from './Page/Fullname'
import Myaddress from './Page/Address'

const Main = () =>{
    return(
        <div className="App">
        <h1>this is the Main component</h1>
      <Profilphoto />
      < Fullname />
      < Myaddress />
      </div>
    )
}



export default Main 