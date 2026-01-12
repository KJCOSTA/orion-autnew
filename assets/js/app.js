
async function loadJSON(path) {
  const res = await fetch(path);
  return await res.json();
}

async function init() {
  const state = await loadJSON('./data/project_state.json');
  const fases = await loadJSON('./data/fases.json');
  const logs = await loadJSON('./logs/logs.json');

  document.getElementById('fase').innerText = state.fase_atual;
  document.getElementById('progresso').innerText = state.progresso_percentual + '%';
  document.getElementById('status').innerText = state.status;
  document.getElementById('acao').innerText = state.proxima_acao;

  const lista = document.getElementById('fases');
  fases.forEach(f => {
    const li = document.createElement('li');
    li.innerText = f.fase + ' — ' + f.status;
    lista.appendChild(li);
  });

  document.getElementById('ultimo_log').innerText =
    logs.logs[logs.logs.length - 1].descricao;
}

init();
