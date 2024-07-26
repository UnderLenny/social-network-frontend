import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import './styles/index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
