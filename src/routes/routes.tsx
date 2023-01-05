import { Routes, Route, BrowserRouter } from "react-router-dom";

import ExamSection from "../components/examSection";
import LogIn from "../components/login";

import Maths from "../components/subjects/maths";
import English from "../components/subjects/english";
import Chemistry from "../components/subjects/chemistry";
import Biology from "../components/subjects/biology";
import Physics from "../components/subjects/physics";
import Dashboard from "../components/subjects/dashBoard";


const Pages = () =>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="examSection/:userId" element={<ExamSection />} >
            <Route index element={<Dashboard />} />
            <Route path="english" element={<English />} />
            <Route path="maths" element={<Maths />} />
            <Route path="chemistry" element={<Chemistry />} />
            <Route path="biology" element={<Biology />} />
            <Route path="physics" element={<Physics />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
</BrowserRouter>


export default Pages;