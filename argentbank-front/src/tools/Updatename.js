import { updateUsername } from '../redux/actions/user.actions.jsx';

export default async function Updatename(userName, dispatch, setDisplay ) {
        const token = sessionStorage.getItem("token")
        try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'PUT',
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                        },
                        body: JSON.stringify({ userName }),
                });
                if (response.ok) {
                        const data = await response.json();
                        const username = data.body.userName;
                        /* 
                            Checking that the query response is indeed retrieved
                            console.log(data) 
                        */
                        dispatch(updateUsername(username));
                        setDisplay(false);
                } else {
                        console.log("Invalid Fields")
                }

        } catch (error) {
                console.error(error);
        }
}