import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export const createUserWithEmail = (email:string, password:string) => {
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log(user.email);
        }).catch(error => {
            console.log(error);
        })
}
