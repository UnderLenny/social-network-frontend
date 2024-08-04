import { observer } from 'mobx-react-lite'
import { FC, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../main'

const LoginForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { store } = useContext(Context)

	const navigate = useNavigate()

	const handleLoginBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		store.login(email, password)
		navigate('/')
	}

	return (
		<div className={'flex flex-col items-center justify-center h-screen'}>
			<form className={'bg-white p-10 rounded-lg shadow-lg '}>
				<div className={'grid items-start gap-5'}>
					<h1 className={'text-center text-[23px] font-semibold'}>
						Авторизация
					</h1>
					<div className={'grid items-start gap-5'}>
						<input
							className={
								'w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email"'
							}
							onChange={e => setEmail(e.target.value)}
							value={email}
							type='text'
							placeholder='Email'
						/>
						<input
							className={
								'w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="пароль" id="пароль"'
							}
							onChange={e => setPassword(e.target.value)}
							value={password}
							type='password'
							placeholder='Пароль'
						/>
					</div>
					<div className='flex justify-center '>
						<button
							className={
								'px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg'
							}
							onClick={handleLoginBtn}
						>
							Войти
						</button>
					</div>

					<p className='text-[15px] font-medium block items-center text-center tracking-wide'>
						Нету аккаунта?
						<br /> Тогда вы можете
						<Link className={'text-blue-500 font-bold'} to='/register'>
							<span className={'px-1'}>зарегистрироваться🐰</span>
						</Link>
					</p>
				</div>
			</form>
		</div>
	)
}

export default observer(LoginForm)
