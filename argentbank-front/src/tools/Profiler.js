import { userProfile } from '../redux/actions/user.actions.jsx';

export default async function Profiler(dispatch) {
        const token = sessionStorage.getItem("token")
        try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                        },
                });
                if (response.ok) {
                        const data = await response.json();
                        /* 
                            Checking that the query response is indeed retrieved
                            console.log(data) 
                        */
                        const userData = {
                                createdAt: data.body.createdAt,
                                updatedAt: data.body.updatedAt,
                                id: data.body.id,
                                email: data.body.email,
                                firstname: data.body.firstName,
                                lastname: data.body.lastName,
                                username: data.body.userName
                        }
                        /* Return user data in redux state */
                        dispatch(userProfile(userData));
                } else {
                        console.log("error while retrieving profile");
                }
        } catch (error) {
                console.error(error);
        };
};