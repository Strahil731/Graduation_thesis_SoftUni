import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const navigateLogin = useNavigate();

    const [UserSignUp, SetUserSignup] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handleChange(e) {
        SetUserSignup({
            ...UserSignUp,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!UserSignUp.username || !UserSignUp.email || !UserSignUp.password) {
            alert("Please fill in all fields")
        }
        else {
            createUserWithEmailAndPassword(auth, UserSignUp.email, UserSignUp.password)
                .then(async (res) => {
                    const user = res.user;
                    await updateProfile(user, {
                        displayName: UserSignUp.username
                    });

                    navigateLogin("/login");
                })
                .catch((err) => alert(err.message))
        }
    }

    return (
        <>
            <div className="h-[90vh]">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Register
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        autoComplete="off"
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={UserSignUp.username}
                                        required
                                        className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        autoComplete="off"
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={UserSignUp.email}
                                        required
                                        className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        autoComplete="off"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={UserSignUp.password}
                                        required
                                        className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleSubmit}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}