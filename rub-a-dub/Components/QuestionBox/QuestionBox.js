/*
2. question box
    - question
    - mini description
    - answer selector type
        - 1 multi select dropdown
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

export default function QuestionBox({ question, description, answerselector }) {
	return (
		<div>
			<h1 className='question'>{question}</h1>
			<p className='question-description'>{description}</p>
			{answerselector}
			<div className='button-container'>
				<button>⬅️</button>
				<button>➡️</button>
			</div>
		</div>
	);
}
