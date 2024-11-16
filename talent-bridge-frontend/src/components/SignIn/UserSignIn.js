import axios from "axios";

const UserSignIn = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/signin', {
            email,
            password
        });

        if (response.status === 200) {
            const token = response.data.token;
            const role = response.data.role; 

            const freelancerData = response.data.freelancer; 
            localStorage.setItem('token', token);

            return { success: true, role: role,  freelancerData: freelancerData };
        } else {
            return { success: false, message: response.data.message || 'Sign-In Failed' };
        }
    } catch (error) {
        console.error('Error during sign-in:', error);
        return { success: false, message: error.message || 'Sign-In Error' };
    }
};

export default UserSignIn;
