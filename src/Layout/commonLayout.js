import Footer from "./Footer"
import Header from "./Header"

const CommonLayout = (props) =>{
return(
    <>
    <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
    </>
)
}
export default CommonLayout