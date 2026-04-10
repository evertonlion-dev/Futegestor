let players = JSON.parse(localStorage.getItem("players")) || [];

function addPlayer() {
  alert("Adicionado com sucesso ✅");
  const input = document.getElementById("playerName")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") addPlayer();
});
  const name = input.value;

  if (players.length === 0) {
  list.innerHTML = "<p>Nenhum jogador ainda</p>";
  return;
}

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