const CORE_URL =
  "https://raw.githubusercontent.com/KJCOSTA/orion-data/main/data/core_oraculum.json";

async function loadCore() {
  const res = await fetch(CORE_URL);
  return res.json();
}

function faseCard(fase) {
  return `
    <section class="bg-slate-800 rounded-xl p-6 shadow">
      <div class="flex justify-between items-center mb-3">
        <h2 class="text-2xl font-semibold">${fase.nome}</h2>
        <span class="text-sm px-3 py-1 rounded bg-slate-700">
          ${fase.status}
        </span>
      </div>

      <p class="text-slate-300 mb-4">${fase.objetivo}</p>

      <ul class="list-disc ml-6 space-y-1 text-slate-200">
        ${fase.subfases.map(s => `<li>${s.nome}</li>`).join("")}
      </ul>
    </section>
  `;
}

(async () => {
  const core = await loadCore();
  const app = document.getElementById("app");

  app.innerHTML = core.fases.map(faseCard).join("");
})();
