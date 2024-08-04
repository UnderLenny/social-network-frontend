import React from 'react'

import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'

const Layout: React.FC = () => {
	return (
		<div className='layout'>
			<SideBar />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
