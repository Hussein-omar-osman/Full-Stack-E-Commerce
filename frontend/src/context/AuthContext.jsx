import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	let [user, setUser] = useState(
		localStorage.getItem('user')
			? JSON.parse(localStorage.getItem('user'))
			: 'No user found'
	);
	let [authToken, setAuthToken] = useState(
		localStorage.getItem('authToken')
			? JSON.parse(localStorage.getItem('authToken'))
			: null
	);

	const logout = () => {
		localStorage.removeItem('authToken');
		localStorage.removeItem('user');
		navigate('/login/');
	};

	let contextData = {
		user: user,
		authToken: authToken,
		setAuthToken: setAuthToken,
		setUser: setUser,
		logout: logout,
	};

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};
