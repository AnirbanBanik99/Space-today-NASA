import React from "react";
import {Link} from "react-router-dom";

 export default function Home() {
     return(
         <>
          <div className="head" >
             <h2>Welcome to Anirban's Galaxy </h2>
         </div>
         <div className="home">
             <Link className="home-link" to="/nasaphoto"> Let's see into the stars </Link>
         </div>
         </>
     )
 }