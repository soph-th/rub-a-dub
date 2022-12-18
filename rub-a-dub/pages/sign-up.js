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
import { ProgressBar as poopybutt } from "react-bootstrap/ProgressBar";
import { useEffect, useState } from "react";
import QuestionBox from "../Components/QuestionBox/QuestionBox";
import { nanoid } from "nanoid";
//import Dropdown from "../Components/Dropdown/Dropdown";
//import {questions} from "../signup-questions";

function SignUp() {
	const [progress, setProgress] = useState(1);
	let [newUser, setNewUser] = useState({
		id: nanoid(),
		name: "gill",
		role: "",
		spokenLanguage: "",
		location: "",
		programmingLanguage: [],
		photo: "",
		bio: "",
	});

	let match = "mentor";
	let skills = "specialities";
	let skilltext = "things you can mentor people in";

	let questions = {
		//input box
		1: {
			userinfo: "name",
			question: "what shall we call you?",
			description:
				"this is the name that will appear on your profile to other people on <app name>",
			answerselector: <input type='text' />,
		},

		//single select
		2: {
			question: "what can we help you find?",
			description:
				"find expert mentors, fledgling aspiring developer mentees or specialist collaborators to work with",
			answerselector: <input type='text' />,
		},

		//multi select
		3: {
			question: "which language do you speak?",
			description: `help us match you with ${match}s who speak the same language as you`,
			answerselector: <input type='text' />,
		},

		//single select
		4: {
			question: "where are you?",
			description: `help us match you with ${match}s in your area`,
			answerselector: <input type='text' />,
		},

		//multi select
		5: {
			question: `what are your ${skills}?`,
			description: `select ${skilltext}`,
			answerselector: <input type='text' />,
		},

		//photo?????
		6: {
			question: "add a photo!",
			description: "",
			answerselector: <input type='text' />,
		},

		//input box
		7: {
			question: "tell us a little bit about yourself",
			description:
				"tell other developers a bit about yourself, what you can offer and what you're looking for",
			answerselector: <input type='text' />,
		},

		//3 input boxes
		8: {
			question: "social media",
			description: "",
			answerselector: (
				<div>
					<input type='text' label='linkedIn' />
					<input type='text' label='twitter' />
					<input type='text' label='GitHub' />
				</div>
			),
		},
	};

	useEffect(() => {
		console.log(newUser.name);
	}, [newUser]);

	// function userInfo(newUser) {
	// 	setNewUser(...newUser, (questions[progress].userinfo = "bailey"));
	// 	console.log([questions[progress].userinfo]);
	// }

	return (
		<div>
			<h1>Hello, where is my progress bar?!?!?!</h1>
			<button
				onClick={() =>
					setNewUser(...newUser, (questions[progress].userinfo = "bailey"))
				}
			>
				Wanna set me?
			</button>
			{/* <ProgressBar now={(progress / 9) * 100} /> */}
			<QuestionBox
				question={questions[progress].question}
				description={questions[progress].description}
				answerselector={questions[progress].answerselector}
			></QuestionBox>
			<poopybutt />
		</div>
	);
}

export default SignUp;

// answerselector={
// 	<Dropdown
// 		options={[
// 			{ value: "linda", label: "linda" },
// 			{ value: "karen", label: "karen" },
// 		]}
// 		dropdownName='name'
// 		onChange={(e) => setName(e.value)}
// 		dropdownId='Name'
// 	/>
// }
