let players = JSON.parse(localStorage.getItem("players")) || [];

function addPlayer() {
  const input = document.getElementById("playerName");
  const name = input.value;

  if (!name) return;

  players.push(name);
  input.value = "";

  saveData();
  renderPlayers();
}

function renderPlayers() {
  const list = document.getElementById("playerList");
  list.innerHTML = "";

  players.forEach((player, index) => {
    const li = document.createElement("li");
    li.textContent = player;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => {
      players.splice(index, 1);
      saveData();
      renderPlayers();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function saveData() {
  localStorage.setItem("players", JSON.stringify(players));
}

renderPlayers();