import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import { LoginForm, RegisterPage, PaymentPage, LoginPage} from "./components";


const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route element={<App />} path="/"/>
        <Route element={<App />} path="/home"/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/payment" element={<PaymentPage />}/>
        {/* <Route path="*" element={<div>Not found
            <Link to='/' style={{display:"block"}}>Back</Link>
        </div>}/>
        <Route path="/car/:id" element={<CarDetail />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/authfailed/:user" element={<AuthFailed />}/> */}
    </Routes>
    </BrowserRouter>

}

export default Router