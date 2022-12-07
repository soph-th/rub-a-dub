//Dropdown component
//Path: App > SearchNav > AdvancedFilter > DROPDOWN
//To contain: mapped results of option for dropdown category
//Props: ??

import React from "react";
import Select from "react-select";

/**
 * Creates individual dropdown Select element, inheriting options, placeholder and onChange props. Select component is from React-Select library.
 */
export default function Dropdown({ options, dropdownName, onChange, dropdownId }) {
	console.log('dropdown options', options)
	return (
		<div className='dropdown' id='dropdown'>
			<label htmlFor={dropdownId} id='dropdownLabel' className='dropdownLabel'>
				{dropdownName}
			</label>
			<Select
				className='dropdownSelect'
				id={dropdownId}
				options={options}
				name={dropdownName}
				onChange={onChange}
			/>
		</div>
	);
}


// import { Dropdown } from "@nextui-org/react";
// let options = []
// export default function Droppy({ options, dropdownName, onChange, dropdownId }) {
// 	console.log(options)	
// 	return (
// 		  <Dropdown>
// 			<Dropdown.Button flat>{dropdownName}</Dropdown.Button>
// 			<Dropdown.Menu aria-label="Static Actions">
// 				{/* {options?.map((option)=>
// 				<Dropdown.Item key={option.id}>{option.label}</Dropdown.Item>
// 				)} */}

// 			</Dropdown.Menu>
// 		  </Dropdown>
// 		);
// 	  }
