import { React } from "react";
function Footer(){
    const currentYear=new Date().getFullYear();
    return <footer>
        <p>Copyright {currentYear} Oseno's Keeper</p>
    </footer>
}
export default Header;