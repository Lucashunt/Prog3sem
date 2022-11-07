import Footer from "./footer";
import Navbars from "./navbar";



const Layout = ( { children }) => {
    return ( 
        <>
        
            <Navbars />
            
            { children }
            
            <Footer /> 
            
        </>
        
     );
}
 
export default Layout;