
const DATA_MODE = "local"; // local | github

const DATA_URLS = {
  local: {
    core: "./data/core_oraculum.json",
    orion: "./data/orion_conceitual.json",
    logs: "./logs/orion_logs.json"
  },
  github: {
    core: "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/data/core_oraculum.json",
    orion: "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/data/orion_conceitual.json",
    logs: "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/logs/orion_logs.json"
  }
};

async function load(key) {
  const res = await fetch(DATA_URLS[DATA_MODE][key]);
  return res.json();
}
