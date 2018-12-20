const API = 'https://api.github.com';

export default {
    fetchUsers: () => fetch(`${API}/users`).then(usersList => usersList.json()),
    fetchMoreUsers: ({id}) => fetch(`${API}/users?since=${id}`).then(usersList => usersList.json()),
    fetchUsersInfo: ({userName}) => fetch(`${API}/users/${userName}`).then(usersInfo => usersInfo.json()),
};
