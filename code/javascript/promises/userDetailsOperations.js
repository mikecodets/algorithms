const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

function createHashedTable(data) {
  const initialValue = {};
  return data.reduce((hashedTable, user) => {
    hashedTable[user.id] = user;
    return hashedTable;
  }, initialValue);
}

function getUserById(usersTable, id) {
  return usersTable[id] || null;
}

function displayUserDetails(userDetails, id) {
  if (userDetails) {
    console.log(`Detalhes do usuário com ID ${id}:`);
    console.log(userDetails);
  } else {
    console.log(`Usuário com ID ${id} não encontrado.`);
  }
}

async function processUserDetails(userIds) {
  const usersData = await fetchData(USERS_API_URL);
  const usersTable = createHashedTable(usersData);

  userIds.forEach((id) => {
    const userDetails = getUserById(usersTable, id);
    displayUserDetails(userDetails, id);
  });
}

const userIdsToFetch = [2, 4, 8];
await processUserDetails(userIdsToFetch);
