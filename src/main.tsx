import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Friends from './pages/Friends/Friends'
import Groups from './pages/Groups/Groups'
import { Messenger } from './pages/Messenger/Messenger'
import Settings from './pages/Settings/Settings'
import Store from './store/store'

const store = new Store()

export const Context = createContext({
	store,
})

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: 'messages', element: <Messenger /> },
			{ path: 'groups', element: <Groups /> },
			{ path: 'friends', element: <Friends /> },
			{ path: 'settings', element: <Settings /> },
		],
	},
	{ path: '/register', element: <RegisterForm /> },
	{ path: '/login', element: <LoginForm /> },
])

const rootElement = document.getElementById('root')

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<Context.Provider value={{ store }}>
			<RouterProvider router={router} />
		</Context.Provider>
	)
} else {
	console.error('Failed to find the root element')
}
