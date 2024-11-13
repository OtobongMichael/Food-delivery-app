import React, { useState } from 'react'
import images from '../assets/Images/Frame 59955.png';
import images2 from '../assets/Images/Logo (1).png';
import images3 from '../assets/Images/Google.png';
import { toast } from 'react-toastify';
import useAuthentication from '../hooks/UseAuthentication';
import { useCookies } from 'react-cookie';
import { useCustomContext } from '../hooks/Context';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../api/firebase';
// import { auth } from "../api/firebase";



function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [isLoading, setIsLoading] = useState(false)
    const [cookies, setCookie] = useCookies(['user', 'access']);
    const { user, setUser } = useCustomContext()
    const navigate = useNavigate();
    const simulateLogin = (formData) => {
        const { email, password, password_confirmation } = formData;

        setIsLoading(true);

        setTimeout(() => {
            if (email === email && password === password_confirmation) {
                setCookie('user', { email });
                setCookie('access', { password });
                setUser({ email });
                navigate("/login");
                toast.success('Account created successful', {
                    hideProgressBar: true, // Hide the loader
                    autoClose: 1000
                });
            } else {
                toast.error('Oops something failed', {
                    // hideProgressBar: true, // Hide the loader
                    autoClose: 2000
                });
            }
            setIsLoading(false);
        }, 1000);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
    
        const { email, password, password_confirmation } = formData;
    
        if (password !== password_confirmation) {
            toast.error('Passwords do not match');
            return;
        }
    
        setIsLoading(true);
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;
                console.log("user credential", userCredential);
                // Redirect, set cookies, or perform any other necessary actions
                toast.success('Account created successfully', {
                    hideProgressBar: true,
                    autoClose: 1000
                });
                setIsLoading(false);
                navigate("/login");
            })
            .catch((error) => {
                // Handle errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Sign up error:", errorCode, errorMessage);
                setIsLoading(false);
                toast.error(errorMessage, {
                    autoClose: 2000
                });
            });
    };
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='px-20'>


            <section className="bg-white">
                <div className="lg:grid lg:min- lg:grid-cols-12 lg:block h-16 hidden">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img src={images} alt="Frame5995.png" className='h-[39rem] w-[36rem] mt-[4rem] 
                            '/>
                    </aside>
                    <div className="flex  px-6  sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6 py-">
                        <main>
                            <div className="max-w-xl lg:max-w-3xl">
                                <a className="block text-blue-600" href="/">
                                    {/* <span class="sr-only">Home</span> */}
                                    {/* <svg
                                    class="h-8 sm:h-10 px-20"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg> */}
                                    <img src={images2} alt="Logo(1).png" className='px-20' />
                                </a>


                                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-2xl px-20">
                                    Welcome to McFestines! 👌
                                </h1>

                                <p className="mt-4 leading-relaxed text-gray-500 px-20 ">
                                    Create your account, let's get you started!
                                </p>

                                <div className='px-20'>

                                    <form onSubmit={handleSubmit} className="mt-8 grid-cols-6 gap-6">
                                        {/* <div class="col-span-6 sm:col-span-3 ">
            <label for="FirstName" class="block text-sm font-medium text-gray-700 shiftedText">
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              class="mt-1 w-[20rem] h-[2.5rem] rounded-full border-2 bg-white text-sm text-gray-900 border-gray-200"
            />
          </div> */}

                                        {/* <div class="col-span-6 sm:col-span-3">
            <label for="LastName" class="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              class="mt-1 w-[20rem] h-[2.5rem] rounded-full border-2 bg-white text-sm text-gray-900 border-gray-200"
              />
          </div> */}

                                        <div className="col-span-6">
                                            <label for="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                            <input
                                                type="email"
                                                id="Email"
                                                name="email"
                                                placeholder="example@gmail.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="mt-1 w-[20rem] px-3 h-[2.5rem] rounded-full border-2 bg-white text-sm text-gray-900 border-gray-200"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 mt-[2rem]">
                                            <label for="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                            <input
                                                type="password"
                                                id="Password"
                                                name="password"
                                                placeholder="*********"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                className="mt-[10px] w-[20rem] px-3 h-[2.5rem] rounded-full border-2 bg-white text-sm text-gray-900 border-gray-200"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 mt-[2rem]">
                                            <label for="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                                Re-type Password
                                            </label>

                                            <input
                                                type="password"
                                                id="PasswordConfirmation"
                                                name="password_confirmation"
                                                placeholder="*********"
                                                value={formData.password_confirmation}
                                                onChange={handleInputChange}
                                                className="mt-[10px] w-[20rem] px-3 h-[2.5rem] rounded-full border-2 bg-white text-sm text-gray-900 border-gray-200"
                                            />

                                        </div>

                                        <div className="col-span-6  mt-[0.4rem]">
                                            <label for="MarketingAccept" className="flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="MarketingAccept"
                                                    name="marketing_accept"
                                                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                                />

                                                <div className="col-span-6" >
                                                    <p className="text-sm text-gray-500">
                                                        I have read and agree with the
                                                        <a href="#" className="text-orange-400 "> privacy policy </a>
                                                        and <br />
                                                        <a href="#" className="text-orange-400 ">terms and condition</a>.
                                                    </p>
                                                </div>

                                            </label>
                                        </div>



                                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4 ">
                                            <div className='mt-[2rem]'>
                                                <button
                                                    type='button'
                                                    class=" shrink-0 rounded-full border border-[#F5EAD6] bg-[#F5EAD6] px-[5rem] py-2  text-sm font-medium text-gray-600 transition hover:bg-transparent hover:text-[#F5EAD6] focus:outline-none focus:ring active:text-[#F5EAD6] flex gap-1"
                                                >
                                                    <img src={images3} alt="Google.png" />
                                                    <p className=''>Sign up with google</p>
                                                </button>
                                                <button
                                                    type="submit"
                                                    class="inline-block shrink-0 rounded-full border border-[#CF9832]-600 bg-[#CF9832] px-[8.5rem] py-2  text-sm font-medium text-white transition hover:bg-transparent hover:text-[#CF9832] focus:outline-none focus:ring active:text-b[#CF9832] mt-[1rem]"
                                                >
                                                    <p className=''>Sign up</p>
                                                </button>

                                            </div>

                                        </div>
                                        <p class="mt-4 text-sm text-gray-500 sm:mt-2">
                                            Already have an account?
                                            <a href="#" class="text-[#CF9832] ">Log in</a>.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default SignUp;