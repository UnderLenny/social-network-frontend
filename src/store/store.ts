import axios, { AxiosError } from 'axios'
import { makeAutoObservable } from 'mobx'
import { API_URL } from '../http'
import { IUser } from '../models/IUser'
import { AuthResponse } from '../models/response/AuthResponse'
import AuthService from '../services/AuthService'

export default class Store {
	user = {} as IUser
	isAuth = false
	isLoading = false
	errorMessage = ''

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(bool: boolean) {
		this.isAuth = bool
	}

	setUser(user: IUser) {
		this.user = user
	}

	setLoading(bool: boolean) {
		this.isLoading = bool
	}

	setErrorMessage(message: string) {
		this.errorMessage = message
	}

	async login(email: string, password: string) {
		try {
			const response = await AuthService.login(email, password)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
			this.setErrorMessage('')
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				this.setErrorMessage(err.response?.data?.message || 'Произошла ошибка')
			}
		}
	}

	async registration(
		email: string,
		password: string,
		name: string,
		surname: string
	) {
		try {
			const response = await AuthService.registration(
				email,
				password,
				name,
				surname
			)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
			this.setErrorMessage('')
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				this.setErrorMessage(err.response?.data?.message || 'Произошла ошибка')
			}
		}
	}

	async logout() {
		try {
			await AuthService.logout()
			localStorage.removeItem('token')
			this.setAuth(false)
			this.setUser({} as IUser)
			this.setErrorMessage('')
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				this.setErrorMessage(err.response?.data?.message || 'Произошла ошибка')
			}
		}
	}

	async checkAuth() {
		this.setLoading(true)
		try {
			const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
				withCredentials: true,
			})
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
			this.setErrorMessage('')
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				this.setErrorMessage(err.response?.data?.message || 'Произошла ошибка')
			}
		} finally {
			this.setLoading(false)
		}
	}

	getName() {
		return this.user.name
	}

	getSurname() {
		return this.user.surname
	}
}
