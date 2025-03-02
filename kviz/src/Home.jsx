import { createSignal } from "solid-js";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "@solidjs/router";
import SignOut from "./Odjava";

export default function Home() {
    const session = useAuth();
    const [showSignOut, setShowSignOut] = createSignal(false);
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        setShowSignOut(true);
    };

    const redirectToHome = () => {
        navigate("/Prijava"); 
    };

    return (
        <div class="min-h-screen flex items-center justify-center bg-linear-65 from-purple-500 to-pink-500 ">
            <div class="border-top-5 border-black-300 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">Obrazovna igra</h1>
                
                {session() ? (
                    <div class="text-center">
                        <p class="text-lg text-gray-600 mb-4">
                           
                        </p>
                       

                        <button
                            onClick={handleSignOutClick}
                            class="bg-red-500 text-white p-2 rounded-xl w-full hover:bg-red-600 transition duration-300 mt-6">
                            Odjavi se
                        </button>

                        {showSignOut() && <SignOut />}
                    </div>
                ) : (
                    <div class="text-center">
                    <p class="text-gray-500 mb-4">Prijavite se za pristup trgovini.</p>
                    <button
                        onClick={redirectToHome}
                        class="bg-green-500 text-white p-2 rounded-xl w-full hover:bg-green-700 transition duration-300">
                        Prijavite se
                    </button>
                </div>
            )}
        </div>
    </div>
);
}
