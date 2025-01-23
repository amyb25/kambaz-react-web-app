import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
    return (
        <div>
      <h1>Labs</h1>
      <h2>Amy Baez | CS4500</h2>
      <div>
        <a href="https://github.com/amyb25/kambaz-react-web-app" id="wd-github">Github Repo</a><br />
      </div>
      
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
        </div>

    );
}