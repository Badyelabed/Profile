import React from 'react';
import myimage from "./photo01.jpg"

const profilphoto = () => {
    return(
        
        <img style={{objectFit:'cover', width:80, height:80, borderRadius:'50%',marginTop:40 }} src={myimage} />
    )
};

export default profilphoto;