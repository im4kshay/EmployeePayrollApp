window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
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
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
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
          <img name="${empPayrollData._id}" onclick="remove(this)" src="../assets/Icons/delete-black-18dp.svg" alt="delete">
          <img name="${empPayrollData._id}" onclick="update(this)" src="../assets/Icons/create-black-18dp.svg" alt="edit">
          </td>
        </tr>  
      `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
  }
  
  const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {
        _name: 'Akshay',
        _gender: 'Male',
        _department: [
          'Engineering',
          'HR'
        ],
        _salary: '450000',
        _startDate: '05 Sep 2022',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: '../assets/ProfilePictures/Ellipse -3.png'
      },
      {
        _name: 'Anuj',
        _gender: 'Male',
        _department: [
          'Engineering',
          'Finance'
        ],
        _salary: '360000',
        _startDate: '22 May 2021',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: '../assets/ProfilePictures/Ellipse -2.png'
      }
    ];
    return empPayrollListLocal;
  }
  
  const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
      deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }