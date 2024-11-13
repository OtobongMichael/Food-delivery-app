import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../api/firebase';
import { toast } from 'react-toastify';

const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Set initial loading state to true
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user', 'access']);
    // const auth = getAuth(); // Initialize Firebase Auth instance
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                setIsLoading(false);
                console.log("user", firebaseUser);
                navigate("/"); // Redirect to '/' if user is authenticated
            } else {
                setUser(null);
                setIsLoading(false);
                console.log("user", null);
                navigate("/login"); // Redirect to '/login' if no user is authenticated
            }
        });
    
        return () => {
            unsubscribe(); // Cleanup the listener
        };
    }, [auth, navigate]);
    

    const isAuthorized = user !== null;

    const simulateLogin = (formData) => {
        const { email, password } = formData;

        setIsLoading(true);

        setTimeout(() => {
            if (email === cookies?.user?.email && password === cookies?.access?.password) {
                navigate("/");
            } else {
                setIsLoading(false);
                // Handle login failure
            }
        }, 1000);
    };

    const logout = () => {
        auth.signOut().then(() => {
            setCookie('user', null, { maxAge: 0 });
            setCookie('access', null, { maxAge: 0 });
            toast.info('Logged out successful', {
                hideProgressBar: true,
                autoClose: 1000
            });
        }).catch((error) => {
            console.error('Logout error:', error);
            toast.error('Logout failed', {
                autoClose: 2000
            });
        });
    };
    

    return { user, isLoading, isAuthorized, simulateLogin, logout, setUser };
};

export default useAuthentication;
