
import { BrowserRouter, Route, Routes as RoutesRD } from "react-router-dom";

//pages
import {Home} from './pages/Home'
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { Error } from "./pages/Error";
import { Produto } from "./pages/Produto";

//components
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const Routes = ()=>{

    return(

        <BrowserRouter>
            <Header/>
            <RoutesRD>


                <Route 
                    path="/"
                    Component={Home}
                />

                <Route
                    path="/sobre"
                    Component={Sobre}
                />

                <Route
                    path="/contato"
                    Component={Contato}
                />

                <Route
                //rota dinâmica
                    path="/produto/:id"
                    Component={Produto}
                />

                <Route
                    path="*"
                    Component={Error}
                />

            </RoutesRD>
            <Footer/>

        </BrowserRouter>
    )
}

export default Routes