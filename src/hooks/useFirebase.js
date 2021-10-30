import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading]=useState(true)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message)
            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setIsLoading(true)
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    return { signInWithGoogle, logOut, user, isLoading }
}
export { useFirebase };