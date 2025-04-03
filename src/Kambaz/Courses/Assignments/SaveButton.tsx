
import { Button } from "react-bootstrap";
import {  useNavigate, useParams } from "react-router-dom";
export default function SaveButton({addAssignment}: {addAssignment:()=>void; } ){
     const { cid } = useParams();
     const navigate = useNavigate();
     const handleSave = () => {
          addAssignment();
          navigate(`/Kambaz/Courses/${cid}/Assignments`); 
     }
     return (
     <div > 
   
   <Button className="btn btn-lg btn-danger" id="wd-add-module-btn" 
                             onClick={handleSave}>
                                   Save
                              </Button>
     
      </div>
     );}