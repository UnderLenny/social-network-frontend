import { observer } from 'mobx-react-lite'
import { FC, useContext, useState } from 'react'
import { Context } from '../main'

const LoginForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { store } = useContext(Context)
	return (
		<div className={'flex flex-col items-center justify-center h-screen'}>
			<input
				onChange={e => setEmail(e.target.value)}
				value={email}
				type='text'
				placeholder='Email'
			/>
			<input
				onChange={e => setPassword(e.target.value)}
				value={password}
				type='password'
				placeholder='Пароль'
			/>
			<button onClick={() => store.login(email, password)}>Логин</button>
			<button onClick={() => store.registration(email, password)}>
				Регистрация
			</button>
		</div>
	)
}

export default observer(LoginForm)
