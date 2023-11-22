const EMPTY_STRING = "";
const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw new Error(error);
  }
}

function createTableRow(user) {
  return String.raw`
    <tr data-user-id="${user.id}">
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.address.street}</td>
      <td>${user.address.city}</td>
      <td>
        <button class="delete-button">Excluir</button>
      </td>
    </tr>
  `;
}

function removeTableRow(event) {
  /*  const userId = event.target.closest("tr").dataset.userId; */
  try {
    event.target.closest("tr").remove();
    console.log("Linha excluída com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
  }
}

function setupDeleteButtonHandler(button) {
  button.addEventListener("click", removeTableRow);
}

async function populateUserTable() {
  const tableBody = document.querySelector("tbody");
  try {
    const usersData = await getData(USERS_API_URL);
    const tableRows = usersData.map(createTableRow).join(EMPTY_STRING);
    tableBody.innerHTML = tableRows;

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(setupDeleteButtonHandler);
  } catch (error) {
    console.error("Erro ao popular a tabela:", error);
    throw new Error("Erro ao ler dados dos usuários:", error);
  }
}

populateUserTable();
