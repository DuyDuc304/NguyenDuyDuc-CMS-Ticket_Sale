import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ServicePack from "./pages/ServicePack/ServicePack";
import TicketChange from "./pages/TicketChange/TicketChange";
import TicketManager from "./pages/TicketManager/TicketManager";
import './pages/App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ServicePack" element={<ServicePack />} />
                <Route path="/TicketManager" element={<TicketManager />} />
                <Route path="/TicketChange" element={<TicketChange />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;