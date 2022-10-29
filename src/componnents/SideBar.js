import React from "react";
import { Link} from "react-router-dom";
function SideBar(){
    return(
        
        <React.Fragment>
            <ul className="ul">
                <li>
                <Link to={'/products'}> get all products</Link>
                </li>
                <li>
                <a href="#"> get all catogries</a>
                    </li>
            </ul>

        </React.Fragment>
        

    )

}
 export default SideBar;
