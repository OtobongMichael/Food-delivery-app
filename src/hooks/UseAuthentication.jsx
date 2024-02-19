import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user', 'access']);

    useEffect(() => {
        const cookieUser = cookies.user;
        const token = cookies.access;

        if (cookieUser && token) {
            setUser(cookieUser);
        } else {
            navigate('/login');
        }
        console.log("Use effect");
    }, [cookies, navigate, user]); // Include 'user' in the dependency array

    const isAuthorized = user !== null;

    useEffect(() => {
        if (!isLoading && !isAuthorized) {
            navigate('/login');
        }
    }, [isAuthorized, navigate]);


    const simulateLogin = (formData) => {
        const { email, password} = formData;

        setIsLoading(true);

        setTimeout(() => {
            if (email === cookies?.user?.email && password === cookies?.access?.password) {
                // setCookie('user', { email });
                // setCookie('access', 'dummyToken');
                // setUser({ email });
                navigate("/");
            toast.success('Login successful', {
                hideProgressBar: true, // Hide the loader
                autoClose: 1000 
            });
            } else {
                toast.error('Login failed', {
                    // hideProgressBar: true, // Hide the loader
                    autoClose: 2000 
                });
            }
            setIsLoading(false);
        }, 1000);
    };

    const logout = () => {
        setCookie('user', null, { maxAge: 0 });
        setCookie('access', null, { maxAge: 0 });
        setUser(null);
        toast.info('Logged out successful' , {
            hideProgressBar: true ,// Hide the loader
            autoClose: 1000 
        });
    };

    return { user, isLoading, isAuthorized, simulateLogin, logout, setUser };
};

export default useAuthentication;
