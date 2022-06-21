import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import ServicePack from "./component/ServicePack/ServicePack";
import TicketChange from "./component/TicketChange/TicketChange";
import TicketManager from "./component/TicketManager/TicketManager";
import './style/App.css';

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ServicePack" element={<ServicePack />} />
                <Route path="/TicketManager" element={<TicketManager />} />
                <Route path="/TicketChange" element={<TicketChange />} />
            </Routes>
        </div>
    )
}
export default App;