import RoutesApp from './routes';
import { AuthProvider } from './context/AuthContext';

function App() {
	return (
		<AuthProvider>
			<RoutesApp />
		</AuthProvider>
	);
}

export default App;
