import {Header} from "./Header.tsx";
import {Footer} from "./footer.tsx";

export const Layout = ({children}:any) => {
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}