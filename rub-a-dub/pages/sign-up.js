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
import { useState } from "react";

function SignUp() {
	const [progress, setProgress] = useState(1);

	return (
		<div>
			<h1>Hello, where is my progress bar?!?!?!</h1>
            <button onClick={()=> setProgress(4)}>Wanna set me?</button>
			<ProgressBar now={(progress / 9) * 100} />
		</div>
	);
}

export default SignUp;
