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
window.WIKI = {"topics": [{"topic": "python", "synthesis": {"name": "python", "kind": "topic", "excerpt": "Notes on the Python we write here. Type hints (see [[python-typing]]) are expected on public functions; we run a static checker in CI. Standard-library first \u2014 reach for a dependency only when the stdlib genuinely falls short.", "last_updated": "2026-06-02", "sources": ["python-typing"], "html": "data/wiki/topics/python/python.html"}, "sources": [{"name": "python-typing", "topic": "python", "kind": "reference", "excerpt": "`Protocol` gives structural (duck) typing checked statically. Prefer it over ABCs when you only need \"has these methods\". `@overload` declares multiple signatures for one implementation. Use `from __future__ import annotations` to defer evaluation of annotations.", "version": "3.13", "html": "data/wiki/topics/python/python-typing.html"}]}, {"topic": "rust", "synthesis": {"name": "rust", "kind": "topic", "excerpt": "Synthesis of the Rust references we consult. The defining feature is the ownership model \u2014 see [[rust-ownership]] \u2014 which gives memory safety without a garbage collector. Each value has a single owner; borrows are checked at compile time so use-after-free and data races become type errors.", "last_updated": "2026-05-30", "sources": ["rust-ownership"], "html": "data/wiki/topics/rust/rust.html"}, "sources": [{"name": "rust-ownership", "topic": "rust", "kind": "reference", "excerpt": "Every value has one owner; when the owner goes out of scope the value is dropped. A move transfers ownership; a borrow (`&T` / `&mut T`) lends access without transfer. The borrow checker enforces one mutable XOR many shared borrows.", "version": "1.83.0", "html": "data/wiki/topics/rust/rust-ownership.html"}]}, {"topic": "testing", "synthesis": {"name": "testing", "kind": "topic", "excerpt": "How we test. Every behavior gets a happy-path and a failure-path assertion. Fixtures (see [[pytest-fixtures]]) set up state; parametrize to cover the matrix rather than copy-pasting cases. A test that can't fail isn't a test.", "last_updated": "2026-06-10", "sources": ["pytest-fixtures"], "html": "data/wiki/topics/testing/testing.html"}, "sources": [{"name": "pytest-fixtures", "topic": "testing", "kind": "reference", "excerpt": "A fixture is a function decorated with `@pytest.fixture`; request it by naming it as a test argument. `yield` splits setup from teardown. `scope=` (function / module / session) controls how often it runs.", "version": "8.3", "html": "data/wiki/topics/testing/pytest-fixtures.html"}]}], "concepts": [{"name": "defer-first-knowledge", "kind": "concept", "excerpt": "Answer from curated sources before model memory. Check the index, read the pinned reference, cite it \u2014 and only fall back to general knowledge when nothing covers the question, saying so when you do. Trades a little latency for answers that are current, versioned, and auditable.", "last_updated": "2026-06-14", "sources": [], "html": "data/wiki/concepts/defer-first-knowledge.html"}, {"name": "idempotent-bootstrap", "kind": "concept", "excerpt": "A setup step you can run any number of times with the same end state. Check before you write: skip the install if the tool is present, the symlink if it points where it should. Idempotence is what lets a \"clone and bootstrap\" repo re-run safely on a half-configured machine without fear.", "last_updated": "2026-06-12", "sources": [], "html": "data/wiki/concepts/idempotent-bootstrap.html"}]};
window.GRADUATION = {"candidates": [], "thresholds": {"graduate_seen": 10, "graduate_kb": 6}};
