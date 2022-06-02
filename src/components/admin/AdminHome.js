import { useEffect } from "react"
import { apiUrl } from "../../datahelpers/apiURL"
import { getDataList } from "../../crud/getDataList"
import { useState } from "react"
import LanguageSelector from "../LanguageSelector"
import { UrgenciasList } from "./UrgenciasList"
import "../../assets/styles/admin.css"
import { CitasList } from "./CitasList"

export const AdminHome = () => {
	const [data1, setData1] = useState()

	// context.dispatch()

	useEffect(() => {
		getDataList(apiUrl.emergency).then(data => setData1(data.data))
	}, [])

	return (
		<div style={{ textAlign: "center" }}>
			<LanguageSelector />

			<section className='home' style={{ marginBottom: "100px" }}>
				<div className='title-cont'>
					<h1 className='title'>Administración</h1>
					<hr />
				</div>
				<div className='dashboard'>
					<div className='dashboard-container'>
						<h2>Emergencias por tramitar</h2>
						<UrgenciasList />
					</div>
					<div className='dashboard-container'>
						<h2>citas por tramitar</h2>
						<CitasList />
					</div>
				</div>
			</section>
		</div>
	)
}
