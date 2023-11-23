// /* eslint-disable react/no-unescaped-entities */
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import google from '../../assets/google.jpg'


// const Login = () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     const googleLogin = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 console.log(result);
//                 window.location.href = '/';
//             })
//             .catch((error) => console.log(error))
//     }

//     const { signIn } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const [errorMessage, setErrorMessage] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const from = location.state?.from?.pathname || "/";

//         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//         if (!email.match(emailRegex)) {
//             setErrorMessage('Invalid email format. Please enter a valid email address.');
//             return;
//         }

//         signIn(email, password)
//             .then(() => {
//                 setErrorMessage('');

//                 Swal.fire({
//                     position: 'center',
//                     icon: 'success',
//                     title: 'You have successfully logged in !',
//                     showConfirmButton: false,
//                     timer: 2000
//                 });

//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 console.log(error.code)
//                 if (error.code === 'auth/invalid-login-credentials') {
//                     setErrorMessage("Invalid email or password !");
//                 } else if (error.code === 'auth/user-not-found') {
//                     setErrorMessage('Email not registered. Please sign up.');
//                 } else {
//                     console.error(error);
//                 }
//             });
//     };

//     return (
//         <div>
//             <div className="bg-gray-100 flex items-center justify-center py-16">
//                 <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Login</h2>
//                     <form onSubmit={handleLogin}>
//                         <div className="mb-4">
//                             <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
//                             <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your email" required />
//                         </div>
//                         <div className="mb-6">
//                             <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
//                             <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your password" required />
//                         </div>
//                         {errorMessage && (
//                             <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
//                         )}
//                         <div className="mb-6">
//                             <button type="submit" className="w-full bg-green-300 py-2 px-4 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 font-medium">Login</button>
//                         </div>
//                         <div className="mb-6 flex justify-center items-center">
//                             <img onClick={googleLogin} className='w-16 h-16 rounded-full cursor-pointer' src={google} alt="" />
//                         </div>
//                     </form>
//                     <p className="text-gray-600 text-sm text-center">Don't have an account? <Link to="/register" className="text-green-400">Register</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;