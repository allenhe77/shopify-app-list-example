import "./App.css";
import { useState } from "react";

import deleteIcon from "./delete.png";

export default function App() {
	const [valueArr, setValueArr] = useState(["value one", "value two"]);

	const handleInputChange = (element) => {
		let elementChanged = element.target;
		let indexChanged = elementChanged.getAttribute("index");
		let tempArr = [...valueArr];
		tempArr[indexChanged] = element.target.value;
		setValueArr(tempArr);
		// console.log("asdasdasd");
	};

	const addValue = () => {
		setValueArr([...valueArr, "new value"]);
	};

	const handleDelete = (index) => {
		let tempArr = [...valueArr];
		tempArr.splice(index, 1);
		setValueArr(tempArr);
	};

	const handleSave = () => {
		return alert("this is suppose to contact backend server.");
	};

	return (
		<div className="App">
			{valueArr.map((e, index) => {
				return (
					<div>
						<TextInput
							eleValue={e}
							index={index}
							key={index}
							onChange={handleInputChange}
							onDelete={handleDelete}
						/>
					</div>
				);
			})}

			<button onClick={addValue}>Add</button>
			<button>Delete</button>
			<button onClick={handleSave}>Save</button>
		</div>
	);
}

function TextInput({ index, onChange, eleValue, onDelete }) {
	// const { index, onChange, eleValue } = props;
	return (
		<div>
			<input
				type="text"
				value={eleValue}
				index={index}
				onChange={(element) => onChange(element)}
			/>

			<img
				width="25px"
				height="25px"
				src={deleteIcon}
				alt="delete-icon"
				onClick={(e) => onDelete(index)}
			/>
		</div>
	);
}
