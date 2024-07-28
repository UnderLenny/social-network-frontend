import React from 'react'
import { FaEnvelope, FaUserFriends } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { RiCompass3Fill, RiGroup2Fill } from 'react-icons/ri'

import { NavLink } from 'react-router-dom'
import Image from '../../assets/ava.png'

const LeftPanel: React.FC = () => {
	return (
		<div className='inline-flex flex-col items-start px-10 py-8 min-h-screen bg-gray-100'>
			<div className=' w-full max-w-xs '>
				<div className=' text-center mb-6'>
					<NavLink to='/' className='flex flex-col items-center'>
						<img className='w-24 rounded-full' src={Image} alt='Аватарка' />
						<h3 className='text-sm mt-2 font-semibold'>Leonid Gevorgyan</h3>
						<p className='text-gray-500'>@xd_lenny</p>
					</NavLink>
				</div>
				<nav>
					<ul className='space-y-4 '>
						<li>
							<NavLink
								to='/'
								className={
									'text-lg text-gray-800 hover:bg-black hover:text-white flex items-center center gap-2 px-5 py-2.5 rounded-lg ease-in duration-300'
								}
							>
								<RiCompass3Fill />
								Лента новостей
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/messages'
								className={
									'text-lg text-gray-800 hover:bg-black hover:text-white flex items-center center gap-2 px-5 py-2.5 rounded-lg ease-in duration-300'
								}
							>
								<FaEnvelope />
								Сообщения
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/groups'
								className={
									'text-lg text-gray-800 hover:bg-black hover:text-white flex items-center center gap-2 px-5 py-2.5 rounded-lg ease-in duration-300'
								}
							>
								<RiGroup2Fill />
								Сообщества
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/friends'
								className={
									'text-lg text-gray-800 hover:bg-black hover:text-white flex items-center center gap-2 px-5 py-2.5 rounded-lg ease-in duration-300'
								}
							>
								<FaUserFriends />
								Друзья
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/settings'
								className={
									'text-lg text-gray-800 hover:bg-black hover:text-white flex items-center center gap-2 px-5 py-2.5 rounded-lg ease-in duration-300'
								}
							>
								<IoSettings />
								Настройки
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default LeftPanel
