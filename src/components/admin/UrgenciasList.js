import { useContext, useState, useEffect } from "react"
import { adminContext } from "./context/adminContext"
import { BiLeftArrow } from "react-icons/bi"

import MedicalInfo from "./MedicalInfo"
import { adminTypes } from "../../datahelpers/types"

export const UrgenciasList = () => {
	const context = useContext(adminContext)
	const { adminInfo, dispatch } = context
	const [isLoaded, setIsLoaded] = useState(false)
	const [info, setInfo] = useState(false)
	const emergencies = adminInfo?.emergency.emergency

	console.log(emergencies)

	useEffect(() => {
		if (typeof adminInfo !== "undefined") {
			setIsLoaded(true)
		}
	}, [adminInfo])

	const handlerShowInfo = () => {
		setInfo(!info)
	}

	const handleCheck = (index, id, state) => {
		dispatch({
			type: adminTypes.checkEmergency,
			payload: {
				adminInfo,
				index,
				id,
				state,
			},
		})
	}

	return (
		isLoaded &&
		emergencies.map((e, index) => (
			<div
				key={e.name}
				className={e.checked ? "container-checked" : "container"}>
				<div className='personal_info'>
					<input
						type={"checkbox"}
						checked={e.checked}
						onChange={() => {
							handleCheck(index, e.id, e.checked)
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

				<MedicalInfo medicalInfo={e.medicalInfo} />
			</div>
		))
	)
}
