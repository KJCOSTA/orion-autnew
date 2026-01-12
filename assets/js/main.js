async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Erro ao carregar ${path}`);
  return res.json();
}

async function initORION() {
  const state = await loadJSON("data/project_state.json");

  document.getElementById("faseAtual").innerText = state.fase_atual;
  document.getElementById("progresso").innerText = state.progresso + "%";
  document.getElementById("status").innerText = state.status;
  document.getElementById("proximaAcao").innerText = state.proxima_acao;
  document.getElementById("previsao").innerText = state.previsao_conclusao;

  const fases = await loadJSON("data/fases.json");
  const mapa = document.getElementById("mapaFases");

  fases.forEach(f => {
    const li = document.createElement("li");
    li.innerText = `${f.id}️⃣ ${f.nome} — ${f.status}`;
    mapa.appendChild(li);
  });

  const logs = await loadJSON("data/orion_logs.json");
  const logsEl = document.getElementById("logs");

  logs.slice(0, 5).forEach(l => {
    const li = document.createElement("li");
    li.innerText = `• ${l.data} — ${l.mensagem}`;
    logsEl.appendChild(li);
  });

  new Chart(document.getElementById("chart"), {
    type: "doughnut",
    data: {
      labels: ["Concluído", "Restante"],
      datasets: [{
        data: [state.progresso, 100 - state.progresso],
        backgroundColor: ["#38bdf8", "#1e293b"]
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });
}

initORION();
