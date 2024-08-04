import axios from 'axios'
import { AuthResponse } from '../models/response/AuthResponse'

export const API_URL = `http://localhost:5001/api/v1`

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

$api.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

$api.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
					withCredentials: true,
				})
				localStorage.setItem('token', response.data.accessToken)
				originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
				return $api.request(originalRequest)
			} catch (e) {
				console.log('Пользователь не авторизован')
			}
		}
		throw error
	}
)

export default $api
