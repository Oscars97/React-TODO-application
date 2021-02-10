import React, { useState } from "react";
import shortid from "shortid";
const Todolist = () => {
	let [tarea, setTarea] = useState("");
	let [listaTareas, setListaTareas] = useState([]);
	let restantes;
	if (listaTareas.length === 0) {
		restantes = "Add a to-do";
	} else {
		restantes = "You have " + listaTareas.length + " to-dos remaining";
	}
	const obtenerValor = e => {
		if (e.key.toLowerCase() === "enter") {
			let valor = e.target.value;
			setTarea((tarea = valor));
			setListaTareas([
				...listaTareas,
				{
					id: shortid.generate(),
					nombreTarea: tarea
				}
			]);
		}
		setTarea("");
	};
	function handleRemove(id) {
		const newList = listaTareas.filter(item => item.id !== id);

		setListaTareas(newList);
	}
	return (
		<div className="container">
			<h1>Todos</h1>
			<div className="input-group input-group-lg">
				<input
					placeholder="Agrega una tarea"
					onKeyPress={obtenerValor}
					type="text"
					className="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-lg"
				/>
			</div>

			<ul className="list-group d-flex">
				{listaTareas.map(item => (
					<li className="list-group-item" key={item.id}>
						<div className="task">
							<div className>
								<span className="lead">{item.nombreTarea}</span>
							</div>
							<div>
								<button
									className="btn btn-danger"
									type="button"
									onClick={() => handleRemove(item.id)}>
									<i className="far fa-trash-alt"></i>
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			<strong>{restantes}</strong>
		</div>
	);
};

export default Todolist;
