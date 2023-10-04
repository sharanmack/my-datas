async function getData() {
    const response = await fetch("https://dummyjson.com/user");
    const data = await response.json();

    let tab = '';
    data.users.forEach(function (user) {
        tab += `
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
            </tr>
        `;
    });

    document.getElementById('tbody').innerHTML = tab;

    $('#userTable').DataTable({
        "data": data.users,
        "columns": [
            {"data": 'firstName'},
            {"data": 'lastName'},
            {"data": 'age'},
            {"data": 'email'},
            {"data": 'gender'},
        ]
    });
}
