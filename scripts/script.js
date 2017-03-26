const { dialog } = require('electron').remote;
const csv = require('fast-csv');

const select = document.querySelector('#select');
const error = document.querySelector('#error');
const list = document.querySelector('#list');

select.addEventListener('click', () => {
  dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      {name: 'All Files', extensions: ['csv']}
    ]
  }, (fileName) => {
    if (fileName === undefined) return;

    let users = [];

    const content = csv.fromPath(fileName[0], { delimiter: ';' })
      .on('data', data => users.push(data))
      .on('end', () => {
        delete users[0];
        users = users.map((user) => {
          return {
            name: user[0],
            email: user[1],
            status: user[2]
          };
        });
        displayUsers(users);
      })
  });
});

function displayUsers (users) {
  let display = users.forEach((user, key) => {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.appendChild(document.createTextNode(user.name));
    let tdEmail = document.createElement('td');
    tdEmail.appendChild(document.createTextNode(user.email));
    let tdStatus = document.createElement('td');
    tdStatus.appendChild(document.createTextNode(user.status));
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdStatus);
    list.appendChild(tr);
  });
}
