//Header component
//Path: App > HEADER > Branding / Menu
//To contain: Branding, Menu
//Props: ??

import Branding from "../Branding/Branding";
import Menu from '../Menu/Menu'

/**
 * Creates Header component, includes Branding and Menu icon components, passing logo image path prop
 */
function Header() {
    return(
        <div className="header" id="header">
        <Branding />
        <Menu />
        </div>
    )
  }
  
  export default Header;