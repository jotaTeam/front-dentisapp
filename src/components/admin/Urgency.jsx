import { useState } from "react"

import { BiLeftArrow } from "react-icons/bi"
export const Urgency = ({
	name,
	surnames,
	phone,
	checked,
	id,
	medicalInfo,
}) => {
	const [moreInfo, setMoreInfo] = useState(false)

	const handlerShowInfo = () => {
		console.log(moreInfo)
		setMoreInfo(!moreInfo)
	}

	return (
		<div className='container'>
			<div className='personal_info'>
				<input
					type={"checkbox"}
					checked={checked}
					onChange={() => {
						console.log("au")
					}}
				/>
				<div>
					<p>{name}</p>
					<p>{surnames}</p>
					<p>{phone}</p>
				</div>
				<span className='arrow' onClick={handlerShowInfo}>
					<BiLeftArrow />
				</span>
			</div>
			<div className={moreInfo ? "medical_info" : "hidden"}>
				<p>
					cosasd rarndodfkdjn que me vienen a la mente que cosas no aveces no
					miro nada de lo quie es cribno pero bueno es algo cuasi normal un
					besito a todes y a mimi
				</p>
			</div>
		</div>
	)
}
