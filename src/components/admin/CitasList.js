import { useContext, useEffect, useState } from "react"
import { BiLeftArrow } from "react-icons/bi"
import { adminContext } from "./context/adminContext"

export const CitasList = () => {
	const context = useContext(adminContext)
	const { adminInfo } = context
	const [isLoaded, setIsLoaded] = useState(false)
	const [info, setInfo] = useState(false)
	const emergencies = adminInfo?.data.emergency

	useEffect(() => {
		if (typeof adminInfo !== "undefined") {
			setIsLoaded(true)
		}
	}, [adminInfo])

	const handlerShowInfo = () => {
		setInfo(!info)
	}

	return (
		isLoaded &&
		emergencies.map((e, index) => (
			<div key={e.name} className='container'>
				<div className='personal_info'>
					<input
						type={"checkbox"}
						checked={e.checked}
						onChange={() => {
							console.log("au")
						}}
					/>
					<div>
						<p>{e.name}</p>
						<p>{e.surnames}</p>
						<p>{e.phone}</p>
					</div>
					<span className='arrow' onClick={handlerShowInfo}>
						<BiLeftArrow />
					</span>
				</div>
			</div>
		))
	)
}
