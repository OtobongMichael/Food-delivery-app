import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

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
    }, [cookies, navigate]);

    const isAuthorized = user !== null;

    useEffect(() => {
        if (!isLoading && !isAuthorized) {
            navigate('/login');
        }
    }, [isLoading, isAuthorized, navigate]);

    const simulateLogin = (formData) => {
        const { email, password } = formData;

        setIsLoading(true);


        setTimeout(() => {
            if (email === 'nathantrustekanem@gmail.com' && password === '1234') {
                setCookie('user', { email });
                setCookie('access', 'dummyToken');
                setUser({ email });
            }
            setIsLoading(false);
        }, 2000);
    };

    const logout = () => {
        setCookie('user', null, { maxAge: 0 });
        setCookie('access', null, { maxAge: 0 });
        setUser(null);
    };

    return { user, isLoading, isAuthorized, simulateLogin, logout };
};

export default useAuthentication;
