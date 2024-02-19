import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/Images/Frame 59955.png';
import images2 from '../assets/Images/Logo (1).png';
import images3 from '../assets/Images/Google.png';
import useAuthentication from '../hooks/UseAuthentication';




function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { simulateLogin, isLoading } = useAuthentication();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        simulateLogin(formData);
        // navigate('/');
    };


    return (
        <div className='px-20'>


            <section className="bg-white">
                <div className="lg:grid lg:min- lg:grid-cols-12">
                    <aside className="relative lg:block h-16 hidden lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img src={images} alt="Frame5995.png" className='h-[39rem] w-[36rem] mt-[4rem] 
                            '/>
                    </aside>
                    <div className="flex  px-6  sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6">
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


                                <h1 className=" text-gray-900  md:text-[27px] px-[5rem] mt-[5rem]">
                                    Hi there, welcome back😜
                                </h1>

                                <p className="mt-4 leading-relaxed text-gray-500 px-20 ">
                                    Please enter your details to login.
                                </p>

                                <div className='px-20'>

                                    <form onSubmit={ handleSubmit} className="mt-8 grid-cols-6 gap-6" >

                                        {/* What is this for if you know you no longer need sth get rid of it so we can have some cleanups and revamped codebase */}

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
                                            <label for="Email" className="block text-sm font-medium text-gray-700"> Email address</label>

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
                                                className="mt-[10px] w-[20rem] h-[2.5rem] px-3 rounded-full border-2 placeholder:mt-2 bg-white text-sm text-gray-900 border-gray-200 flex items-center "
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

                                                <div className="col-span-6 flex justify-around gap-[5.5rem]">
                                                    <p className="text-sm text-gray-500 mr-[5px]">
                                                        Remember me
                                                    </p>
                                                    <p className="text-sm text-[#CF9832] mr-[5px]">Forget password?</p>
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
                                                    <p className=''>Sign in with google</p>
                                                </button>
                                                <button
                                                    type="submit"
                                                    class="inline-block shrink-0 rounded-full border border-[#CF9832]-600 bg-[#CF9832] px-[8.5rem] py-2  text-sm font-medium text-white transition hover:bg-transparent hover:text-[#CF9832] focus:outline-none focus:ring active:text-b[#CF9832] mt-[1rem]"
                                                >
                                                    <p className=''>{isLoading ? "Signing in" : "Sign in"}</p>
                                                </button>

                                            </div>

                                        </div>
                                        <p class="mt-4 text-sm text-gray-500 sm:mt-2">
                                            Don't have an account?
                                            <Link to="/signUp" class="text-[#CF9832] ">Sign up</Link>.
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

export default Login;