import { useContext, useState, useEffect } from "react"
import { adminContext } from "./context/adminContext"
import { BiLeftArrow } from "react-icons/bi"

import MedicalInfo from "./MedicalInfo"

export const UrgenciasList = () => {
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
		emergencies.map(e => (
			<div key={e.name} className='container'>
				<div className='personal_info'>
					<input
						type={"checkbox"}
						checked={e.checked}
						onChange={() => {
							console.log(e.id)
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

				<MedicalInfo />
			</div>
		))
	)
}
