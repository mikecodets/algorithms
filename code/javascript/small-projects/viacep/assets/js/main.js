async function buildApiUrl(zipCode) {
  return `https://viacep.com.br/ws/${zipCode}/json/`;
}

function formatAddressData({ cep, logradouro, complemento, bairro, localidade, uf }) {
  return {
    zipCode: cep,
    street: logradouro,
    complement: complemento,
    neighborhood: bairro,
    city: localidade,
    federalUnit: uf,
  };
}

async function getAddressDetails(zipCode) {
  try {
    const apiUrl = await buildApiUrl(zipCode);
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch address. Status: ${response.status}`);
    }

    const addressData = await response.json();

    const formattedAddress = formatAddressData(addressData);
    return formattedAddress;
  } catch (error) {
    throw new Error(`Error fetching address: ${error.message}`);
  }
}

function camelToKebab(camelCaseString) {
  return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function clearErrorDisplay() {
  const errorDisplay = document.getElementById("error-display");
  errorDisplay.style = "display: none;";
  errorDisplay.textContent = "";
}

function displayError(errorMessage) {
  const errorDisplay = document.getElementById("error-display");
  errorDisplay.style = "display: block;";
  errorDisplay.textContent = errorMessage;
}

async function displayAddress(ev) {
  const zipCode = ev.target.value;

  try {
    clearErrorDisplay();

    const addressDetails = await getAddressDetails(zipCode);

    Object.keys(addressDetails).forEach((index) => {
      const value = addressDetails[index];
      const kebabCaseId = camelToKebab(index);
      document.getElementById(kebabCaseId).value = value;
    });
  } catch (error) {
    console.error(error);
    displayError(`Error fetching address: ${error.message}`);
  }
}

document.getElementById("zip-code").addEventListener("focusout", displayAddress);
