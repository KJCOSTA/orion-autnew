// MEMÓRIA DO ORION SYSTEM (V4 MODULAR)
// Este arquivo alimenta o Dashboard HTML.
// Gerado com base no Estado Canônico Atual.

window.ORION_DB = {
    "meta": {
        "versao": "4.0 Modular (Architect Edition)",
        "atualizado_em": new Date().toLocaleDateString('pt-BR') + " " + new Date().toLocaleTimeString('pt-BR'),
        "ambiente": "PRODUÇÃO"
    },
    "kpis": {
        "progresso": 62.5,      // Status real da Fase 1
        "arquivos": 5114,       // Inventário Global
        "decisoes": 1,          // Decisão de Arquitetura registrada
        "status_core": "INEXISTENTE" // Conforme Estado Canônico
    },
    "links": {
        // Link genérico para a raiz do seu Drive
        "drive_root": "https://drive.google.com/drive/u/0/"
    },
    "timeline": [
        { "data": "12/01", "hora": "17:50", "evento": "Dashboard V4 Modular Ativado", "tipo": "SYSTEM" },
        { "data": "12/01", "hora": "14:02", "evento": "Inventário Global: 5.114 arquivos processados", "tipo": "DATA" },
        { "data": "12/01", "hora": "13:55", "evento": "Estado Canônico definido como Autoridade Máxima", "tipo": "DECISION" },
        { "data": "12/01", "hora": "11:07", "evento": "Inicialização do Sistema ORION", "tipo": "START" }
    ],
    "arquivos_recentes": [
        { 
            "nome": "Orion — Estado Canônico De Contexto.pdf", 
            "tipo": "PDF", 
            "caminho": "/AutNew/ORACULUM/", 
            "status": "MASTER" 
        },
        { 
            "nome": "core_oraculum.json", 
            "tipo": "JSON", 
            "caminho": "/AutNew/ORION/data/", 
            "status": "PENDING" 
        },
        { 
            "nome": "LOG_TECNICO_AUTNEW.md", 
            "tipo": "MD", 
            "caminho": "/AutNew/__LOGS__/", 
            "status": "LIVE" 
        },
        { 
            "nome": "MAPA_GLOBAL_DRIVE.json", 
            "tipo": "JSON", 
            "caminho": "/AutNew/__LOGS__/", 
            "status": "DATA" 
        }
    ],
    "stats_grafico": {
        "labels": ["Markdown (.md)", "JSON (.json)", "Python (.py)", "Docs/PDF", "Imagens"],
        "data": [4949, 25, 33, 107, 0] // Dados reais extraídos do inventário
    }
};