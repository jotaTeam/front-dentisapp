import React, { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../../auth/authContext"
import { useForm } from "../../hooks/useForm"
import { pass } from "../../datahelpers/pass"
import { types } from "../../datahelpers/types"
import "../../assets/styles/login.css"

export const Login = () => {
	const { user, dispatch } = useContext(AuthContext)

	const navigate = useNavigate()

	const lastPath = localStorage.getItem("lastPath") || "/"

	const [newUser, handleInputChange] = useForm({ name: "", pass: "" })

	const handleLogin = e => {
		e.preventDefault()
		const password = e.target[1].value

		if (password === "manoli") {
			const action = {
				payload: newUser,
				type: types.login,
			}

			dispatch(action)

			// 	// navigate("/admin")
			navigate(lastPath, {
				replace: true,
			})
		}
	}

	const handleLogout = e => {
		e.preventDefault()

		const action = {
			type: types.logout,
		}

		dispatch(action)

		navigate(lastPath, {
			replace: true,
		})
	}

	return (
		<>
			<h1>Login </h1>

			<h4>
				User: {user.logged ? `${user.name} (${user.pass})` : "no está logeado"}
			</h4>

			{!user.logged ? (
				<form className='login_form' onSubmit={handleLogin}>
					<img
						className='avatar'
						src='/assets/img/processed.png'
						alt='imagen de dientito'
					/>
					<input
						className='input_text'
						type='text'
						name='name'
						values={newUser.name}
						onChange={handleInputChange}
						placeholder='Introduce tu usuario'
					/>
					<input
						className='input_text'
						type='password'
						name='pass'
						placeholder='Introduce tu contraseña'
					/>

					<div className='radio-cont columns'>
						<input
							className='radio-login-option'
							type='radio'
							name='pass'
							id='radio-admin'
							value={pass.admin}
							onChange={handleInputChange}
						/>
						<label className='radio-login-label select' for='radio-admin'>
							Administración
						</label>

						<input
							className='radio-login-option select'
							type='radio'
							name='pass'
							id='radio-paciente'
							value={pass.patient}
							onChange={handleInputChange}
						/>
						<label className='radio-login-label' for='radio-paciente'>
							Paciente
						</label>
					</div>

					<button
						value={pass.admin}
						name='pass'
						className='button'
						type='submit'>
						Login
					</button>
				</form>
			) : (
				<form onSubmit={handleLogout}>
					<button type='submit'>Logout</button>
				</form>
			)}
		</>
	)
}
