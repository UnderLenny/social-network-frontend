import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './layout/Layout/Layout'
import { Context } from './main'
import './styles/index.scss'

const App: React.FC = () => {
	const { store } = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [store])

	useEffect(() => {
		if (store.isAuth) {
			navigate('/')
		} else {
			navigate('/login')
		}
	}, [store.isAuth, navigate])

	if (store.isLoading) {
		return <div>Загрузка</div>
	}

	return (
		<div>
			<Layout />
		</div>
	)
}

export default observer(App)
