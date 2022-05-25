window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
  });
  
  const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('empPayrollList') ? JSON.parse(localStorage.getItem('empPayrollList')) : [];
  }
  
  //template using literal ES6 feature
  const createInnerHtml = () => {
    const headerHtml = `<tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>StartDate</th>
        <th>Actions</th>
    </tr>`
    if(empPayrollList.length == 0 ) return;
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList){
      innerHtml = `${innerHtml}
        <tr>
          <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>${getDeptHtml(empPayrollData._department)}</td>
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td>
          <img name="${empPayrollData._name}" onclick="remove(this)" src="../assets/Icons/delete-black-18dp.svg" alt="delete">
          <img name="${empPayrollData._name}" onclick="update(this)" src="../assets/Icons/create-black-18dp.svg" alt="edit">
          </td>
        </tr>  
      `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
  }
  
  const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
      deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }
  //uc20 delete employee
  const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._name == node.name);
    if( !empPayrollData ) return;
    const index = empPayrollList
                    .map( empData => empData._name )
                    .indexOf(empPayrollData._name);
    empPayrollList.splice(index, 1);
    localStorage.setItem("empPayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
  }