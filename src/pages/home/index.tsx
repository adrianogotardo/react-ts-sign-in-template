import { Navigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";

export default function HomePage(): JSX.Element {
    const { userCredentials } = useUserContext();

    if (!userCredentials) {
        console.log('you have to be logged to see this page');
        return <Navigate to="/bananinha" replace />;
    }

    return (
        <div>
            <h1>hello world</h1>
            <button onClick={() => console.log(userCredentials?.username)}> show name</button>
            <button onClick={() => console.log(userCredentials?.email)}> show email</button>
            <button onClick={() => console.log(userCredentials?.token)}> show token</button>
        </div>
    )
}


// useEffect(() => {
//     setUserCredentials({
//         username: 'adriano',
//         email: 'adrianogotardo.12@gmail.com',
//         token: 'ksdeuincvakefakcmekmfgiqwe',
//     });
// }, [])