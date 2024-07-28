import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import LeftPanel from './layout/LeftPanel/LeftPanel'
import { Context } from './main'
import { IUser } from './models/IUser'
import UserService from './services/UserService'
import './styles/index.scss'

const App: React.FC = () => {
	const { store } = useContext(Context)
	const [users, setUsers] = useState<IUser[]>([])

	const getUsers = async () => {
		try {
			const response = await UserService.fetchUsers()
			setUsers(response.data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [])

	if (store.isLoading) {
		return <div>Загрузка</div>
	}
	if (!store.isAuth) {
		return (
			<div>
				<LoginForm />
			</div>
		)
	}

	return (
		<div>
			{/* <h1>
				{store.isAuth
					? `Пользователь авторизован ${store.user.email}`
					: 'Пожалуйста авторизуйтесь'}
			</h1>
			<h1>
				{store.user.isActivated ? 'Аккаунт активирован' : 'Активируйте аккаунт'}
			</h1>
			<div>
				<button onClick={getUsers}>Получить пользователей</button>
			</div>
			{users.map(user => (
				<div key={user.email}>{user.email}</div>
			))} */}
			<LeftPanel />
		</div>
	)
}

export default observer(App)
