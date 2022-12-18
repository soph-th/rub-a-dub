/*
COMPONENTS:
1. loading bar
2. question box
    - question
    - mini description
    - answer selector type
        - 1 multip select dropdown
        - 1 single select dropdown
        - text input field
    - answer selector quantity
    - buttons
        - same button but difference text values (forward and back)
        - coniditonal 
            - if progress < 2/9, activate back button
    - skip for now
    - coniditonal 
            - if progress < 2/9, activate skip for now button
 */
import ProgressBar from "react-bootstrap/ProgressBar";
import { useEffect, useState } from "react";
import QuestionBox from "../Components/QuestionBox/QuestionBox";
import Dropdown from "../Components/Dropdown/Dropdown";

function SignUp() {
	const [progress, setProgress] = useState(1);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log(name);
	}, [name]);

	return (
		<div>
			<h1>Hello, where is my progress bar?!?!?!</h1>
			<button onClick={() => setProgress(4)}>Wanna set me?</button>
			<ProgressBar now={(progress / 9) * 100} />
			<QuestionBox
				question={"whats your name?"}
				description={"is it thoooo?"}
				answerselector={
					<Dropdown
						options={[
							{ value: "linda", label: "linda" },
							{ value: "karen", label: "karen" },
						]}
						dropdownName='name'
						onChange={(e) => setName(e.value)}
						dropdownId='Name'
					/>
				}
			></QuestionBox>
		</div>
	);
}

export default SignUp;
