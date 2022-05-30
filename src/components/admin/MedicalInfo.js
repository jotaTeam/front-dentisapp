import React, { useState } from "react"

const MedicalInfo = props => {
	const [info, setInfo] = useState(false)

	return (
		<div
			className={info ? "medical_info" : "hidden"}
			onClick={() => setInfo(!info)}>
			<p>
				cosasd rarndodfkdjn que me vienen a la mente que cosas no aveces no miro
				nada de lo quie es cribno pero bueno es algo cuasi normal un besito a
				todes y a mimi
			</p>
		</div>
	)
}

export default MedicalInfo
