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
		async function fetchData() {
			const data = await getDataList(apiUrl.emergency)

			dispatch({
				type: adminTypes.setInitInfo,
				payload: data,
			})
		}

		fetchData()
		// getDataList(apiUrl.emergency).then(response => {
		// 	// const { emergency } = response
		// 	const { data } = response

		// 	const { emergency } = data

		// 	const emergencyList = {
		// 		emergencies: {
		// 			...emergency,
		// 		},
		// 	}

		// 	dispatch({
		// 		type: adminTypes.setInitInfo,
		// 		payload: emergencyList,
		// 	})
		// })
	}, [])

	return (
		<adminContext.Provider value={{ adminInfo, dispatch }}>
			{children}
		</adminContext.Provider>
	)
}

export default AdminContextProvider
