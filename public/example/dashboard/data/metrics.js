window.METRICS = [
  {
    "session_id": "s1",
    "ts": "2026-05-30T14:00:00Z",
    "project": "nervepack",
    "signals": {
      "skills_invoked": [
        "np-kb-branding",
        "np-core-recall"
      ],
      "playbook_fires": 1,
      "playbook_heeded": 1,
      "recall_injections": 1,
      "directive_present": true,
      "struggles": 0,
      "tool_calls": 31,
      "tokens": {
        "input": 8200,
        "output": 45100,
        "cache_read": 3210000,
        "cache_creation": 121000,
        "total": 3384300
      }
    },
    "contribution_score": 78,
    "helped": [
      "Used branding tokens",
      "Recalled prior context"
    ],
    "shortfalls": [],
    "suggestions": [
      {
        "text": "Promote auto-push rule into np-core-sync",
        "confidence": 0.8,
        "target": "skills",
        "auto_safe": false
      }
    ],
    "assets_used": [
      {
        "asset": "np-kb-branding",
        "kind": "skill",
        "used": true
      },
      {
        "asset": "np-core-recall",
        "kind": "skill",
        "used": true
      }
    ]
  },
  {
    "session_id": "s2",
    "ts": "2026-05-31T09:30:00Z",
    "project": "meeting-template",
    "signals": {
      "skills_invoked": [
        "np-kb-chrome-extension-content-script"
      ],
      "playbook_fires": 2,
      "playbook_heeded": 1,
      "recall_injections": 0,
      "directive_present": true,
      "struggles": 1,
      "tool_calls": 52,
      "tokens": {
        "input": 14300,
        "output": 88400,
        "cache_read": 6090000,
        "cache_creation": 210500,
        "total": 6403200
      }
    },
    "contribution_score": 55,
    "helped": [
      "Content-script defensive pattern applied"
    ],
    "shortfalls": [
      "Missed a toggle gate"
    ],
    "suggestions": [
      {
        "text": "Tighten playbook-guard topic match for MV3",
        "confidence": 0.6,
        "target": "playbooks",
        "auto_safe": true
      },
      {
        "text": "Add a recall keyword for content scripts",
        "confidence": 0.4,
        "target": "hooks",
        "auto_safe": true
      }
    ],
    "assets_used": [
      {
        "asset": "np-kb-chrome-extension-content-script",
        "kind": "skill",
        "used": true
      },
      {
        "asset": "np-kb-branding",
        "kind": "skill",
        "used": false
      }
    ]
  },
  {
    "session_id": "s3",
    "ts": "2026-06-01T16:20:00Z",
    "project": "nervepack",
    "signals": {
      "skills_invoked": [],
      "playbook_fires": 0,
      "playbook_heeded": 0,
      "recall_injections": 0,
      "directive_present": true,
      "struggles": 2,
      "tool_calls": 47,
      "tokens": {
        "input": 11900,
        "output": 72300,
        "cache_read": 5440000,
        "cache_creation": 181200,
        "total": 5705400
      }
    },
    "contribution_score": 28,
    "helped": [],
    "shortfalls": [
      "Reinvented a known pattern",
      "Did not consult branding"
    ],
    "suggestions": [
      {
        "text": "Strengthen session directive to force skill consult",
        "confidence": 0.7,
        "target": "other",
        "auto_safe": false
      }
    ],
    "assets_used": [
      {
        "asset": "np-kb-branding",
        "kind": "skill",
        "used": false
      }
    ]
  },
  {
    "session_id": "s4",
    "ts": "2026-06-02T11:10:00Z",
    "project": "pbrowne-net",
    "signals": {
      "skills_invoked": [
        "np-kb-pbrowne-net-site",
        "np-kb-branding"
      ],
      "playbook_fires": 1,
      "playbook_heeded": 1,
      "recall_injections": 2,
      "directive_present": true,
      "struggles": 0,
      "tool_calls": 24,
      "tokens": {
        "input": 6100,
        "output": 38600,
        "cache_read": 2390000,
        "cache_creation": 94800,
        "total": 2529500
      }
    },
    "contribution_score": 83,
    "helped": [
      "Right AWS profile first try",
      "Branding tokens reused"
    ],
    "shortfalls": [],
    "suggestions": [],
    "assets_used": [
      {
        "asset": "np-kb-pbrowne-net-site",
        "kind": "skill",
        "used": true
      },
      {
        "asset": "np-kb-branding",
        "kind": "skill",
        "used": true
      }
    ]
  },
  {
    "session_id": "s5",
    "ts": "2026-06-03T08:05:00Z",
    "project": "nervepack",
    "signals": {
      "skills_invoked": [
        "np-core-contribute"
      ],
      "playbook_fires": 0,
      "playbook_heeded": 0,
      "recall_injections": 1,
      "directive_present": true,
      "struggles": 0,
      "tool_calls": 38,
      "tokens": {
        "input": 10400,
        "output": 61200,
        "cache_read": 4120000,
        "cache_creation": 150900,
        "total": 4342500
      }
    },
    "contribution_score": 67,
    "helped": [
      "Captured a durable learning"
    ],
    "shortfalls": [
      "Forgot to push once"
    ],
    "suggestions": [
      {
        "text": "Auto-push after contribute commits",
        "confidence": 0.55,
        "target": "sync",
        "auto_safe": true
      }
    ],
    "assets_used": [
      {
        "asset": "np-core-contribute",
        "kind": "skill",
        "used": true
      }
    ]
  }
];
window.LEARNED = {"playbooks": 0, "strategies": 0, "strategy_names": []};
window.TOKENS_SAVED = {"total": 21250000, "per_session": 4250000};
window.WIKI = {"topics": [], "concepts": []};
window.GRADUATION = {"candidates": [], "thresholds": {"graduate_seen": 10, "graduate_kb": 6}};
