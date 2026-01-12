
const ORION_VERSION = "v3 | CORE 1.1 | 20260112-1603";

async function loadCore() {
  const r = await fetch("https://raw.githubusercontent.com/KJCOSTA/orion-data/main/data/core_oraculum.json");
  return await r.json();
}

async function saveCore(core) {
  const token = prompt("Cole o GitHub Token para salvar:");
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(core, null, 2))));
  const url = "https://api.github.com/repos/KJCOSTA/orion-data/contents/data/core_oraculum.json";

  const r0 = await fetch(url);
  const sha = r0.status === 200 ? (await r0.json()).sha : null;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + token,
      "Accept": "application/vnd.github+json"
    },
    body: JSON.stringify({
      message: "ORION: update CORE",
      content,
      sha
    })
  });

  alert("CORE salvo com sucesso no orion-data");
}
