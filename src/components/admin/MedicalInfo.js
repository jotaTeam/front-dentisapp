import { useState } from "react"

const MedicalInfo = ({ medicalInfo }) => {
	const { cause, simptom } = medicalInfo

	const causes = Object.keys(cause).filter(property => cause[property] === true)
	const simptoms = Object.keys(simptom).filter(
		property => cause[property] === true
	)

	const [info, setInfo] = useState(false)

	const anyProblem = causes.length > 0 || simptoms.length > 0

	return (
		<div
			className={info ? "medical_info" : "hidden"}
			onClick={() => setInfo(!info)}>
			{!anyProblem && <p>No problem here</p>}

			{anyProblem && (
				<p>
					{causes.length > 0 && causes.map(c => <p>{c}</p>)}
					{simptoms.length > 0 && simptoms.map(s => <p>{s}</p>)}
				</p>
			)}
		</div>
	)
}

export default MedicalInfo
