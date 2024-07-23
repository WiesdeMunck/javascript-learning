import React, { useState } from 'react';

export default function Calculator() {

	const [calculatorText, setCalculatorText] = useState('0');
	const [calculatorInput, setCalculatorInput] = useState('input');

	return (
		<section key={1} className="grid-item --center-grid-item">
			<div className="calculator">
				<div className="calculator__screen">
				<h3 className="calculator__screen-text">{calculatorInput}</h3>
					<h3 className="calculator__screen-text">{calculatorText}</h3>
				</div>
				<div className="calculator__buttons">
					<div className="calculator__buttons-col1">
						<div className="calculator__buttons-row-dark">
							{[...Array(3)].map((_, i) => (
								<button key={i} className="calculator__btn-dark">
									{i + 1}
								</button>
							))}
						</div>
						<div className="calculator__buttons-row-light">
						{[...Array(12)].map((_, i) => (
								<button key={i} className="calculator__btn-light">
									{i + 1}
								</button>
							))}
						</div>
					</div>
					<div className="calculator__buttons-col2">
					{[...Array(5)].map((_, i) => (
								<button key={i} className="calculator__btn-dark">
									{i + 1}
								</button>
							))}
					</div>


				</div>
			</div>
		</section>
	);
}
