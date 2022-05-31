import { updateData } from "../../../crud/updateData"
import { apiUrl } from "../../../datahelpers/apiURL"
import { adminTypes } from "../../../datahelpers/types"

export const adminReducer = (state = {}, action) => {
	const { type, payload } = action

	// console.log(type)
	// console.log(payload)

	switch (action.type) {
		case adminTypes.setInitInfo:
			console.log("setinfo")
			return {
				...action.payload,
			}

		case adminTypes.getAllEmergencies:
			return {
				...state,
				...action.payload,
			}
		case adminTypes.checkEmergency:
			//TODO call to api and update
			const { appointment, emergency } = action.payload.adminInfo
			const { id, state, index } = action.payload
			const checked = {
				checked: !state,
			}
			updateData(checked, id, apiUrl.emergency)

			emergency.emergency[index].checked = !state
			return {
				appointment,
				emergency,
			}
		case adminTypes.closeEmergency:
			return {
				...action.payload,
			}
		case adminTypes.getDateList:
			return {
				...action.payload,
			}
		case adminTypes.confirmDate:
			return {
				...action.payload,
			}
		case adminTypes.deleteDate:
			return {
				...action.payload,
			}

		default:
			return
	}
}
