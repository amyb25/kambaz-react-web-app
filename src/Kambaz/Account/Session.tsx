import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

{/*export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null);  // To capture any errors during profile fetch
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
      setError("Failed to load profile, please try again.");
    } finally {
      setPending(false);  // Always set pending to false after attempt
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (pending) {
    return <div>Loading...</div>;  // Loading indicator, can be a spinner or text
  }

  if (error) {
    return <div>{error}</div>;  // Error message if the profile fetch fails
  }

  return children;  // Only return the children once the profile is loaded
}*/}

{/*export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null);  // For capturing errors
  const dispatch = useDispatch();

  // Fetch the user profile
  const fetchProfile = async () => {
    try {
        let currentUser = await client.profile();
        console.log("currentUser:", currentUser); // Add this log to check the response
        
        if (!currentUser) {
          console.log('No profile found, checking localStorage...');
          currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        }
        console.log('Fetched currentUser from localStorage or API:', currentUser); // Another log
        dispatch(setCurrentUser(currentUser));
        if (currentUser) {
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
      } catch (err: any) {
        console.error(err);
        setError("Failed to load profile, please try again.");
      } finally {
        setPending(false); // Always set pending to false after attempt
      }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Handling loading state
  if (pending) {
    return <div>Loading profile...</div>;  // Show a loading spinner or text
  }

  // Handle errors gracefully
  if (error) {
    return <div>{error}</div>;  // Display the error message
  }

  // Ensure that currentUser is available before rendering children
  return children;
};*/}

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
};
