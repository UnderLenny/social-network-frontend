import { observer } from 'mobx-react-lite'
import { FC, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../main'

const RegisterForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const { store } = useContext(Context)

	const navigate = useNavigate()

	const handleRegisterBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		store.registration(email, password, name, surname)
		navigate('/login')
	}
	return (
		<div
			className={
				'flex flex-col items-center justify-center h-screen bg-[#E7E7E7] bg-cover bg-center'
			}
		>
			<form className={'bg-white px-10 py-16 rounded-lg shadow-lg '}>
				<div className={'grid items-start gap-5'}>
					<h1 className={'font-semibold text-[23px] text-center'}>
						Регистрация
					</h1>
					<div className={'flex gap-2'}>
						<input
							className={
								'w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="name" id="name"'
							}
							onChange={e => setName(e.target.value)}
							value={name}
							type='text'
							placeholder='Имя'
						/>

						<input
							className={
								'w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="surname" id="surname""'
							}
							onChange={e => setSurname(e.target.value)}
							value={surname}
							type='text'
							placeholder='Фамилия'
						/>
					</div>

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
				<div className='flex justify-center mt-5'>
					<button
						className={
							'px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg'
						}
						onClick={handleRegisterBtn}
					>
						Зарегистрироваться
					</button>
				</div>
				<p className='text-[15px] font-medium block items-center text-center tracking-wide mt-6'>
					Уже зарегистрировались?
					<br />
					Тогда вы можете
					<Link className={'text-blue-500 font-bold'} to='/login'>
						<span className={'px-1'}>авторизоваться🦝</span>
					</Link>
				</p>
			</form>
		</div>
	)
}

export default observer(RegisterForm)
