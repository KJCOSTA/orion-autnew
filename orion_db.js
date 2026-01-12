// ORION DATABASE | v7.0 | BLUE NEBULA EDITION
// Gerado automaticamente com base no Estado Canônico (Fase 1)

window.ORION_DB = {
    "meta": {
        "versao": "V7.0 (Blue Nebula)",
        "build": "2026.01.12.RC",
        "ambiente": "PRODUÇÃO (SECURE)"
    },
    "kpis": {
        "fase_nome": "1. ORGANIZAÇÃO",
        "progresso": 62.5,
        "total_arquivos": 5114,
        "decisoes_registradas": 1,
        "status_core": "INEXISTENTE", // Bloqueio lógico
        "status_sistema": "ONLINE"
    },
    "timeline": [
        { "hora": "14:02", "tipo": "DATA", "msg": "Inventário Global finalizado (5.114 itens)." },
        { "hora": "13:55", "tipo": "CRITICAL", "msg": "Estado Canônico definido como Autoridade Máxima." },
        { "hora": "11:07", "tipo": "SYSTEM", "msg": "Inicialização do Sistema ORION." },
        { "hora": "10:30", "tipo": "INFO", "msg": "Estrutura de pastas /AutNew criada." }
    ],
    "arquivos": [
        { "nome": "Orion — Estado Canônico.pdf", "tipo": "PDF", "caminho": "/AutNew/ORACULUM/", "tag": "MASTER" },
        { "nome": "core_oraculum.json", "tipo": "JSON", "caminho": "/AutNew/ORION/data/", "tag": "PENDING" },
        { "nome": "LOG_TECNICO_AUTNEW.md", "tipo": "MD", "caminho": "/AutNew/__LOGS__/", "tag": "LIVE" },
        { "nome": "MAPA_GLOBAL_DRIVE.json", "tipo": "JSON", "caminho": "/AutNew/__LOGS__/", "tag": "DATA" },
        { "nome": "timeline.json", "tipo": "JSON", "caminho": "/AutNew/ORION/data/", "tag": "SYSTEM" },
        { "nome": "project_state.json", "tipo": "JSON", "caminho": "/AutNew/ORION/data/", "tag": "SYSTEM" },
        { "nome": "decisions.json", "tipo": "JSON", "caminho": "/AutNew/ORION/data/", "tag": "CORE" },
        { "nome": "drive_inventory.json", "tipo": "JSON", "caminho": "/AutNew/ORION/data/", "tag": "DATA" },
        { "nome": "Orion_Concept.docx", "tipo": "DOCX", "caminho": "/AutNew/ORACULUM/", "tag": "OLD" },
        { "nome": "Main_Script_V1.py", "tipo": "PY", "caminho": "/Colab Notebooks/", "tag": "CODE" }
    ],
    "grafico": {
        "labels": ["Markdown (.md)", "JSON (.json)", "Python (.py)", "PDF/Docs", "Outros"],
        "dados": [4949, 25, 33, 107, 50]
    }
};
