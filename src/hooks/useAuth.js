import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext';


const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('The App must be used within a AppProvider');
	}

	return context;
};

export default useAuth;