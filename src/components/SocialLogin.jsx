import { FcGoogle } from "react-icons/fc";
import useAuth from "../hook/useAuth";


const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <button  onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-2 text-4xl  px-5  rounded-sm">
        <FcGoogle />
    </button>
    );
};

export default SocialLogin;