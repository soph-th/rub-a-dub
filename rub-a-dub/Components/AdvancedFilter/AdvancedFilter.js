//Advanced Filter component
//Path: App > SearchNav > ADVANCEDFILTER > Dropdown
//To contain: Dropdown
//Props: ??

import { useEffect, useState } from "react";
import Droppy from "../Dropdown/Dropdown";
import Dropdown from "../Dropdown/Dropdown";

/**
 * Creates three dropdown Select menus, each containing a filtering option (programming language, spoken language, location)
 * @param {*} param0
 * @returns three Select dropdowns
 */
function AdvancedFilter({
	onChangeProgrammingLang,
	onChangeLocation,
	onChangeSpokenLang,
}) 

{
	const [programmingLanguageData, setProgrammingLanguageData] = useState({});
	const [spokenLanguageData, setSpokenLanguageData] = useState({});
	const [locationData, setLocationData] = useState({});
	
	async function getTableData() {
		const programmingLanguageResponse = await fetch(
			"http://localhost:3000/tables/programming_languages",
			{ method: "GET", headers: { accept: "application/JSON" } }
		);
		const programmingLanguageResponseJson = await programmingLanguageResponse.json();
		setProgrammingLanguageData(programmingLanguageResponseJson.payload);
			
		const locationResponse = await fetch("http://localhost:3000/tables/locations", {
			method: "GET",
			headers: { accept: "application/JSON" },
		});
		const locationResponseJson = await locationResponse.json();
		setLocationData(locationResponseJson.payload);

		const spokenLanguageResponse = await fetch(
			"http://localhost:3000/tables/spoken_languages",
			{ method: "GET", headers: { accept: "application/JSON" } }
		);
		const spokenLanguageResponseJson = await spokenLanguageResponse.json();
		setSpokenLanguageData(spokenLanguageResponseJson.payload);
		}
	


	useEffect(() => {
		getTableData();
	}, []);

	return (
		<>
			<p className='adv-filter-title'>ADVANCED FILTER</p>
			<div
				className='advanced-filter'
				id='advanced-filter'
				data-cy='dropdownMenus'
			>
				<Dropdown
					data-cy='programmingLanguageDropdown'
					options={programmingLanguageData}
					onChange={onChangeProgrammingLang}
					dropdownName='Programming language'
					dropdownId='programming_language'
				/>

				<Dropdown
					data-cy='locationDropdown'
					options={locationData}
					onChange={onChangeLocation}
					dropdownName='Location'
					dropdownId='location'
				/>
				<Dropdown
					data-cy='spokenLanguageDropdown'
					options={spokenLanguageData}
					onChange={onChangeSpokenLang}
					dropdownName='Spoken language'
					dropdownId='spoken_language'
				/>


				{/* <Droppy
					data-cy='programmingLanguageDropdown'
					options={programmingLanguageData}
					onChange={onChangeProgrammingLang}
					dropdownName='Programming language'
					dropdownId='programming_language'
				/> */}

				{/* <Droppy
					data-cy='locationDropdown'
					options={locationData}
					onChange={onChangeLocation}
					dropdownName='Location'
					dropdownId='location'
				/>
				<Droppy
					data-cy='spokenLanguageDropdown'
					options={spokenLanguageData}
					onChange={onChangeSpokenLang}
					dropdownName='Spoken language'
					dropdownId='spoken_language'
				/> */}


			</div>
		</>
	);
}

export default AdvancedFilter;
