import {  Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  // const signout = () => {
  //   dispatch(setCurrentUser(null));
  //   navigate("/Kambaz/Account/Signin");
  // };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-signup-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
      <Form.Control defaultValue={profile.username} id="wd-name"
        className="mb-2" onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
      <Form.Control defaultValue={profile.password} id="wd-password" type="name"
        className="mb-2" onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>

      <Form.Control defaultValue={profile.firstName} id="wd-name" type="name"
        className="mb-2" onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        placeholder="First Name"/>
      <Form.Control defaultValue={profile.lastName} id="wd-name" type="lastname"
        className="mb-2" onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}
        placeholder="Last Name"/>

        <Form.Control defaultValue={profile.dob} className="mb-2" onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" id="wd-available-from" />
        <Form.Control id="wd-name" defaultValue={profile.email} type="email"
        className="mb-2" onChange={ (e) => setProfile({ ...profile, email: e.target.value })}
        placeholder="email"/>

        
<select value={profile.role || "USER"} onChange={(e) => setProfile({ ...profile, role: e.target.value })}
       className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>

      <Link id="wd-signin-btn"
        to="/Kambaz/Account/Profile" 
        className="btn btn-primary w-100 mb-2">
        Sign in </Link>
        <button onClick={updateProfile} className="btn btn-success w-100 mb-2"> Update </button>
        <Button onClick={signout} className="w-100 mb-2 btn-danger" id="wd-signout-btn">
            Sign out
          </Button>
          </div>
          )}
    </div>);
}