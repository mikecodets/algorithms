function isAlphabetic(char) {
  return /[a-zA-Z]/.test(char);
}

function shiftCharacter(char) {
  const code = char.charCodeAt();
  const newCharCode = code + 1;

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    if ((code >= 90 && code < 97) || code === 122) {
      newCharCode -= 26;
    }
    return String.fromCharCode(newCharCode);
  }
  return char;
}

function messageEncoder(message) {
  return message
    .split("")
    .map((char) => {
      if (isAlphabetic(char)) {
        return shiftCharacter(char);
      }
      return char;
    })
    .join("");
}

const message = "Olá, Mundo!";
console.log(messageEncoder(message));
