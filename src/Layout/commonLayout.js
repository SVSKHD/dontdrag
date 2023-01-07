import Footer from "./Footer"
import Header from "./Header"

const CommonLayout = (props) =>{
return(
    <>
    <div>
        <Header/>
        <div className="body-part">
        {props.children}
        </div>
        <Footer/>
    </div>
    </>
)
}
export default CommonLayout