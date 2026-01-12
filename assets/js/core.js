
const DATA_MODE = "local"; // local | github

const DATA_URLS = {
  local: {
    state: "./data/project_state.json",
    fases: "./data/fases.json",
    logs: "./logs/orion_logs.json"
  },
  github: {
    state: "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/data/project_state.json",
    fases: "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/data/fases.json",
    logs: "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/logs/orion_logs.json"
  }
};

async function loadJSON(key) {
  const url = DATA_URLS[DATA_MODE][key];
  const res = await fetch(url);
  return res.json();
}
