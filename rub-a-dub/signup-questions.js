//import Select from "react-select/dist/declarations/src/Select";

let questions = {
	//input box
	1: {
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
