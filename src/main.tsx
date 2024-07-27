import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Messenger } from './pages/Messanger/Messenger'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'messages',
		element: <Messenger />,
	},
])

const rootElement = document.getElementById('root')

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)
} else {
	console.error('Failed to find the root element')
}
