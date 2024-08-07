import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/login.jsx';
import SignupPage from './Components/signup.jsx';
import ForgotPasswordPage from './Components/forgotPassword.jsx'
import HomePage from './Components/home.jsx'
import AccountInfoPage from './Components/accountInfo.jsx';
import NameChangeForm from './Components/nameChangeForm.jsx';
import EmailChangeForm from './Components/emailChangeForm.jsx';
import ContractOtherForm from './Components/contractOtherForm.jsx';
import ContractNDAForm from './Components/contractNDAForm.jsx';
import NotFoundPage from './Components/notFound.jsx';
import ContractRentalForm from './Components/contractRentalForm.jsx';
import { UserProvider } from './UserContext.js';


function App(){
    return (
    
        <UserProvider>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signUp" element={<SignupPage />} />
                <Route path="/forgotPassword" element={<ForgotPasswordPage/>} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/accountInfo" element={<AccountInfoPage />} />
                <Route path="/nameChange" element={<NameChangeForm />} />
                <Route path="/emailChange" element={<EmailChangeForm />} />
                <Route path="/otherContract" element={<ContractOtherForm />} />
                <Route path="/ndaContract" element={<ContractNDAForm />} />
                <Route path="/rentalContract" element={<ContractRentalForm />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </UserProvider>
    );
}

export default App;
