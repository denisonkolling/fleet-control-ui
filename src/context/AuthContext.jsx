import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [usersList, setUsersList] = useState(
		JSON.parse(localStorage.getItem('users_db')) || []
	);
	const [isLogged, setIsLogged] = useState(false);

	const addUser = (email, password) => {
		const newUser = {
			id: usersList.length + 1,
			email,
			password,
		};

		const newUserList = [...usersList, newUser];
		localStorage.setItem('users_db', JSON.stringify(newUserList));
		setUsersList(newUserList);
	};

	const login = (email, password) => {
		const user = usersList?.find((user) => user.email === email);

		if (!user) {
			return 'Incorrect username or password.';
		}

		if (user.password === password) {
			setIsLogged(true);
		} else {
			return 'Incorrect username or password.';
		}
	};

	const checkEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email);
	};

	const checkPassword = (password) => {
		const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
		return regex.test(password);
	};

	const logout = () => {
		setIsLogged(false);
	};

	return (
		<AuthContext.Provider
			value={{
				usersList,
				addUser,
				login,
				logout,
				isLogged,
				checkEmail,
				checkPassword,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
