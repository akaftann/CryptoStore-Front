import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import { LoginForm, RegisterForm, PaymentDashboard, LoginPage} from "./components";


const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route element={<App />} path="/"/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/payment" element={<PaymentDashboard />}/>
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