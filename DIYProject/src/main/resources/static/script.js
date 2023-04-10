window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();

})
const d = new Date;
const todaysDate = 0 + '' + d.getDate() + '-' + 0 + '' + d.getMonth() + '-' + d.getFullYear()
console.log(todaysDate);

function init() {
	console.log('In init')
	//*************************************** */
	//Add new project button and creating callback to newProjectForm Method
	let addDiv = document.getElementById('addProjectDiv');
	let button = document.createElement('button');
	button.name = 'addNew'
	button.type = 'button'
	button.id = 'addNewButton'
	button.textContent = 'Add New';
	button.addEventListener('click', function(e) {
		e.preventDefault();
		newProjectForm();
	});
	addDiv.appendChild(button);

	//**************************************** */
	//calling initial get to load list of projects
	loadAllProjects();
	//**************************************** */
	//Providing a break in the UI
	giveMeSpace(20);
	//**************************************** */
	//Query Single project
	let queryDiv = document.createElement('div');
	queryDiv.id = 'singleQueryDiv';
	document.body.appendChild(queryDiv);
	let divH2 = document.createElement('h2');
	divH2.textContent = 'Enter the ID of an above project to get further details';
	queryDiv.appendChild(divH2);
	let singleForm = document.createElement('form');
	singleForm.name = 'singleProjectForm';
	let inputField = document.createElement('input');
	inputField.type = 'number';
	inputField.name = 'projectId';
	singleForm.appendChild(inputField);
	let singleProjectSubmit = document.createElement('input')
	singleProjectSubmit.type = 'submit';
	singleProjectSubmit.name = 'submit';
	singleProjectSubmit.addEventListener('click', function(e) {
		e.preventDefault();
		loadSingleProject(inputField.value);
	})
	singleForm.appendChild(singleProjectSubmit);
	queryDiv.appendChild(singleForm);


}

function newProjectForm() {
	giveMeSpace(20);
	let div = document.getElementById('newProjectFormDiv');
	div.textContent = '';

	div.textContent = 'Please enter a new project';
	let newForm = document.createElement('form');
	newForm.name = 'newProjectForm';
	div.appendChild(newForm);
	
	let divBreak = document.createElement('div')
	let label = document.createElement('label');
	label.textContent = "Task: ";
	divBreak.appendChild(label);
	let inputField = document.createElement('input');
	inputField.type = 'text';
	inputField.name = 'task';
	inputField.required = 'required';
	inputField.placeholder = "Project Task"
	divBreak.appendChild(inputField);
	newForm.appendChild(divBreak);

	divBreak = document.createElement('div')
	label = document.createElement('label');
	label.textContent = "Location: ";
	divBreak.appendChild(label);
	let select = document.createElement('select');
	select.name = 'location';
	select.required = 'required';
	let option = document.createElement('option');
	option.value = 2;
	option.textContent = 'Office';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 3;
	option.textContent = 'Guest Bathroom';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 4;
	option.textContent = 'Guest Bedroom';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 6;
	option.textContent = 'Kitchen';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 9;
	option.textContent = 'Living Room';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 13;
	option.textContent = 'Front Yard';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 14;
	option.textContent = 'BackYard';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 15;
	option.textContent = 'Deck';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 16;
	option.textContent = 'Garden';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 18;
	option.textContent = 'Patio';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 21;
	option.textContent = 'Garage';
	select.appendChild(option);
	divBreak.appendChild(select);
	newForm.appendChild(divBreak);

	divBreak = document.createElement('div')
	let br = document.createElement('br');
	label = document.createElement('label');
	label.textContent = "Description: ";
	divBreak.appendChild(label);
	divBreak.appendChild(br);
	inputField = document.createElement('textarea');
	inputField.type = 'text';
	inputField.name = 'description';
	inputField.placeholder = "Project Description"
	inputField.rows = "4";
	inputField.cols = "50";
	divBreak.appendChild(inputField);
	newForm.appendChild(divBreak);


	divBreak = document.createElement('div')
	label = document.createElement('label');
	label.textContent = "DIY?: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'checkbox';
	inputField.name = 'diy';
	inputField.checked = "true"
	divBreak.appendChild(inputField);
	newForm.appendChild(divBreak);

	divBreak = document.createElement('div')
	label = document.createElement('label');
	label.textContent = "Inside?: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'checkbox';
	inputField.name = 'interior';
	inputField.checked = "true"
	divBreak.appendChild(inputField);
	newForm.appendChild(divBreak);
	
	divBreak = document.createElement('div')
	label = document.createElement('label');
	label.textContent = "Esimated Cost: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'number';
	inputField.name = 'estCost';
	inputField.placeholder = "Estimated Cost"
	divBreak.appendChild(inputField);
	newForm.appendChild(divBreak);
	
	divBreak = document.createElement('div')
	label = document.createElement('label');
	label.textContent = "Start Date: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'date';
	inputField.name = 'dateStarted';
	inputField.placeholder = "Start Date"
	divBreak.appendChild(inputField);
	newForm.appendChild(divBreak);
	let newProjectSubmit = document.createElement('input')
	newProjectSubmit.type = 'submit';
	newProjectSubmit.name = 'submit';
	newForm.appendChild(newProjectSubmit);


	newProjectSubmit.addEventListener('click', function(e) {
		e.preventDefault();
		let form = document.newProjectForm;
		let diy;
		if (form.diy.value === 'on') {
			diy = true;
		} else {
			diy = false;
		}
		
		let interior;
		if (form.interior.value === 'on') {
			interior = true;
		} else {
			interior = false;
		}
			let project = {
			task: form.task.value,
			description: form.description.value,
			diy: diy,
			interior: interior,
			estCost: form.estCost.value,
			dateStart:	form.dateStarted.value,
			location: {
				"id": form.location.value,
				"name": form.location.textContent
				}
		}
		
		console.log(project);
		if (project != null) {
		newProjectPost(project);
		}
	})

	document.body.appendChild(div);

}

function newProjectPost(project) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/projects', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let newProject = JSON.parse(xhr.responseText);
				console.log(newProject);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};


	let projectObject = JSON.stringify(project); // Convert JS object to JSON string

	// Pass JSON as request body
	xhr.send(projectObject);
	window.location.reload();

}


function loadSingleProject(projectId) {
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'api/projects/' + projectId);
	console.log(projectId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let singleProject = JSON.parse(xhr.responseText);
				displaySingleProject(singleProject)
			} else {
				console.error('Project Not Found' + projectId);
			}
		}
	};
	xhr.send();
}

function displaySingleProject(project) {
	let projectDiv = document.getElementById('singleProjectDiv')
	projectDiv.textContent = '';
	let projectTable = document.createElement('table');
	projectDiv.appendChild(projectTable);
	let thead = document.createElement('thead');
	projectTable.appendChild(thead);
	let tr = document.createElement('tr');
	thead.appendChild(tr);
	let th = document.createElement('th');
	th.textContent = "ID"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "TASK"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "LOCATION"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "DESCRIPTION"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "INTERIOR/EXTERIOR"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "EST. COST"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "DATE STARTED"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "DATE FINISHED"
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "FINAL COST"
	tr.appendChild(th);
	let tbody = document.createElement('tbody');
	projectTable.appendChild(tbody);
	let bRow = document.createElement('tr');
	tbody.appendChild(bRow);
	let bData = document.createElement('td');
	bData.textContent = project.id;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	bData.textContent = project.task;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	bData.textContent = project.location.name;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	bData.textContent = project.description;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	if (project.interior === true) {
		bData.textContent = 'Interior';
		bRow.appendChild(bData);
	} else {
		bData.textContent = 'Exterior';
		bRow.appendChild(bData);
	}
	bData = document.createElement('td');
	bData.textContent = project.estCost;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	bData.textContent = project.dateStart;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	bData.textContent = project.dateFinish;
	bRow.appendChild(bData);
	bData = document.createElement('td');
	bData.textContent = project.actualCost;
	bRow.appendChild(bData);

	document.body.appendChild(projectDiv);


}

function loadAllProjects() {
	//XHR Stuff
	let xhr = new XMLHttpRequest()
	xhr.open('GET', 'api/projects');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let projectData = JSON.parse(xhr.responseText);
				displayProjectList(projectData)
			}
		}
	};
	xhr.send();

}

function displayProjectList(projects) {
	//DOM Stuff
	let tbody = document.getElementById('listBody')
	tbody.textContent = '';
	for (let project of projects) {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = project.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = project.task;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = project.location.name;
		tr.appendChild(td);
		td = document.createElement('td');
		tr.appendChild(td);
		let edit = document.createElement('button');
		edit.textContent = "  Edit  ";
		edit.style.color = 'orange';
		edit.style.background = 'lightgrey';
		edit.addEventListener('click', function(e) {
			e.preventDefault();
			updateProject(project, project.id);
			
		})
		tr.appendChild(edit);
		let delButton = document.createElement('button');
		delButton.textContent = "Delete";
		delButton.style.color = 'red';
		delButton.style.background = 'lightgrey';
		delButton.addEventListener('click', function(e){
			e.preventDefault();
			confirm('Are you sure you want to delete?')
			if(confirm) {
				deleteProject(project.id);
			}
		})
		tr.appendChild(delButton);
	}
}

function updateProject(project, projectId) {
	
	giveMeSpace(20);
	
	let updateDiv = document.createElement('div');
	updateDiv.textContent = '';
	
	updateDiv.textContent = 'Please update project';
	let updateForm = document.createElement('form');
	updateForm.name = 'updateProjectForm';
	updateDiv.appendChild(updateForm);
	let br = document.createElement('br');
	let divBreak = document.createElement('div')
	let label = document.createElement('label');
	label.textContent = "Task: ";
	divBreak.appendChild(label);
	let inputField = document.createElement('input');
	inputField.type = 'text';
	inputField.name = 'task';
	inputField.value = project.task;
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak);

	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "Location: ";
	divBreak.appendChild(label);
	let select = document.createElement('select');
	select.name = 'location';
	select.required = 'required';
	select.value = project.location;
	let option = document.createElement('option');
	option.value = 2;
	option.textContent = 'Office';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 3;
	option.textContent = 'Guest Bathroom';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 4;
	option.textContent = 'Guest Bedroom';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 6;
	option.textContent = 'Kitchen';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 9;
	option.textContent = 'Living Room';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 13;
	option.textContent = 'Front Yard';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 14;
	option.textContent = 'BackYard';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 15;
	option.textContent = 'Deck';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 16;
	option.textContent = 'Garden';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 18;
	option.textContent = 'Patio';
	select.appendChild(option);
	option = document.createElement('option');
	option.value = 21;
	option.textContent = 'Garage';
	select.appendChild(option);
	divBreak.appendChild(select);
	updateForm.appendChild(divBreak);
	
	
	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "Description: ";
	divBreak.appendChild(label);
	divBreak.appendChild(br);
	inputField = document.createElement('textarea');
	inputField.type = 'text';
	inputField.name = 'description';
	inputField.value = project.description;
	inputField.rows = "4";
	inputField.cols = "50";
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak);
	
	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "DIY?: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'checkbox';
	inputField.name = 'diy';
	inputField.checked = "true"
	inputField.value = project.diy;
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak);
	
	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "Inside?: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'checkbox';
	inputField.name = 'interior';
	inputField.checked = "true"
	inputField.value = project.interior;
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak)

	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "Esimated Cost: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'number';
	inputField.name = 'estCost';
	inputField.value = project.estCost;
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak);

	divBreak = document.createElement('div')
    label = document.createElement('label');
    label.textContent = "Actual Cost: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'number';
	inputField.name = 'actualCost';
	inputField.placeholder = "Actual Cost"
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak)

	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "Start Date: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'date';
	inputField.name = 'dateStarted';
	inputField.value = project.dateStart;
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak)
	
	divBreak = document.createElement('div')
    label = document.createElement('label');
	label.textContent = "Finish Date: ";
	divBreak.appendChild(label);
	inputField = document.createElement('input');
	inputField.type = 'date';
	inputField.name = 'dateFinish';
	inputField.placeholder = "Finish Date"
	divBreak.appendChild(inputField);
	updateForm.appendChild(divBreak)

	let updateProjectSubmit = document.createElement('input')
	updateProjectSubmit.type = 'submit';
	updateProjectSubmit.name = 'submit';
	updateForm.appendChild(updateProjectSubmit);


	updateProjectSubmit.addEventListener('click', function(e) {
		e.preventDefault();
		let form = document.updateProjectForm;
		let diy;
		if (form.diy.value === 'on') {
			diy = true;
		} else {
			diy = false;
		}
		
		let interior;
		if (form.interior.value === 'on') {
			interior = true;
		} else {
			interior = false;
		}
			let project = {
			task: form.task.value,
			description: form.description.value,
			diy: diy,
			interior: interior,
			estCost: form.estCost.value,
            actualCost: form.actualCost.value,
			dateStart:	form.dateStarted.value,
            dateFinish: form.dateFinish.value,
			location: {
				"id": form.location.value,
				"name": form.location.textContent
				}
		}
		
		console.log(project);
		if (project != null) {
		updateProjectPut(project, projectId);
		}
	})

	document.body.appendChild(updateDiv);
	
}

function updateProjectPut(project, projectId) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/projects/' + projectId, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let updateProject = JSON.parse(xhr.responseText);
				console.log(updateProject);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};


	let projectObject = JSON.stringify(project); // Convert JS object to JSON string

	xhr.send(projectObject);
	window.location.reload();
}
	

function deleteProject(projectId) {
		let xhr = new XMLHttpRequest()
	xhr.open('DELETE', 'api/projects/' + projectId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				//let deleteResponse = JSON.parse(xhr.responseText);
				console.log("Deleted");
			}
		}
	};
	xhr.send();
	window.location.reload();
}

function giveMeSpace(marginNum) {
	let spaceDiv = document.createElement('div');
	spaceDiv.style = "margin-top: " + marginNum + "px";
	document.body.appendChild(spaceDiv);
}
