import { useContext, useState, useEffect } from "react"
import { adminContext } from "./context/adminContext"
import { Urgency } from "./Urgency"

export const UrgenciasList = () => {
	const context = useContext(adminContext)
	const { adminInfo } = context
	const [isLoaded, setIsLoaded] = useState(false)
	const [emergencies, setEmergencies] = useState([])

	useEffect(() => {
		if (typeof adminInfo !== "undefined") {
			setIsLoaded(true)

			for (const key in adminInfo.data.emergency) {
				emergencies.push(adminInfo.data.emergency[key])
			}
		}
	}, [adminInfo])

	return (
		isLoaded &&
		emergencies?.map(e => (
			<Urgency
				name={e.name}
				surnames={e.surnames}
				phone={e.phone}
				key={e.name}
				id={e.id}
				checked={e.checked}
				medicalInfo={e.medicalInfo}
			/>
		))
	)
}
