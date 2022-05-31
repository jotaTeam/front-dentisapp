import { useReducer, useEffect } from "react"
import { getDataList } from "../../../crud/getDataList"
import { apiUrl } from "../../../datahelpers/apiURL"
import { adminTypes } from "../../../datahelpers/types"
import { adminReducer } from "../reducer/adminReducer"
import { adminContext } from "./adminContext"

const adminObject = {
	id: "",
	name: "",
	surnames: "",
	phone: "",
	medicalInfo: {
		allergy: false,
		descriptionAllergy: "",
		pathology: false,
		descriptionPathology: "",
	},
	simptom: {
		bleeding: false,
		pain: false,
		dental_movility: false,
		ulcer: false,
	},
	cause: {
		cavity: false,
		fracture: false,
		gums_problems: false,
		oral_hygiene: false,
	},
}

const initValue = () => {}

const AdminContextProvider = ({ children }) => {
	const [adminInfo, dispatch] = useReducer(adminReducer, adminObject, initValue)

	useEffect(() => {
		fetchDataToInitContext().then(data => {
			dispatch({
				type: adminTypes.setInitInfo,
				payload: data,
			})
		})
	}, [])

	async function fetchDataToInitContext() {
		const alldata = await Promise.allSettled([
			getDataList(apiUrl.emergency),
			getDataList(apiUrl.appointment),
		])
		const emergency = alldata[0].value.data
		const appointment = alldata[1].value.data

		return {
			emergency,
			appointment,
		}
	}

	return (
		<adminContext.Provider value={{ adminInfo, dispatch }}>
			{children}
		</adminContext.Provider>
	)
}

export default AdminContextProvider
