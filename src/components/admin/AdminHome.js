import { useContext, useEffect } from "react"
import { apiUrl } from "../../datahelpers/apiURL"
import { getDataList } from "../../crud/getDataList"
import { useState } from "react"
import LanguageSelector from "../LanguageSelector"
import { UrgenciasList } from "./UrgenciasList"
import "../../assets/styles/admin.css"
import { CitasList } from "./CitasList"
import { adminContext } from "./context/adminContext"


export const AdminHome = () => {
	const [selected, setSelected] = useState('date');
	const handleSelected = (selection) =>{
		setSelected(selection);
	
	  }


	

	const {adminInfo}  = useContext(adminContext)

	return (
		<>

	


			<LanguageSelector />

			<section className='home' >
				<div className='title-cont'>
					<h1 className='title-admin'>Gestiona las peticiones pendientes</h1>
				
				</div>
			

				<section className="admin-btn-cont">
				<div className="admin-btn emergency" onClick={()=>handleSelected('emer')}>
						  <h1>Emergencias </h1> 
						  {<h1 className="quantity-alert">{`${adminInfo?.emergency.emergency.length}`}</h1>}
				</div>
					
				<div className="admin-btn emergency" onClick={()=>handleSelected('date')}>
						<h1>Citas</h1> 
						{ <h1 className="quantity-alert">{`${adminInfo?.appointment.appointment.length}`}</h1> }
						
				</div>
					
				

				</section>
				
				{
						selected === 'emer'  && <div className='dashboard'> <div className='dashboard-container'>
						{/* <h2>Emergencias por tramitar</h2> */}
						<UrgenciasList />
						</div></div> 
					} 
						{
						selected === 'date' && <div className='dashboard'> <div className='dashboard-container'>
						{/* <h2>Citas por tramitar</h2> */}
						<CitasList />
						</div> </div> 
					}
					
				
			</section>
			
	
		</>
	)
}
