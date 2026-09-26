window.QUIZ_BANK = {
  "version": "2026.09.27.1",
  "title": "미래탐구 오랑우탄",
  "notes": "원소는 한 종류의 원소로 이루어진 물질이라는 뜻으로 사용. 분류 문제는 별도 언급이 없으면 순물질. He·Ne·Ar은 중학교 기준에서 분자 X.",
  "topics": [
    "물질 분류",
    "화학식 읽기",
    "계수와 원자 수",
    "원소 기호",
    "원자의 구조",
    "이온 이름",
    "이온의 성질",
    "이온의 이동",
    "이온의 생성",
    "이온의 전자 수",
    "다원자 이온",
    "원소와 화합물",
    "원자와 분자",
    "오개념 판단",
    "주기율표",
    "불꽃 반응",
    "앙금 생성",
    "이온과 전기",
    "입자 모형",
    "핵심 용어"
  ],
  "questions": [
    {
      "id": "water-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "water",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "H2O",
      "caption": "물",
      "explain": "물: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "water-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "water",
      "prompt": "화합물이다.",
      "formula": "H2O",
      "caption": "물",
      "explain": "물: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "water-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "water",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "H2O",
      "caption": "물",
      "explain": "물: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "water-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "water",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "H2O",
      "caption": "물",
      "explain": "물: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "water-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "water",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "H2O",
      "caption": "물",
      "explain": "구성 원소는 {{H}}·O, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "water-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "water",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "H2O",
      "caption": "물",
      "explain": "2 + 1 = 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "water-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "water",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "H2O",
      "caption": "물",
      "explain": "{{H2O}}에 쓰인 {{H}}의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "hydrogen",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "수소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "hydrogen-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "hydrogen",
      "prompt": "화합물이다.",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "수소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "hydrogen-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "hydrogen",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "수소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "hydrogen-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "hydrogen",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "수소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "hydrogen-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "hydrogen",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "구성 원소는 {{H}}, 총 1종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "hydrogen",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "2 = 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "hydrogen",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "H2",
      "caption": "수소 기체",
      "explain": "{{H2}}에 쓰인 {{H}}의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "copper-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "copper",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Cu}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "copper-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "copper",
      "prompt": "화합물이다.",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Cu}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "copper-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "copper",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Cu}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "copper-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "copper",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Cu}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "salt-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "salt",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "NaCl",
      "caption": "염화 나트륨",
      "explain": "염화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "salt-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "salt",
      "prompt": "화합물이다.",
      "formula": "NaCl",
      "caption": "염화 나트륨",
      "explain": "염화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "salt-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "salt",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "NaCl",
      "caption": "염화 나트륨",
      "explain": "염화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "salt-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "salt",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "NaCl",
      "caption": "염화 나트륨",
      "explain": "염화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "oxygen-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "oxygen",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "산소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "oxygen-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "oxygen",
      "prompt": "화합물이다.",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "산소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "oxygen-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "oxygen",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "산소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "oxygen-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "oxygen",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "산소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "oxygen-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "oxygen",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "구성 원소는 O, 총 1종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "oxygen",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "2 = 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "oxygen",
      "prompt": "한 분자 속 O 원자는 몇 개?",
      "formula": "O2",
      "caption": "산소 기체",
      "explain": "{{O2}}에 쓰인 O의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "co2",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "이산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "co2-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "co2",
      "prompt": "화합물이다.",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "이산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "co2-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "co2",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "이산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "co2-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "co2",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "이산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "co2-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "co2",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "구성 원소는 {{C}}·O, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "co2-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "co2",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "1 + 2 = 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "co2",
      "prompt": "한 분자 속 O 원자는 몇 개?",
      "formula": "CO2",
      "caption": "이산화 탄소",
      "explain": "{{CO2}}에 쓰인 O의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "iron-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "iron",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Fe",
      "caption": "철",
      "explain": "철: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Fe}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "iron-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "iron",
      "prompt": "화합물이다.",
      "formula": "Fe",
      "caption": "철",
      "explain": "철: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Fe}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "iron-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "iron",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Fe",
      "caption": "철",
      "explain": "철: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Fe}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "iron-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "iron",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Fe",
      "caption": "철",
      "explain": "철: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Fe}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "nitrogen-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "nitrogen",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "질소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "nitrogen-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "nitrogen",
      "prompt": "화합물이다.",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "질소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "nitrogen-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "nitrogen",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "질소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "nitrogen-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "nitrogen",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "질소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "nitrogen-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "nitrogen",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "구성 원소는 {{N}}, 총 1종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "nitrogen",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "2 = 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "nitrogen",
      "prompt": "한 분자 속 {{N}} 원자는 몇 개?",
      "formula": "N2",
      "caption": "질소 기체",
      "explain": "{{N2}}에 쓰인 {{N}}의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ammonia",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "암모니아: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "ammonia-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ammonia",
      "prompt": "화합물이다.",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "암모니아: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "ammonia-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ammonia",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "암모니아: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "ammonia-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "ammonia",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "암모니아: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ammonia-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ammonia",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "구성 원소는 {{N}}·{{H}}, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ammonia",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "1 + 3 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ammonia",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "NH3",
      "caption": "암모니아",
      "explain": "{{NH3}}에 쓰인 {{H}}의 개수를 모두 더하면 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "helium-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "helium",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "He",
      "caption": "헬륨",
      "explain": "헬륨: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{He}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "helium-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "helium",
      "prompt": "화합물이다.",
      "formula": "He",
      "caption": "헬륨",
      "explain": "헬륨: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{He}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "helium-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "helium",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "He",
      "caption": "헬륨",
      "explain": "헬륨: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{He}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "helium-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "helium",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "He",
      "caption": "헬륨",
      "explain": "헬륨: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{He}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "methane-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "methane",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "메테인(메탄): 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "methane-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "methane",
      "prompt": "화합물이다.",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "메테인(메탄): 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "methane-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "methane",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "메테인(메탄): 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "methane-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "methane",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "메테인(메탄): 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "methane-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "methane",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "구성 원소는 {{C}}·{{H}}, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "methane-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "methane",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "1 + 4 = 5개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "5"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "methane",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "CH4",
      "caption": "메테인(메탄)",
      "explain": "{{CH4}}에 쓰인 {{H}}의 개수를 모두 더하면 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "aluminium-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "aluminium",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Al",
      "caption": "알루미늄",
      "explain": "알루미늄: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Al}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "aluminium-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "aluminium",
      "prompt": "화합물이다.",
      "formula": "Al",
      "caption": "알루미늄",
      "explain": "알루미늄: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Al}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "aluminium-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "aluminium",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Al",
      "caption": "알루미늄",
      "explain": "알루미늄: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Al}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "aluminium-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "aluminium",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Al",
      "caption": "알루미늄",
      "explain": "알루미늄: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Al}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ozone-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ozone",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "O3",
      "caption": "오존",
      "explain": "오존: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "ozone-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ozone",
      "prompt": "화합물이다.",
      "formula": "O3",
      "caption": "오존",
      "explain": "오존: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "ozone-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ozone",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "O3",
      "caption": "오존",
      "explain": "오존: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "ozone-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "ozone",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "O3",
      "caption": "오존",
      "explain": "오존: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ozone-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ozone",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "O3",
      "caption": "오존",
      "explain": "구성 원소는 O, 총 1종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ozone",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "O3",
      "caption": "오존",
      "explain": "3 = 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ozone",
      "prompt": "한 분자 속 O 원자는 몇 개?",
      "formula": "O3",
      "caption": "오존",
      "explain": "{{O3}}에 쓰인 O의 개수를 모두 더하면 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "hcl",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "염화 수소 기체: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "hcl-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "hcl",
      "prompt": "화합물이다.",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "염화 수소 기체: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "hcl-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "hcl",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "염화 수소 기체: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "hcl-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "hcl",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "염화 수소 기체: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·{{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "hcl-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "hcl",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "구성 원소는 {{H}}·{{Cl}}, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "hcl",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "1 + 1 = 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "hcl",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "HCl",
      "caption": "염화 수소 기체",
      "explain": "{{HCl}}에 쓰인 {{H}}의 개수를 모두 더하면 1개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "sodium-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "sodium",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Na}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "sodium-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "sodium",
      "prompt": "화합물이다.",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Na}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "sodium-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "sodium",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Na}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "sodium-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "sodium",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Na}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "neon-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "neon",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Ne",
      "caption": "네온",
      "explain": "네온: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ne}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "neon-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "neon",
      "prompt": "화합물이다.",
      "formula": "Ne",
      "caption": "네온",
      "explain": "네온: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ne}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "neon-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "neon",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Ne",
      "caption": "네온",
      "explain": "네온: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ne}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "neon-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "neon",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Ne",
      "caption": "네온",
      "explain": "네온: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ne}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "peroxide-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "peroxide",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "과산화 수소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "peroxide-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "peroxide",
      "prompt": "화합물이다.",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "과산화 수소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "peroxide-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "peroxide",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "과산화 수소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "peroxide-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "peroxide",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "과산화 수소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "peroxide-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "peroxide",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "구성 원소는 {{H}}·O, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "peroxide",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "2 + 2 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "peroxide",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "H2O2",
      "caption": "과산화 수소",
      "explain": "{{H2O2}}에 쓰인 {{H}}의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "glucose-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "glucose",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "포도당: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "glucose-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "glucose",
      "prompt": "화합물이다.",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "포도당: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "glucose-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "glucose",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "포도당: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "glucose-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "glucose",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "포도당: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "glucose-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "glucose",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "구성 원소는 {{C}}·{{H}}·O, 총 3종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "glucose-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "glucose",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "6 + 12 + 6 = 24개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "24"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "glucose-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "glucose",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "C6H12O6",
      "caption": "포도당",
      "explain": "{{C6H12O6}}에 쓰인 {{H}}의 개수를 모두 더하면 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "argon-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "argon",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Ar",
      "caption": "아르곤",
      "explain": "아르곤: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ar}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "argon-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "argon",
      "prompt": "화합물이다.",
      "formula": "Ar",
      "caption": "아르곤",
      "explain": "아르곤: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ar}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "argon-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "argon",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Ar",
      "caption": "아르곤",
      "explain": "아르곤: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ar}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "argon-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "argon",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Ar",
      "caption": "아르곤",
      "explain": "아르곤: 원소 / 분자 X. 여러 원자가 결합한 분자가 아니라, 원자 하나씩 독립적으로 존재합니다. 구성 원소는 {{Ar}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "sugar-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "sugar",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "설탕: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "sugar-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "sugar",
      "prompt": "화합물이다.",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "설탕: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "sugar-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "sugar",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "설탕: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "sugar-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "sugar",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "설탕: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "sugar-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "sugar",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "구성 원소는 {{C}}·{{H}}·O, 총 3종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "sugar-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "sugar",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "12 + 22 + 11 = 45개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "45"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "sugar-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "sugar",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "C12H22O11",
      "caption": "설탕",
      "explain": "{{C12H22O11}}에 쓰인 {{H}}의 개수를 모두 더하면 22개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "22"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "graphite-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "graphite",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "C",
      "caption": "흑연",
      "explain": "흑연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "graphite-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "graphite",
      "prompt": "화합물이다.",
      "formula": "C",
      "caption": "흑연",
      "explain": "흑연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "graphite-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "graphite",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "C",
      "caption": "흑연",
      "explain": "흑연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "graphite-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "graphite",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "C",
      "caption": "흑연",
      "explain": "흑연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ethanol-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ethanol",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "에탄올: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "ethanol-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ethanol",
      "prompt": "화합물이다.",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "에탄올: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "ethanol-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "ethanol",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "에탄올: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "ethanol-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "ethanol",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "에탄올: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ethanol-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ethanol",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "구성 원소는 {{C}}·{{H}}·O, 총 3종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "3"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "ethanol-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ethanol",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "2 + 6 + 1 = 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ethanol-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "ethanol",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "C2H5OH",
      "caption": "에탄올",
      "explain": "{{C2H5OH}}에 쓰인 {{H}}의 개수를 모두 더하면 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "calcium-carbonate-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "calcium-carbonate",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "CaCO3",
      "caption": "탄산 칼슘",
      "explain": "탄산 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{C}}·O입니다.",
      "clue": "칼슘 이온과 탄산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "calcium-carbonate-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "calcium-carbonate",
      "prompt": "화합물이다.",
      "formula": "CaCO3",
      "caption": "탄산 칼슘",
      "explain": "탄산 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{C}}·O입니다.",
      "clue": "칼슘 이온과 탄산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "calcium-carbonate-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "calcium-carbonate",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "CaCO3",
      "caption": "탄산 칼슘",
      "explain": "탄산 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{C}}·O입니다.",
      "clue": "칼슘 이온과 탄산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "calcium-carbonate-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "calcium-carbonate",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "CaCO3",
      "caption": "탄산 칼슘",
      "explain": "탄산 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{C}}·O입니다.",
      "clue": "칼슘 이온과 탄산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "potassium-nitrate-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "potassium-nitrate",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "KNO3",
      "caption": "질산 칼륨",
      "explain": "질산 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{N}}·O입니다.",
      "clue": "칼륨 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "potassium-nitrate-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "potassium-nitrate",
      "prompt": "화합물이다.",
      "formula": "KNO3",
      "caption": "질산 칼륨",
      "explain": "질산 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{N}}·O입니다.",
      "clue": "칼륨 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": true
    },
    {
      "id": "potassium-nitrate-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "potassium-nitrate",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "KNO3",
      "caption": "질산 칼륨",
      "explain": "질산 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{N}}·O입니다.",
      "clue": "칼륨 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "answer": false
    },
    {
      "id": "potassium-nitrate-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "potassium-nitrate",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "KNO3",
      "caption": "질산 칼륨",
      "explain": "질산 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{N}}·O입니다.",
      "clue": "칼륨 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "첨부 24종",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "acetic-acid-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "acetic-acid",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "아세트산: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "answer": true
    },
    {
      "id": "acetic-acid-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "acetic-acid",
      "prompt": "화합물이다.",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "아세트산: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "answer": true
    },
    {
      "id": "acetic-acid-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "acetic-acid",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "아세트산: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "answer": false
    },
    {
      "id": "acetic-acid-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "acetic-acid",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "아세트산: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·{{H}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "acetic-acid-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "acetic-acid",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "구성 원소는 {{C}}·{{H}}·O, 총 3종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "answer": [
        "3"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "acetic-acid-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "acetic-acid",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "2 + 4 + 2 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "acetic-acid-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "acetic-acid",
      "prompt": "한 분자 속 {{H}} 원자는 몇 개?",
      "formula": "CH3COOH",
      "caption": "아세트산",
      "explain": "{{CH3COOH}}에 쓰인 {{H}}의 개수를 모두 더하면 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "추가 요청",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "chlorine",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "염소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "chlorine-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "chlorine",
      "prompt": "화합물이다.",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "염소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "chlorine-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "chlorine",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "염소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "chlorine-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "chlorine",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "염소 기체: 원소 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{Cl}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "chlorine-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "chlorine",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "구성 원소는 {{Cl}}, 총 1종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "chlorine",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "2 = 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "chlorine",
      "prompt": "한 분자 속 {{Cl}} 원자는 몇 개?",
      "formula": "Cl2",
      "caption": "염소 기체",
      "explain": "{{Cl2}}에 쓰인 {{Cl}}의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "co",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "일산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "co-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "co",
      "prompt": "화합물이다.",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "일산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "co-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "co",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "일산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "co-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "co",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "일산화 탄소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{C}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "co-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "co",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "구성 원소는 {{C}}·O, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "co-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "co",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "1 + 1 = 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "co",
      "prompt": "한 분자 속 O 원자는 몇 개?",
      "formula": "CO",
      "caption": "일산화 탄소",
      "explain": "{{CO}}에 쓰인 O의 개수를 모두 더하면 1개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "no2",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "이산화 질소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·O입니다.",
      "clue": "독립된 {{NO}}₂ 분자를 기준으로 판단한다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "no2-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "no2",
      "prompt": "화합물이다.",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "이산화 질소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·O입니다.",
      "clue": "독립된 {{NO}}₂ 분자를 기준으로 판단한다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "no2-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "no2",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "이산화 질소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·O입니다.",
      "clue": "독립된 {{NO}}₂ 분자를 기준으로 판단한다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "no2-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "no2",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "이산화 질소: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{N}}·O입니다.",
      "clue": "독립된 {{NO}}₂ 분자를 기준으로 판단한다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "no2-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "no2",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "구성 원소는 {{N}}·O, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "no2-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "no2",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "1 + 2 = 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "no2",
      "prompt": "한 분자 속 O 원자는 몇 개?",
      "formula": "NO2",
      "caption": "이산화 질소",
      "explain": "{{NO2}}에 쓰인 O의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "so2",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "이산화 황: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{S}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "so2-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "so2",
      "prompt": "화합물이다.",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "이산화 황: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{S}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "so2-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "so2",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "이산화 황: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{S}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "so2-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "so2",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "이산화 황: 화합물 / 분자 O. 독립된 분자 단위로 이루어진 물질입니다. 구성 원소는 {{S}}·O입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "so2-05",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "so2",
      "prompt": "구성 원소는 몇 종류?",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "구성 원소는 {{S}}·O, 총 2종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric"
    },
    {
      "id": "so2-06",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "so2",
      "prompt": "한 분자 속 원자는 모두 몇 개?",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "1 + 2 = 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-07",
      "type": "text",
      "topic": "화학식 읽기",
      "key": "so2",
      "prompt": "한 분자 속 O 원자는 몇 개?",
      "formula": "SO2",
      "caption": "이산화 황",
      "explain": "{{SO2}}에 쓰인 O의 개수를 모두 더하면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "magnesium-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "magnesium",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Mg",
      "caption": "마그네슘",
      "explain": "마그네슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Mg}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "magnesium-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "magnesium",
      "prompt": "화합물이다.",
      "formula": "Mg",
      "caption": "마그네슘",
      "explain": "마그네슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Mg}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "magnesium-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "magnesium",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Mg",
      "caption": "마그네슘",
      "explain": "마그네슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Mg}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "magnesium-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "magnesium",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Mg",
      "caption": "마그네슘",
      "explain": "마그네슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Mg}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "silver-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "silver",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Ag",
      "caption": "은",
      "explain": "은: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ag}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "silver-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "silver",
      "prompt": "화합물이다.",
      "formula": "Ag",
      "caption": "은",
      "explain": "은: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ag}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "silver-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "silver",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Ag",
      "caption": "은",
      "explain": "은: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ag}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "silver-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "silver",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Ag",
      "caption": "은",
      "explain": "은: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ag}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "gold-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "gold",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Au",
      "caption": "금",
      "explain": "금: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Au}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "gold-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "gold",
      "prompt": "화합물이다.",
      "formula": "Au",
      "caption": "금",
      "explain": "금: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Au}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "gold-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "gold",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Au",
      "caption": "금",
      "explain": "금: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Au}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "gold-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "gold",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Au",
      "caption": "금",
      "explain": "금: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Au}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "zinc-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "zinc",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Zn",
      "caption": "아연",
      "explain": "아연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Zn}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "zinc-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "zinc",
      "prompt": "화합물이다.",
      "formula": "Zn",
      "caption": "아연",
      "explain": "아연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Zn}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "zinc-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "zinc",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Zn",
      "caption": "아연",
      "explain": "아연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Zn}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "zinc-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "zinc",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Zn",
      "caption": "아연",
      "explain": "아연: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Zn}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "calcium-05",
      "type": "ox",
      "topic": "물질 분류",
      "key": "calcium",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ca}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "calcium-06",
      "type": "ox",
      "topic": "물질 분류",
      "key": "calcium",
      "prompt": "화합물이다.",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ca}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "calcium-07",
      "type": "ox",
      "topic": "물질 분류",
      "key": "calcium",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ca}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "calcium-08",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "calcium",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{Ca}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "potassium-05",
      "type": "ox",
      "topic": "물질 분류",
      "key": "potassium",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{K}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "potassium-06",
      "type": "ox",
      "topic": "물질 분류",
      "key": "potassium",
      "prompt": "화합물이다.",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{K}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "potassium-07",
      "type": "ox",
      "topic": "물질 분류",
      "key": "potassium",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{K}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "potassium-08",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "potassium",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{K}}입니다.",
      "clue": "",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "diamond-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "diamond",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "C",
      "caption": "다이아몬드",
      "explain": "다이아몬드: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "diamond-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "diamond",
      "prompt": "화합물이다.",
      "formula": "C",
      "caption": "다이아몬드",
      "explain": "다이아몬드: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "diamond-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "diamond",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "C",
      "caption": "다이아몬드",
      "explain": "다이아몬드: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "diamond-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "diamond",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "C",
      "caption": "다이아몬드",
      "explain": "다이아몬드: 원소 / 분자 X. 원자들이 연결된 구조이며 독립된 분자 단위가 없습니다. 구성 원소는 {{C}}입니다.",
      "clue": "탄소 원자들이 넓게 연결되어 있다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "mgo-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "mgo",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "MgO",
      "caption": "산화 마그네슘",
      "explain": "산화 마그네슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Mg}}·O입니다.",
      "clue": "마그네슘 이온과 산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "mgo-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "mgo",
      "prompt": "화합물이다.",
      "formula": "MgO",
      "caption": "산화 마그네슘",
      "explain": "산화 마그네슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Mg}}·O입니다.",
      "clue": "마그네슘 이온과 산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "mgo-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "mgo",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "MgO",
      "caption": "산화 마그네슘",
      "explain": "산화 마그네슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Mg}}·O입니다.",
      "clue": "마그네슘 이온과 산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "mgo-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "mgo",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "MgO",
      "caption": "산화 마그네슘",
      "explain": "산화 마그네슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Mg}}·O입니다.",
      "clue": "마그네슘 이온과 산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "kcl-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "kcl",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "KCl",
      "caption": "염화 칼륨",
      "explain": "염화 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{Cl}}입니다.",
      "clue": "칼륨 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "kcl-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "kcl",
      "prompt": "화합물이다.",
      "formula": "KCl",
      "caption": "염화 칼륨",
      "explain": "염화 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{Cl}}입니다.",
      "clue": "칼륨 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "kcl-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "kcl",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "KCl",
      "caption": "염화 칼륨",
      "explain": "염화 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{Cl}}입니다.",
      "clue": "칼륨 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "kcl-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "kcl",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "KCl",
      "caption": "염화 칼륨",
      "explain": "염화 칼륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{K}}·{{Cl}}입니다.",
      "clue": "칼륨 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "cacl2-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "cacl2",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "CaCl2",
      "caption": "염화 칼슘",
      "explain": "염화 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{Cl}}입니다.",
      "clue": "칼슘 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "cacl2-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "cacl2",
      "prompt": "화합물이다.",
      "formula": "CaCl2",
      "caption": "염화 칼슘",
      "explain": "염화 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{Cl}}입니다.",
      "clue": "칼슘 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "cacl2-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "cacl2",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "CaCl2",
      "caption": "염화 칼슘",
      "explain": "염화 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{Cl}}입니다.",
      "clue": "칼슘 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "cacl2-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "cacl2",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "CaCl2",
      "caption": "염화 칼슘",
      "explain": "염화 칼슘: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ca}}·{{Cl}}입니다.",
      "clue": "칼슘 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "naoh-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "naoh",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "NaOH",
      "caption": "수산화 나트륨",
      "explain": "수산화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·O·{{H}}입니다.",
      "clue": "나트륨 이온과 수산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "naoh-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "naoh",
      "prompt": "화합물이다.",
      "formula": "NaOH",
      "caption": "수산화 나트륨",
      "explain": "수산화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·O·{{H}}입니다.",
      "clue": "나트륨 이온과 수산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "naoh-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "naoh",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "NaOH",
      "caption": "수산화 나트륨",
      "explain": "수산화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·O·{{H}}입니다.",
      "clue": "나트륨 이온과 수산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "naoh-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "naoh",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "NaOH",
      "caption": "수산화 나트륨",
      "explain": "수산화 나트륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Na}}·O·{{H}}입니다.",
      "clue": "나트륨 이온과 수산화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "agno3-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "agno3",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "AgNO3",
      "caption": "질산 은",
      "explain": "질산 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{N}}·O입니다.",
      "clue": "은 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "agno3-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "agno3",
      "prompt": "화합물이다.",
      "formula": "AgNO3",
      "caption": "질산 은",
      "explain": "질산 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{N}}·O입니다.",
      "clue": "은 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "agno3-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "agno3",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "AgNO3",
      "caption": "질산 은",
      "explain": "질산 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{N}}·O입니다.",
      "clue": "은 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "agno3-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "agno3",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "AgNO3",
      "caption": "질산 은",
      "explain": "질산 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{N}}·O입니다.",
      "clue": "은 이온과 질산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "agcl-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "agcl",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "AgCl",
      "caption": "염화 은",
      "explain": "염화 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{Cl}}입니다.",
      "clue": "은 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "agcl-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "agcl",
      "prompt": "화합물이다.",
      "formula": "AgCl",
      "caption": "염화 은",
      "explain": "염화 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{Cl}}입니다.",
      "clue": "은 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "agcl-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "agcl",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "AgCl",
      "caption": "염화 은",
      "explain": "염화 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{Cl}}입니다.",
      "clue": "은 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "agcl-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "agcl",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "AgCl",
      "caption": "염화 은",
      "explain": "염화 은: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ag}}·{{Cl}}입니다.",
      "clue": "은 이온과 염화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "baso4-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "baso4",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "BaSO4",
      "caption": "황산 바륨",
      "explain": "황산 바륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ba}}·{{S}}·O입니다.",
      "clue": "바륨 이온과 황산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "baso4-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "baso4",
      "prompt": "화합물이다.",
      "formula": "BaSO4",
      "caption": "황산 바륨",
      "explain": "황산 바륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ba}}·{{S}}·O입니다.",
      "clue": "바륨 이온과 황산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "baso4-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "baso4",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "BaSO4",
      "caption": "황산 바륨",
      "explain": "황산 바륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ba}}·{{S}}·O입니다.",
      "clue": "바륨 이온과 황산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "baso4-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "baso4",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "BaSO4",
      "caption": "황산 바륨",
      "explain": "황산 바륨: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Ba}}·{{S}}·O입니다.",
      "clue": "바륨 이온과 황산 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "pbi2-01",
      "type": "ox",
      "topic": "물질 분류",
      "key": "pbi2",
      "prompt": "분자로 이루어진 물질이다.",
      "formula": "PbI2",
      "caption": "아이오딘화 납",
      "explain": "아이오딘화 납: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Pb}}·{{I}}입니다.",
      "clue": "납 이온과 아이오딘화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "pbi2-02",
      "type": "ox",
      "topic": "물질 분류",
      "key": "pbi2",
      "prompt": "화합물이다.",
      "formula": "PbI2",
      "caption": "아이오딘화 납",
      "explain": "아이오딘화 납: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Pb}}·{{I}}입니다.",
      "clue": "납 이온과 아이오딘화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": true
    },
    {
      "id": "pbi2-03",
      "type": "ox",
      "topic": "물질 분류",
      "key": "pbi2",
      "prompt": "한 종류의 원소로 이루어져 있다.",
      "formula": "PbI2",
      "caption": "아이오딘화 납",
      "explain": "아이오딘화 납: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Pb}}·{{I}}입니다.",
      "clue": "납 이온과 아이오딘화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "answer": false
    },
    {
      "id": "pbi2-04",
      "type": "pick2",
      "topic": "물질 분류",
      "key": "pbi2",
      "prompt": "두 기준으로 분류하세요.",
      "formula": "PbI2",
      "caption": "아이오딘화 납",
      "explain": "아이오딘화 납: 화합물 / 분자 X. 양이온과 음이온으로 이루어져 있으며 독립된 분자가 없습니다. 구성 원소는 {{Pb}}·{{I}}입니다.",
      "clue": "납 이온과 아이오딘화 이온으로 이루어진다.",
      "enabled": true,
      "scope": "자료 적용",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 1
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "water-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "water",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2H2O",
      "caption": "물",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "water-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "water",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2H2O",
      "caption": "물",
      "explain": "한 분자의 원자 3개 × 분자 2개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "water-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "water",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3H2O",
      "caption": "물",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "water-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "water",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3H2O",
      "caption": "물",
      "explain": "한 분자의 원자 3개 × 분자 3개 = 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "water-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "water",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4H2O",
      "caption": "물",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "water-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "water",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4H2O",
      "caption": "물",
      "explain": "한 분자의 원자 3개 × 분자 4개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hydrogen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2H2",
      "caption": "수소 기체",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hydrogen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2H2",
      "caption": "수소 기체",
      "explain": "한 분자의 원자 2개 × 분자 2개 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hydrogen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3H2",
      "caption": "수소 기체",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hydrogen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3H2",
      "caption": "수소 기체",
      "explain": "한 분자의 원자 2개 × 분자 3개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hydrogen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4H2",
      "caption": "수소 기체",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hydrogen-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hydrogen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4H2",
      "caption": "수소 기체",
      "explain": "한 분자의 원자 2개 × 분자 4개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "oxygen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2O2",
      "caption": "산소 기체",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "oxygen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2O2",
      "caption": "산소 기체",
      "explain": "한 분자의 원자 2개 × 분자 2개 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "oxygen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3O2",
      "caption": "산소 기체",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "oxygen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3O2",
      "caption": "산소 기체",
      "explain": "한 분자의 원자 2개 × 분자 3개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "oxygen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4O2",
      "caption": "산소 기체",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "oxygen-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "oxygen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4O2",
      "caption": "산소 기체",
      "explain": "한 분자의 원자 2개 × 분자 4개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2CO2",
      "caption": "이산화 탄소",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2CO2",
      "caption": "이산화 탄소",
      "explain": "한 분자의 원자 3개 × 분자 2개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3CO2",
      "caption": "이산화 탄소",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3CO2",
      "caption": "이산화 탄소",
      "explain": "한 분자의 원자 3개 × 분자 3개 = 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4CO2",
      "caption": "이산화 탄소",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co2-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4CO2",
      "caption": "이산화 탄소",
      "explain": "한 분자의 원자 3개 × 분자 4개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "nitrogen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2N2",
      "caption": "질소 기체",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "nitrogen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2N2",
      "caption": "질소 기체",
      "explain": "한 분자의 원자 2개 × 분자 2개 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "nitrogen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3N2",
      "caption": "질소 기체",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "nitrogen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3N2",
      "caption": "질소 기체",
      "explain": "한 분자의 원자 2개 × 분자 3개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "nitrogen",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4N2",
      "caption": "질소 기체",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "nitrogen-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "nitrogen",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4N2",
      "caption": "질소 기체",
      "explain": "한 분자의 원자 2개 × 분자 4개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ammonia",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2NH3",
      "caption": "암모니아",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ammonia",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2NH3",
      "caption": "암모니아",
      "explain": "한 분자의 원자 4개 × 분자 2개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ammonia",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3NH3",
      "caption": "암모니아",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ammonia",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3NH3",
      "caption": "암모니아",
      "explain": "한 분자의 원자 4개 × 분자 3개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ammonia",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4NH3",
      "caption": "암모니아",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ammonia-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ammonia",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4NH3",
      "caption": "암모니아",
      "explain": "한 분자의 원자 4개 × 분자 4개 = 16개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "16"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "methane",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2CH4",
      "caption": "메테인(메탄)",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "methane",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2CH4",
      "caption": "메테인(메탄)",
      "explain": "한 분자의 원자 5개 × 분자 2개 = 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "methane",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3CH4",
      "caption": "메테인(메탄)",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "methane",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3CH4",
      "caption": "메테인(메탄)",
      "explain": "한 분자의 원자 5개 × 분자 3개 = 15개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "15"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "methane",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4CH4",
      "caption": "메테인(메탄)",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "methane-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "methane",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4CH4",
      "caption": "메테인(메탄)",
      "explain": "한 분자의 원자 5개 × 분자 4개 = 20개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "20"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ozone",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2O3",
      "caption": "오존",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ozone",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2O3",
      "caption": "오존",
      "explain": "한 분자의 원자 3개 × 분자 2개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ozone",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3O3",
      "caption": "오존",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ozone",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3O3",
      "caption": "오존",
      "explain": "한 분자의 원자 3개 × 분자 3개 = 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ozone",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4O3",
      "caption": "오존",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ozone-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "ozone",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4O3",
      "caption": "오존",
      "explain": "한 분자의 원자 3개 × 분자 4개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hcl",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2HCl",
      "caption": "염화 수소 기체",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hcl",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2HCl",
      "caption": "염화 수소 기체",
      "explain": "한 분자의 원자 2개 × 분자 2개 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hcl",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3HCl",
      "caption": "염화 수소 기체",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hcl",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3HCl",
      "caption": "염화 수소 기체",
      "explain": "한 분자의 원자 2개 × 분자 3개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hcl",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4HCl",
      "caption": "염화 수소 기체",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "hcl-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "hcl",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4HCl",
      "caption": "염화 수소 기체",
      "explain": "한 분자의 원자 2개 × 분자 4개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "peroxide",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2H2O2",
      "caption": "과산화 수소",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "peroxide",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2H2O2",
      "caption": "과산화 수소",
      "explain": "한 분자의 원자 4개 × 분자 2개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "peroxide",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3H2O2",
      "caption": "과산화 수소",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "peroxide",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3H2O2",
      "caption": "과산화 수소",
      "explain": "한 분자의 원자 4개 × 분자 3개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "peroxide",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4H2O2",
      "caption": "과산화 수소",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "peroxide-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "peroxide",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4H2O2",
      "caption": "과산화 수소",
      "explain": "한 분자의 원자 4개 × 분자 4개 = 16개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "16"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "chlorine",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2Cl2",
      "caption": "염소 기체",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "chlorine",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2Cl2",
      "caption": "염소 기체",
      "explain": "한 분자의 원자 2개 × 분자 2개 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "chlorine",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3Cl2",
      "caption": "염소 기체",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "chlorine",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3Cl2",
      "caption": "염소 기체",
      "explain": "한 분자의 원자 2개 × 분자 3개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "chlorine",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4Cl2",
      "caption": "염소 기체",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "chlorine-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "chlorine",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4Cl2",
      "caption": "염소 기체",
      "explain": "한 분자의 원자 2개 × 분자 4개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2CO",
      "caption": "일산화 탄소",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2CO",
      "caption": "일산화 탄소",
      "explain": "한 분자의 원자 2개 × 분자 2개 = 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3CO",
      "caption": "일산화 탄소",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3CO",
      "caption": "일산화 탄소",
      "explain": "한 분자의 원자 2개 × 분자 3개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4CO",
      "caption": "일산화 탄소",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "co-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "co",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4CO",
      "caption": "일산화 탄소",
      "explain": "한 분자의 원자 2개 × 분자 4개 = 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "no2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2NO2",
      "caption": "이산화 질소",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "no2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2NO2",
      "caption": "이산화 질소",
      "explain": "한 분자의 원자 3개 × 분자 2개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "no2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3NO2",
      "caption": "이산화 질소",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "no2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3NO2",
      "caption": "이산화 질소",
      "explain": "한 분자의 원자 3개 × 분자 3개 = 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "no2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4NO2",
      "caption": "이산화 질소",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "no2-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "no2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4NO2",
      "caption": "이산화 질소",
      "explain": "한 분자의 원자 3개 × 분자 4개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-08",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "so2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "2SO2",
      "caption": "이산화 황",
      "explain": "앞의 계수 2이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-09",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "so2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "2SO2",
      "caption": "이산화 황",
      "explain": "한 분자의 원자 3개 × 분자 2개 = 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-10",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "so2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "3SO2",
      "caption": "이산화 황",
      "explain": "앞의 계수 3이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-11",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "so2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "3SO2",
      "caption": "이산화 황",
      "explain": "한 분자의 원자 3개 × 분자 3개 = 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-12",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "so2",
      "prompt": "표현된 분자는 모두 몇 개?",
      "formula": "4SO2",
      "caption": "이산화 황",
      "explain": "앞의 계수 4이 분자 수를 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "so2-13",
      "type": "text",
      "topic": "계수와 원자 수",
      "key": "so2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "4SO2",
      "caption": "이산화 황",
      "explain": "한 분자의 원자 3개 × 분자 4개 = 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-H-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-H",
      "prompt": "이 원소의 이름은?",
      "formula": "H",
      "caption": "",
      "explain": "{{H}}는 수소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "수소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-H-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-H",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "H",
      "caption": "",
      "explain": "{{H}} 전체가 수소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-H-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-H",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "H",
      "caption": "양성자 1개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 1개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-H-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-H",
      "prompt": "양성자는 1개이다.",
      "formula": "H",
      "caption": "원자 번호 1",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-He-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-He",
      "prompt": "이 원소의 이름은?",
      "formula": "He",
      "caption": "",
      "explain": "{{He}}는 헬륨의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "헬륨"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-He-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-He",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "He",
      "caption": "",
      "explain": "{{He}} 전체가 헬륨 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-He-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-He",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "He",
      "caption": "양성자 2개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-He-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-He",
      "prompt": "양성자는 2개이다.",
      "formula": "He",
      "caption": "원자 번호 2",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Li-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Li",
      "prompt": "이 원소의 이름은?",
      "formula": "Li",
      "caption": "",
      "explain": "{{Li}}는 리튬의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "리튬"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Li-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Li",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Li",
      "caption": "",
      "explain": "{{Li}} 전체가 리튬 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Li-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Li",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Li",
      "caption": "양성자 3개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 3개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Li-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Li",
      "prompt": "양성자는 3개이다.",
      "formula": "Li",
      "caption": "원자 번호 3",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Be-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Be",
      "prompt": "이 원소의 이름은?",
      "formula": "Be",
      "caption": "",
      "explain": "{{Be}}는 베릴륨의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "베릴륨"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Be-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Be",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Be",
      "caption": "",
      "explain": "{{Be}} 전체가 베릴륨 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Be-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Be",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Be",
      "caption": "양성자 4개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Be-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Be",
      "prompt": "양성자는 4개이다.",
      "formula": "Be",
      "caption": "원자 번호 4",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-B-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-B",
      "prompt": "이 원소의 이름은?",
      "formula": "B",
      "caption": "",
      "explain": "{{B}}는 붕소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "붕소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-B-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-B",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "B",
      "caption": "",
      "explain": "{{B}} 전체가 붕소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-B-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-B",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "B",
      "caption": "양성자 5개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 5개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "5"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-B-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-B",
      "prompt": "양성자는 5개이다.",
      "formula": "B",
      "caption": "원자 번호 5",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-C-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-C",
      "prompt": "이 원소의 이름은?",
      "formula": "C",
      "caption": "",
      "explain": "{{C}}는 탄소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "탄소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-C-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-C",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "C",
      "caption": "",
      "explain": "{{C}} 전체가 탄소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-C-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-C",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "C",
      "caption": "양성자 6개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-C-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-C",
      "prompt": "양성자는 6개이다.",
      "formula": "C",
      "caption": "원자 번호 6",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-N-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-N",
      "prompt": "이 원소의 이름은?",
      "formula": "N",
      "caption": "",
      "explain": "{{N}}는 질소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "질소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-N-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-N",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "N",
      "caption": "",
      "explain": "{{N}} 전체가 질소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-N-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-N",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "N",
      "caption": "양성자 7개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 7개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "7"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-N-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-N",
      "prompt": "양성자는 7개이다.",
      "formula": "N",
      "caption": "원자 번호 7",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-O-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-O",
      "prompt": "이 원소의 이름은?",
      "formula": "O",
      "caption": "",
      "explain": "O는 산소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "산소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-O-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-O",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "O",
      "caption": "",
      "explain": "O 전체가 산소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-O-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-O",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "O",
      "caption": "양성자 8개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 8개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "8"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-O-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-O",
      "prompt": "양성자는 8개이다.",
      "formula": "O",
      "caption": "원자 번호 8",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-F-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-F",
      "prompt": "이 원소의 이름은?",
      "formula": "F",
      "caption": "",
      "explain": "{{F}}는 플루오린의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "플루오린",
        "플루오르",
        "불소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-F-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-F",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "F",
      "caption": "",
      "explain": "{{F}} 전체가 플루오린 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-F-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-F",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "F",
      "caption": "양성자 9개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 9개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "9"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-F-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-F",
      "prompt": "양성자는 9개이다.",
      "formula": "F",
      "caption": "원자 번호 9",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Ne-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Ne",
      "prompt": "이 원소의 이름은?",
      "formula": "Ne",
      "caption": "",
      "explain": "{{Ne}}는 네온의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "네온"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Ne-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Ne",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Ne",
      "caption": "",
      "explain": "{{Ne}} 전체가 네온 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Ne-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Ne",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Ne",
      "caption": "양성자 10개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Ne-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Ne",
      "prompt": "양성자는 10개이다.",
      "formula": "Ne",
      "caption": "원자 번호 10",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Na-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Na",
      "prompt": "이 원소의 이름은?",
      "formula": "Na",
      "caption": "",
      "explain": "{{Na}}는 나트륨의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "나트륨"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Na-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Na",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Na",
      "caption": "",
      "explain": "{{Na}} 전체가 나트륨 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Na-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Na",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Na",
      "caption": "양성자 11개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 11개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "11"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Na-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Na",
      "prompt": "양성자는 11개이다.",
      "formula": "Na",
      "caption": "원자 번호 11",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Mg-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Mg",
      "prompt": "이 원소의 이름은?",
      "formula": "Mg",
      "caption": "",
      "explain": "{{Mg}}는 마그네슘의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "마그네슘"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Mg-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Mg",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Mg",
      "caption": "",
      "explain": "{{Mg}} 전체가 마그네슘 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Mg-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Mg",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Mg",
      "caption": "양성자 12개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 12개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "12"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Mg-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Mg",
      "prompt": "양성자는 12개이다.",
      "formula": "Mg",
      "caption": "원자 번호 12",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Al-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Al",
      "prompt": "이 원소의 이름은?",
      "formula": "Al",
      "caption": "",
      "explain": "{{Al}}는 알루미늄의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "알루미늄"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Al-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Al",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Al",
      "caption": "",
      "explain": "{{Al}} 전체가 알루미늄 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Al-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Al",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Al",
      "caption": "양성자 13개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 13개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "13"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Al-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Al",
      "prompt": "양성자는 13개이다.",
      "formula": "Al",
      "caption": "원자 번호 13",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Si-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Si",
      "prompt": "이 원소의 이름은?",
      "formula": "Si",
      "caption": "",
      "explain": "{{Si}}는 규소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "규소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Si-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Si",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Si",
      "caption": "",
      "explain": "{{Si}} 전체가 규소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Si-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Si",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Si",
      "caption": "양성자 14개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 14개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "14"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Si-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Si",
      "prompt": "양성자는 14개이다.",
      "formula": "Si",
      "caption": "원자 번호 14",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-P-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-P",
      "prompt": "이 원소의 이름은?",
      "formula": "P",
      "caption": "",
      "explain": "{{P}}는 인의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "인"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-P-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-P",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "P",
      "caption": "",
      "explain": "{{P}} 전체가 인 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-P-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-P",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "P",
      "caption": "양성자 15개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 15개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "15"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-P-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-P",
      "prompt": "양성자는 15개이다.",
      "formula": "P",
      "caption": "원자 번호 15",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-S-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-S",
      "prompt": "이 원소의 이름은?",
      "formula": "S",
      "caption": "",
      "explain": "{{S}}는 황의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "황"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-S-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-S",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "S",
      "caption": "",
      "explain": "{{S}} 전체가 황 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-S-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-S",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "S",
      "caption": "양성자 16개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 16개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "16"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-S-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-S",
      "prompt": "양성자는 16개이다.",
      "formula": "S",
      "caption": "원자 번호 16",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Cl-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Cl",
      "prompt": "이 원소의 이름은?",
      "formula": "Cl",
      "caption": "",
      "explain": "{{Cl}}는 염소의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "염소"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Cl-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Cl",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Cl",
      "caption": "",
      "explain": "{{Cl}} 전체가 염소 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Cl-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Cl",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Cl",
      "caption": "양성자 17개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 17개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "17"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Cl-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Cl",
      "prompt": "양성자는 17개이다.",
      "formula": "Cl",
      "caption": "원자 번호 17",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Ar-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Ar",
      "prompt": "이 원소의 이름은?",
      "formula": "Ar",
      "caption": "",
      "explain": "{{Ar}}는 아르곤의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "아르곤"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Ar-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Ar",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Ar",
      "caption": "",
      "explain": "{{Ar}} 전체가 아르곤 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Ar-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Ar",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Ar",
      "caption": "양성자 18개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 18개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Ar-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Ar",
      "prompt": "양성자는 18개이다.",
      "formula": "Ar",
      "caption": "원자 번호 18",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-K-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-K",
      "prompt": "이 원소의 이름은?",
      "formula": "K",
      "caption": "",
      "explain": "{{K}}는 칼륨의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "칼륨"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-K-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-K",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "K",
      "caption": "",
      "explain": "{{K}} 전체가 칼륨 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-K-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-K",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "K",
      "caption": "양성자 19개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 19개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "19"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-K-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-K",
      "prompt": "양성자는 19개이다.",
      "formula": "K",
      "caption": "원자 번호 19",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Ca-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Ca",
      "prompt": "이 원소의 이름은?",
      "formula": "Ca",
      "caption": "",
      "explain": "{{Ca}}는 칼슘의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "칼슘"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Ca-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Ca",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Ca",
      "caption": "",
      "explain": "{{Ca}} 전체가 칼슘 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Ca-03",
      "type": "text",
      "topic": "원자의 구조",
      "key": "symbol-Ca",
      "prompt": "이 원자의 전자는 몇 개?",
      "formula": "Ca",
      "caption": "양성자 20개 · 중성인 원자",
      "explain": "전기적으로 중성인 원자에서는 양성자 수와 전자 수가 같습니다. 따라서 20개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "20"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "symbol-Ca-04",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "symbol-Ca",
      "prompt": "양성자는 20개이다.",
      "formula": "Ca",
      "caption": "원자 번호 20",
      "explain": "원자 번호는 양성자 수와 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Fe-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Fe",
      "prompt": "이 원소의 이름은?",
      "formula": "Fe",
      "caption": "",
      "explain": "{{Fe}}는 철의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "철"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Fe-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Fe",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Fe",
      "caption": "",
      "explain": "{{Fe}} 전체가 철 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Cu-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Cu",
      "prompt": "이 원소의 이름은?",
      "formula": "Cu",
      "caption": "",
      "explain": "{{Cu}}는 구리의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "구리"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Cu-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Cu",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Cu",
      "caption": "",
      "explain": "{{Cu}} 전체가 구리 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Zn-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Zn",
      "prompt": "이 원소의 이름은?",
      "formula": "Zn",
      "caption": "",
      "explain": "{{Zn}}는 아연의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "아연"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Zn-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Zn",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Zn",
      "caption": "",
      "explain": "{{Zn}} 전체가 아연 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Ag-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Ag",
      "prompt": "이 원소의 이름은?",
      "formula": "Ag",
      "caption": "",
      "explain": "{{Ag}}는 은의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "은"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Ag-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Ag",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Ag",
      "caption": "",
      "explain": "{{Ag}} 전체가 은 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-I-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-I",
      "prompt": "이 원소의 이름은?",
      "formula": "I",
      "caption": "",
      "explain": "{{I}}는 아이오딘의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "아이오딘",
        "요오드"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-I-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-I",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "I",
      "caption": "",
      "explain": "{{I}} 전체가 아이오딘 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Ba-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Ba",
      "prompt": "이 원소의 이름은?",
      "formula": "Ba",
      "caption": "",
      "explain": "{{Ba}}는 바륨의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "바륨"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Ba-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Ba",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Ba",
      "caption": "",
      "explain": "{{Ba}} 전체가 바륨 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "symbol-Au-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Au",
      "prompt": "이 원소의 이름은?",
      "formula": "Au",
      "caption": "",
      "explain": "{{Au}}는 금의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "금"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Au-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Au",
      "prompt": "서로 다른 두 원소를 나타낸다.",
      "formula": "Au",
      "caption": "",
      "explain": "{{Au}} 전체가 금 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "symbol-Pb-01",
      "type": "text",
      "topic": "원소 기호",
      "key": "symbol-Pb",
      "prompt": "이 원소의 이름은?",
      "formula": "Pb",
      "caption": "",
      "explain": "{{Pb}}는 납의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "납"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "symbol-Pb-02",
      "type": "ox",
      "topic": "원소 기호",
      "key": "symbol-Pb",
      "prompt": "원소 한 종류를 나타낸다.",
      "formula": "Pb",
      "caption": "",
      "explain": "{{Pb}} 전체가 납 한 종류의 원소를 나타내는 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-H-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-H",
      "prompt": "이 이온의 이름은?",
      "formula": "H^+",
      "caption": "",
      "explain": "{{H^+}}는 수소 이온입니다. 양이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "수소"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-H-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-H",
      "prompt": "양이온이다.",
      "formula": "H^+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-H-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-H",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "H^+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-H-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-H",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "H^+",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-H-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-H",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "H^+",
      "caption": "",
      "explain": "전하 +1은 전자 1개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-H-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-H",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "H^+",
      "caption": "양성자 1개",
      "explain": "양성자 1개에서 잃은 전자 1개를 빼면 0개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "0"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Li-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Li",
      "prompt": "이 이온의 이름은?",
      "formula": "Li^+",
      "caption": "",
      "explain": "{{Li^+}}는 리튬 이온입니다. 양이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "리튬"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Li-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Li",
      "prompt": "양이온이다.",
      "formula": "Li^+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Li-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Li",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Li^+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Li-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Li",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Li^+",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Li-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Li",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Li^+",
      "caption": "",
      "explain": "전하 +1은 전자 1개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Li-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Li",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Li^+",
      "caption": "양성자 3개",
      "explain": "양성자 3개에서 잃은 전자 1개를 빼면 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Na-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Na",
      "prompt": "이 이온의 이름은?",
      "formula": "Na^+",
      "caption": "",
      "explain": "{{Na^+}}는 나트륨 이온입니다. 양이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "나트륨"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Na-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Na",
      "prompt": "양이온이다.",
      "formula": "Na^+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Na-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Na",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Na^+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Na-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Na",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Na^+",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Na-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Na",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Na^+",
      "caption": "",
      "explain": "전하 +1은 전자 1개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Na-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Na",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Na^+",
      "caption": "양성자 11개",
      "explain": "양성자 11개에서 잃은 전자 1개를 빼면 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-K-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-K",
      "prompt": "이 이온의 이름은?",
      "formula": "K^+",
      "caption": "",
      "explain": "{{K^+}}는 칼륨 이온입니다. 양이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "칼륨"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-K-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-K",
      "prompt": "양이온이다.",
      "formula": "K^+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-K-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-K",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "K^+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-K-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-K",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "K^+",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-K-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-K",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "K^+",
      "caption": "",
      "explain": "전하 +1은 전자 1개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-K-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-K",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "K^+",
      "caption": "양성자 19개",
      "explain": "양성자 19개에서 잃은 전자 1개를 빼면 18개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Ag-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Ag",
      "prompt": "이 이온의 이름은?",
      "formula": "Ag^+",
      "caption": "",
      "explain": "{{Ag^+}}는 은 이온입니다. 양이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "은"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Ag-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Ag",
      "prompt": "양이온이다.",
      "formula": "Ag^+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Ag-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Ag",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Ag^+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Ag-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Ag",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Ag^+",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Ag-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Ag",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Ag^+",
      "caption": "",
      "explain": "전하 +1은 전자 1개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Mg2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Mg2",
      "prompt": "이 이온의 이름은?",
      "formula": "Mg^2+",
      "caption": "",
      "explain": "{{Mg^2+}}는 마그네슘 이온입니다. 양이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "마그네슘"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Mg2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Mg2",
      "prompt": "양이온이다.",
      "formula": "Mg^2+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Mg2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Mg2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Mg^2+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Mg2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Mg2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Mg^2+",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Mg2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Mg2",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Mg^2+",
      "caption": "",
      "explain": "전하 +2은 전자 2개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Mg2-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Mg2",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Mg^2+",
      "caption": "양성자 12개",
      "explain": "양성자 12개에서 잃은 전자 2개를 빼면 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Ca2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Ca2",
      "prompt": "이 이온의 이름은?",
      "formula": "Ca^2+",
      "caption": "",
      "explain": "{{Ca^2+}}는 칼슘 이온입니다. 양이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "칼슘"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Ca2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Ca2",
      "prompt": "양이온이다.",
      "formula": "Ca^2+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Ca2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Ca2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Ca^2+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Ca2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Ca2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Ca^2+",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Ca2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Ca2",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Ca^2+",
      "caption": "",
      "explain": "전하 +2은 전자 2개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Ca2-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Ca2",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Ca^2+",
      "caption": "양성자 20개",
      "explain": "양성자 20개에서 잃은 전자 2개를 빼면 18개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Ba2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Ba2",
      "prompt": "이 이온의 이름은?",
      "formula": "Ba^2+",
      "caption": "",
      "explain": "{{Ba^2+}}는 바륨 이온입니다. 양이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "바륨"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Ba2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Ba2",
      "prompt": "양이온이다.",
      "formula": "Ba^2+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Ba2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Ba2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Ba^2+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Ba2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Ba2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Ba^2+",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Ba2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Ba2",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Ba^2+",
      "caption": "",
      "explain": "전하 +2은 전자 2개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Zn2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Zn2",
      "prompt": "이 이온의 이름은?",
      "formula": "Zn^2+",
      "caption": "",
      "explain": "{{Zn^2+}}는 아연 이온입니다. 양이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "아연"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Zn2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Zn2",
      "prompt": "양이온이다.",
      "formula": "Zn^2+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Zn2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Zn2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Zn^2+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Zn2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Zn2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Zn^2+",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Zn2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Zn2",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Zn^2+",
      "caption": "",
      "explain": "전하 +2은 전자 2개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Zn2-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Zn2",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Zn^2+",
      "caption": "양성자 30개",
      "explain": "양성자 30개에서 잃은 전자 2개를 빼면 28개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "28"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Cu2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Cu2",
      "prompt": "이 이온의 이름은?",
      "formula": "Cu^2+",
      "caption": "",
      "explain": "{{Cu^2+}}는 구리(Ⅱ) 이온입니다. 양이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "구리(Ⅱ)",
        "구리",
        "구리(II)",
        "구리2",
        "구리(2)",
        "구리Ⅱ"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Cu2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Cu2",
      "prompt": "양이온이다.",
      "formula": "Cu^2+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Cu2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Cu2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Cu^2+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Cu2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Cu2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Cu^2+",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Cu2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Cu2",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Cu^2+",
      "caption": "",
      "explain": "전하 +2은 전자 2개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Cu2-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Cu2",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Cu^2+",
      "caption": "양성자 29개",
      "explain": "양성자 29개에서 잃은 전자 2개를 빼면 27개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "27"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Al3-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Al3",
      "prompt": "이 이온의 이름은?",
      "formula": "Al^3+",
      "caption": "",
      "explain": "{{Al^3+}}는 알루미늄 이온입니다. 양이온이며 전하의 크기는 3입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "알루미늄"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Al3-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Al3",
      "prompt": "양이온이다.",
      "formula": "Al^3+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Al3-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Al3",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Al^3+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Al3-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Al3",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Al^3+",
      "caption": "",
      "explain": "중성 원자가 전자 3개를 잃으면 양이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 0
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "ion-Al3-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Al3",
      "prompt": "중성 원자가 전자를 몇 개 잃었을까?",
      "formula": "Al^3+",
      "caption": "",
      "explain": "전하 +3은 전자 3개를 잃었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Al3-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Al3",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Al^3+",
      "caption": "양성자 13개",
      "explain": "양성자 13개에서 잃은 전자 3개를 빼면 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-NH4-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-NH4",
      "prompt": "이 이온의 이름은?",
      "formula": "NH4^+",
      "caption": "",
      "explain": "{{NH4^+}}는 암모늄 이온입니다. 양이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "암모늄"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-NH4-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-NH4",
      "prompt": "양이온이다.",
      "formula": "NH4^+",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-NH4-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-NH4",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "NH4^+",
      "caption": "",
      "explain": "양이온은 반대 부호인 (-)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-NH4-04",
      "type": "text",
      "topic": "다원자 이온",
      "key": "ion-NH4",
      "prompt": "이온 1개 속 원자는 모두 몇 개?",
      "formula": "NH4^+",
      "caption": "",
      "explain": "{{NH4}}의 원자 수를 더하면 5개입니다. 오른쪽 위의 전하 숫자는 더하지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "5"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-NH4-05",
      "type": "ox",
      "topic": "다원자 이온",
      "key": "ion-NH4",
      "prompt": "여러 원자가 모여 전하를 띤 입자이다.",
      "formula": "NH4^+",
      "caption": "",
      "explain": "여러 원자가 모인 원자단 전체가 전하를 띠는 다원자 이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-F-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-F",
      "prompt": "이 이온의 이름은?",
      "formula": "F^-",
      "caption": "",
      "explain": "{{F^-}}는 플루오린화 이온입니다. 음이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "플루오린화",
        "플루오르화",
        "불화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-F-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-F",
      "prompt": "양이온이다.",
      "formula": "F^-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-F-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-F",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "F^-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-F-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-F",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "F^-",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 얻으면 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 1
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ion-F-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-F",
      "prompt": "중성 원자가 전자를 몇 개 얻었을까?",
      "formula": "F^-",
      "caption": "",
      "explain": "전하 -1은 전자 1개를 얻었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-F-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-F",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "F^-",
      "caption": "양성자 9개",
      "explain": "양성자 9개에서 얻은 전자 1개를 더하면 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Cl-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Cl",
      "prompt": "이 이온의 이름은?",
      "formula": "Cl^-",
      "caption": "",
      "explain": "{{Cl^-}}는 염화 이온입니다. 음이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "염화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Cl-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Cl",
      "prompt": "양이온이다.",
      "formula": "Cl^-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Cl-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Cl",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Cl^-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Cl-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Cl",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Cl^-",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 얻으면 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 1
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ion-Cl-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Cl",
      "prompt": "중성 원자가 전자를 몇 개 얻었을까?",
      "formula": "Cl^-",
      "caption": "",
      "explain": "전하 -1은 전자 1개를 얻었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Cl-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-Cl",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "Cl^-",
      "caption": "양성자 17개",
      "explain": "양성자 17개에서 얻은 전자 1개를 더하면 18개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-Br-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-Br",
      "prompt": "이 이온의 이름은?",
      "formula": "Br^-",
      "caption": "",
      "explain": "{{Br^-}}는 브로민화 이온입니다. 음이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "브로민화",
        "브롬화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-Br-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-Br",
      "prompt": "양이온이다.",
      "formula": "Br^-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-Br-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-Br",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "Br^-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-Br-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-Br",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "Br^-",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 얻으면 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 1
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ion-Br-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-Br",
      "prompt": "중성 원자가 전자를 몇 개 얻었을까?",
      "formula": "Br^-",
      "caption": "",
      "explain": "전하 -1은 전자 1개를 얻었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-I-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-I",
      "prompt": "이 이온의 이름은?",
      "formula": "I^-",
      "caption": "",
      "explain": "{{I^-}}는 아이오딘화 이온입니다. 음이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "아이오딘화",
        "요오드화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-I-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-I",
      "prompt": "양이온이다.",
      "formula": "I^-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-I-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-I",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "I^-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-I-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-I",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "I^-",
      "caption": "",
      "explain": "중성 원자가 전자 1개를 얻으면 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 1
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ion-I-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-I",
      "prompt": "중성 원자가 전자를 몇 개 얻었을까?",
      "formula": "I^-",
      "caption": "",
      "explain": "전하 -1은 전자 1개를 얻었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-O2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-O2",
      "prompt": "이 이온의 이름은?",
      "formula": "O^2-",
      "caption": "",
      "explain": "{{O^2-}}는 산화 이온입니다. 음이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "산화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-O2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-O2",
      "prompt": "양이온이다.",
      "formula": "O^2-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-O2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-O2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "O^2-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-O2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-O2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "O^2-",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 얻으면 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 1
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ion-O2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-O2",
      "prompt": "중성 원자가 전자를 몇 개 얻었을까?",
      "formula": "O^2-",
      "caption": "",
      "explain": "전하 -2은 전자 2개를 얻었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-O2-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-O2",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "O^2-",
      "caption": "양성자 8개",
      "explain": "양성자 8개에서 얻은 전자 2개를 더하면 10개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "10"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-S2-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-S2",
      "prompt": "이 이온의 이름은?",
      "formula": "S^2-",
      "caption": "",
      "explain": "{{S^2-}}는 황화 이온입니다. 음이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "황화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-S2-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-S2",
      "prompt": "양이온이다.",
      "formula": "S^2-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-S2-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-S2",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "S^2-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-S2-04",
      "type": "pick2",
      "topic": "이온의 생성",
      "key": "ion-S2",
      "prompt": "중성 원자가 이 이온이 되면?",
      "formula": "S^2-",
      "caption": "",
      "explain": "중성 원자가 전자 2개를 얻으면 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "이온의 종류",
          "options": [
            "양이온",
            "음이온"
          ],
          "correct": 1
        },
        {
          "label": "전자 변화",
          "options": [
            "전자를 잃음",
            "전자를 얻음"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "ion-S2-05",
      "type": "text",
      "topic": "이온의 생성",
      "key": "ion-S2",
      "prompt": "중성 원자가 전자를 몇 개 얻었을까?",
      "formula": "S^2-",
      "caption": "",
      "explain": "전하 -2은 전자 2개를 얻었다는 뜻입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-S2-06",
      "type": "text",
      "topic": "이온의 전자 수",
      "key": "ion-S2",
      "prompt": "이 이온의 전자는 몇 개?",
      "formula": "S^2-",
      "caption": "양성자 16개",
      "explain": "양성자 16개에서 얻은 전자 2개를 더하면 18개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-OH-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-OH",
      "prompt": "이 이온의 이름은?",
      "formula": "OH^-",
      "caption": "",
      "explain": "{{OH^-}}는 수산화 이온입니다. 음이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "수산화"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-OH-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-OH",
      "prompt": "양이온이다.",
      "formula": "OH^-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-OH-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-OH",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "OH^-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-OH-04",
      "type": "text",
      "topic": "다원자 이온",
      "key": "ion-OH",
      "prompt": "이온 1개 속 원자는 모두 몇 개?",
      "formula": "OH^-",
      "caption": "",
      "explain": "{{OH}}의 원자 수를 더하면 2개입니다. 오른쪽 위의 전하 숫자는 더하지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-OH-05",
      "type": "ox",
      "topic": "다원자 이온",
      "key": "ion-OH",
      "prompt": "여러 원자가 모여 전하를 띤 입자이다.",
      "formula": "OH^-",
      "caption": "",
      "explain": "여러 원자가 모인 원자단 전체가 전하를 띠는 다원자 이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-NO3-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-NO3",
      "prompt": "이 이온의 이름은?",
      "formula": "NO3^-",
      "caption": "",
      "explain": "{{NO3^-}}는 질산 이온입니다. 음이온이며 전하의 크기는 1입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "질산"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-NO3-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-NO3",
      "prompt": "양이온이다.",
      "formula": "NO3^-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-NO3-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-NO3",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "NO3^-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-NO3-04",
      "type": "text",
      "topic": "다원자 이온",
      "key": "ion-NO3",
      "prompt": "이온 1개 속 원자는 모두 몇 개?",
      "formula": "NO3^-",
      "caption": "",
      "explain": "{{NO3}}의 원자 수를 더하면 4개입니다. 오른쪽 위의 전하 숫자는 더하지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-NO3-05",
      "type": "ox",
      "topic": "다원자 이온",
      "key": "ion-NO3",
      "prompt": "여러 원자가 모여 전하를 띤 입자이다.",
      "formula": "NO3^-",
      "caption": "",
      "explain": "여러 원자가 모인 원자단 전체가 전하를 띠는 다원자 이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-SO42-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-SO42",
      "prompt": "이 이온의 이름은?",
      "formula": "SO4^2-",
      "caption": "",
      "explain": "{{SO4^2-}}는 황산 이온입니다. 음이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "황산"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-SO42-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-SO42",
      "prompt": "양이온이다.",
      "formula": "SO4^2-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-SO42-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-SO42",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "SO4^2-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-SO42-04",
      "type": "text",
      "topic": "다원자 이온",
      "key": "ion-SO42",
      "prompt": "이온 1개 속 원자는 모두 몇 개?",
      "formula": "SO4^2-",
      "caption": "",
      "explain": "{{SO4}}의 원자 수를 더하면 5개입니다. 오른쪽 위의 전하 숫자는 더하지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "5"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-SO42-05",
      "type": "ox",
      "topic": "다원자 이온",
      "key": "ion-SO42",
      "prompt": "여러 원자가 모여 전하를 띤 입자이다.",
      "formula": "SO4^2-",
      "caption": "",
      "explain": "여러 원자가 모인 원자단 전체가 전하를 띠는 다원자 이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-CO32-01",
      "type": "text",
      "topic": "이온 이름",
      "key": "ion-CO32",
      "prompt": "이 이온의 이름은?",
      "formula": "CO3^2-",
      "caption": "",
      "explain": "{{CO3^2-}}는 탄산 이온입니다. 음이온이며 전하의 크기는 2입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "탄산"
      ],
      "suffix": "이온",
      "inputMode": "text"
    },
    {
      "id": "ion-CO32-02",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-CO32",
      "prompt": "양이온이다.",
      "formula": "CO3^2-",
      "caption": "",
      "explain": "오른쪽 위의 부호가 +이면 양이온, -이면 음이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-CO32-03",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ion-CO32",
      "prompt": "전압을 걸면 (+)극으로 이동한다.",
      "formula": "CO3^2-",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-CO32-04",
      "type": "text",
      "topic": "다원자 이온",
      "key": "ion-CO32",
      "prompt": "이온 1개 속 원자는 모두 몇 개?",
      "formula": "CO3^2-",
      "caption": "",
      "explain": "{{CO3}}의 원자 수를 더하면 4개입니다. 오른쪽 위의 전하 숫자는 더하지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric"
    },
    {
      "id": "ion-CO32-05",
      "type": "ox",
      "topic": "다원자 이온",
      "key": "ion-CO32",
      "prompt": "여러 원자가 모여 전하를 띤 입자이다.",
      "formula": "CO3^2-",
      "caption": "",
      "explain": "여러 원자가 모인 원자단 전체가 전하를 띠는 다원자 이온입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "element-definition-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "element-definition",
      "prompt": "원소는 물질을 이루는 기본 성분이다.",
      "formula": "",
      "caption": "",
      "explain": "원소는 물질을 이루는 기본 성분의 종류를 뜻합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "compound-definition-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "compound-definition",
      "prompt": "화합물에는 두 종류 이상의 원소가 있다.",
      "formula": "",
      "caption": "",
      "explain": "화합물은 두 종류 이상의 원소가 결합한 순물질입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "compound-all-molecules-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "compound-all-molecules",
      "prompt": "화합물은 모두 분자로 이루어진다.",
      "formula": "",
      "caption": "",
      "explain": "염화 나트륨처럼 이온으로 이루어진 화합물도 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "molecule-all-compounds-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "molecule-all-compounds",
      "prompt": "분자는 모두 두 종류 이상의 원소로 이루어진다.",
      "formula": "",
      "caption": "",
      "explain": "산소 분자 {{O2}}처럼 한 종류의 원소로 이루어진 분자도 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "water-not-element-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "water-not-element",
      "prompt": "물은 한 가지 물질이므로 원소이다.",
      "formula": "",
      "caption": "",
      "explain": "물은 한 가지 순물질이지만 {{H}}와 O가 결합한 화합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "mixture-air-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "mixture-air",
      "prompt": "공기는 한 가지 화합물이다.",
      "formula": "",
      "caption": "",
      "explain": "공기는 질소·산소 등 여러 물질이 섞인 혼합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "salt-water-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "salt-water",
      "prompt": "소금물 전체는 순물질이다.",
      "formula": "",
      "caption": "",
      "explain": "소금물은 물과 염화 나트륨이 섞인 혼합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "pure-sugar-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "pure-sugar",
      "prompt": "순수한 설탕은 혼합물이다.",
      "formula": "",
      "caption": "",
      "explain": "순수한 설탕은 분자로 이루어진 화합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "vinegar-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "vinegar",
      "prompt": "식초 전체를 아세트산 순물질로 분류한다.",
      "formula": "",
      "caption": "",
      "explain": "식초는 물에 아세트산 등이 섞여 있는 혼합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "hcl-solution-01",
      "type": "ox",
      "topic": "원소와 화합물",
      "key": "hcl-solution",
      "prompt": "염화 수소 기체와 염산은 구별해야 한다.",
      "formula": "",
      "caption": "",
      "explain": "염산은 염화 수소가 물에 녹아 있는 수용액입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "atom-divide-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "atom-divide",
      "prompt": "원자는 더 작은 입자로 이루어져 있다.",
      "formula": "",
      "caption": "",
      "explain": "원자는 양성자·중성자·전자 등의 입자로 구성됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "molecule-property-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "molecule-property",
      "prompt": "분자는 물질의 성질을 나타내는 입자이다.",
      "formula": "",
      "caption": "",
      "explain": "분자로 이루어진 물질에서는 분자가 그 물질의 성질을 나타내는 기본 입자입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "all-gas-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "all-gas",
      "prompt": "기체는 모두 분자로 이루어진다.",
      "formula": "",
      "caption": "",
      "explain": "헬륨·네온·아르곤은 중학교 분류에서 원자로 존재하는 기체입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "all-solid-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "all-solid",
      "prompt": "고체에는 분자가 없다.",
      "formula": "",
      "caption": "",
      "explain": "설탕과 얼음처럼 분자로 이루어진 고체도 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "phase-water-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "phase-water",
      "prompt": "물이 얼어도 물 분자 자체는 그대로이다.",
      "formula": "",
      "caption": "",
      "explain": "상태 변화에서는 물 분자의 구성 자체가 달라지지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "evap-water-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "evap-water",
      "prompt": "물이 끓으면 수소와 산소로 분해된다.",
      "formula": "",
      "caption": "",
      "explain": "끓음은 상태 변화입니다. 수증기도 {{H2O}}로 이루어집니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "he-ne-atomic-01",
      "type": "ox",
      "topic": "원자와 분자",
      "key": "he-ne-atomic",
      "prompt": "네온은 원자 하나씩 독립적으로 존재한다.",
      "formula": "",
      "caption": "",
      "explain": "중학교에서는 네온을 분자가 아닌 원자로 이루어진 물질로 분류합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "proton-charge-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "proton-charge",
      "prompt": "양성자는 (+)전하를 띤다.",
      "formula": "",
      "caption": "",
      "explain": "양성자는 양전하를 띠며 원자핵 안에 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "electron-charge-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "electron-charge",
      "prompt": "전자는 (+)전하를 띤다.",
      "formula": "",
      "caption": "",
      "explain": "전자는 (-)전하를 띱니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "neutron-charge-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "neutron-charge",
      "prompt": "중성자는 전하를 띠지 않는다.",
      "formula": "",
      "caption": "",
      "explain": "중성자는 전기적으로 중성입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "nucleus-location-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "nucleus-location",
      "prompt": "전자는 원자핵 안에 있다.",
      "formula": "",
      "caption": "",
      "explain": "전자는 원자핵 주위에 있고, 원자핵에는 양성자 등이 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "proton-location-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "proton-location",
      "prompt": "양성자는 원자핵 안에 있다.",
      "formula": "",
      "caption": "",
      "explain": "원자의 중심인 원자핵에 양성자가 들어 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "atom-neutral-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "atom-neutral",
      "prompt": "중성인 원자는 양성자 수와 전자 수가 같다.",
      "formula": "",
      "caption": "",
      "explain": "양전하와 음전하의 총량이 같아 전기적으로 중성입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "neutral-no-charge-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "neutral-no-charge",
      "prompt": "중성인 원자에는 전하를 띤 입자가 없다.",
      "formula": "",
      "caption": "",
      "explain": "양성자와 전자가 있지만 총 전하량의 합이 0입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "element-protons-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "element-protons",
      "prompt": "양성자 수가 달라지면 원소의 종류가 달라진다.",
      "formula": "",
      "caption": "",
      "explain": "원소의 종류는 양성자 수로 결정됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-element-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "ion-element",
      "prompt": "전자를 잃으면 다른 원소가 된다.",
      "formula": "",
      "caption": "",
      "explain": "전자를 잃어도 양성자 수는 같으므로 원소의 종류는 바뀌지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "nucleus-mass-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "nucleus-mass",
      "prompt": "원자 질량의 대부분은 원자핵에 있다.",
      "formula": "",
      "caption": "",
      "explain": "양성자와 중성자는 전자보다 훨씬 무겁습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "atomic-number-01",
      "type": "ox",
      "topic": "원자의 구조",
      "key": "atomic-number",
      "prompt": "원자 번호는 전자 수가 아니라 양성자 수이다.",
      "formula": "",
      "caption": "",
      "explain": "원자 번호는 양성자 수입니다. 중성인 원자에서는 전자 수와도 같습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "cation-loss-01",
      "type": "ox",
      "topic": "이온의 생성",
      "key": "cation-loss",
      "prompt": "원자가 전자를 잃으면 양이온이 된다.",
      "formula": "",
      "caption": "",
      "explain": "(-)전하를 띤 전자를 잃으면 전체적으로 (+)전하를 띱니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "anion-gain-01",
      "type": "ox",
      "topic": "이온의 생성",
      "key": "anion-gain",
      "prompt": "원자가 전자를 얻으면 음이온이 된다.",
      "formula": "",
      "caption": "",
      "explain": "(-)전하를 띤 전자를 얻으면 전체적으로 (-)전하를 띱니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "cation-protons-01",
      "type": "ox",
      "topic": "이온의 생성",
      "key": "cation-protons",
      "prompt": "양이온은 양성자를 얻어서 만들어진다.",
      "formula": "",
      "caption": "",
      "explain": "이 단원에서 이온은 전자를 잃거나 얻어서 생깁니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-nucleus-01",
      "type": "ox",
      "topic": "이온의 생성",
      "key": "ion-nucleus",
      "prompt": "원자가 이온이 될 때 양성자 수가 변한다.",
      "formula": "",
      "caption": "",
      "explain": "이온이 될 때 변하는 것은 전자 수이며, 양성자 수는 그대로입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "loss-two-01",
      "type": "ox",
      "topic": "이온의 생성",
      "key": "loss-two",
      "prompt": "전자 2개를 잃은 원자는 2+ 이온이다.",
      "formula": "",
      "caption": "",
      "explain": "전자 2개를 잃으면 양전하가 2만큼 남습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "gain-two-01",
      "type": "ox",
      "topic": "이온의 생성",
      "key": "gain-two",
      "prompt": "전자 2개를 얻은 원자는 2+ 이온이다.",
      "formula": "",
      "caption": "",
      "explain": "전자 2개를 얻으면 2- 음이온이 됩니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-charge-01",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "ion-charge",
      "prompt": "이온은 전하를 띠는 입자이다.",
      "formula": "",
      "caption": "",
      "explain": "전기적으로 중성인 원자와 달리 이온은 전체적으로 전하를 띱니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "polyatomic-cation-01",
      "type": "ox",
      "topic": "이온의 성질",
      "key": "polyatomic-cation",
      "prompt": "여러 원자로 이루어진 이온은 모두 음이온이다.",
      "formula": "",
      "caption": "",
      "explain": "{{NH4^+}}처럼 여러 원자로 이루어진 양이온도 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "cation-pole-01",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "cation-pole",
      "prompt": "양이온은 (-)극으로 이동한다.",
      "formula": "",
      "caption": "",
      "explain": "전기적 인력 때문에 반대 부호의 극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "anion-pole-01",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "anion-pole",
      "prompt": "음이온은 (-)극으로 이동한다.",
      "formula": "",
      "caption": "",
      "explain": "음이온은 반대 부호인 (+)극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ions-direction-01",
      "type": "ox",
      "topic": "이온의 이동",
      "key": "ions-direction",
      "prompt": "양이온과 음이온은 같은 극으로 이동한다.",
      "formula": "",
      "caption": "",
      "explain": "서로 반대 부호의 전하를 띠므로 반대 방향의 극으로 이동합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "subscript-rule-01",
      "type": "ox",
      "topic": "화학식 읽기",
      "key": "subscript-rule",
      "prompt": "아래 숫자가 없으면 원자 수 1을 생략한 것이다.",
      "formula": "",
      "caption": "",
      "explain": "{{HCl}}의 {{H}}와 {{Cl}} 뒤에는 아래 숫자 1이 생략되어 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "has-subscript-01",
      "type": "ox",
      "topic": "화학식 읽기",
      "key": "has-subscript",
      "prompt": "아래 숫자가 있는 물질은 모두 분자이다.",
      "formula": "",
      "caption": "",
      "explain": "{{CaCl2}}처럼 이온으로 이루어진 물질에도 아래 숫자가 쓰입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "no-subscript-01",
      "type": "ox",
      "topic": "화학식 읽기",
      "key": "no-subscript",
      "prompt": "아래 숫자가 없으면 분자가 아니다.",
      "formula": "",
      "caption": "",
      "explain": "염화 수소 기체 {{HCl}}은 아래 숫자가 없어도 분자로 이루어집니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "formula-same-elements-01",
      "type": "ox",
      "topic": "화학식 읽기",
      "key": "formula-same-elements",
      "prompt": "구성 원소가 같으면 반드시 같은 물질이다.",
      "formula": "",
      "caption": "",
      "explain": "{{H2O}}와 {{H2O2}}처럼 구성 원소가 같아도 다른 물질일 수 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "formula-nacl-unit-01",
      "type": "ox",
      "topic": "화학식 읽기",
      "key": "formula-nacl-unit",
      "prompt": "{{NaCl}}은 독립된 분자 1개를 뜻한다.",
      "formula": "",
      "caption": "",
      "explain": "{{NaCl}}은 이온으로 이루어진 물질의 구성 비를 나타내는 화학식입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "coeff-rule-01",
      "type": "ox",
      "topic": "계수와 원자 수",
      "key": "coeff-rule",
      "prompt": "화학식 앞의 계수는 원소의 종류 수이다.",
      "formula": "",
      "caption": "",
      "explain": "분자식 앞의 계수는 분자 수를 나타내며 원소의 종류 수와는 다릅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "coeff-subscript-01",
      "type": "ox",
      "topic": "계수와 원자 수",
      "key": "coeff-subscript",
      "prompt": "계수와 아래 숫자를 서로 바꾸어도 된다.",
      "formula": "",
      "caption": "",
      "explain": "3O2와 2O3는 산소와 오존이라는 서로 다른 물질을 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "hydrogen-14",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "hydrogen",
      "prompt": "원자 2개이므로 화합물이다.",
      "formula": "H2",
      "caption": "",
      "explain": "원자는 2개지만 {{H}} 한 종류의 원소만 있으므로 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ethanol-08",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "ethanol",
      "prompt": "수소 원자가 모두 5개이다.",
      "formula": "C2H5OH",
      "caption": "",
      "explain": "{{H5}}와 {{OH}}의 {{H1}}을 더하면 수소 원자는 6개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ethanol-09",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "ethanol",
      "prompt": "구성 원소는 4종류이다.",
      "formula": "C2H5OH",
      "caption": "",
      "explain": "{{H}}가 두 곳에 있어도 같은 원소입니다. {{C}}·{{H}}·O, 3종류입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "acetic-acid-08",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "acetic-acid",
      "prompt": "탄소 원자는 모두 2개이다.",
      "formula": "CH3COOH",
      "caption": "",
      "explain": "{{CH3}}의 {{C}}와 {{COOH}}의 {{C}}를 합하면 탄소 원자는 2개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "acetic-acid-09",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "acetic-acid",
      "prompt": "한 분자 속 수소 원자는 모두 4개이다.",
      "formula": "CH3COOH",
      "caption": "",
      "explain": "{{CH3}}의 {{H3}}과 {{COOH}}의 {{H1}}을 더하면 4개입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "helium-05",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "helium",
      "prompt": "{{He}}는 {{H}}와 e라는 두 원소로 이루어져 있다.",
      "formula": "He",
      "caption": "",
      "explain": "{{He}}는 헬륨 하나의 원소 기호입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "ion-NH4-06",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "ion-NH4",
      "prompt": "원소 2종류, 원자 총 5개로 이루어져 있다.",
      "formula": "NH4^+",
      "caption": "",
      "explain": "{{N}} 1개와 {{H}} 4개이며, +는 원자 수가 아니라 전하입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "ion-SO42-06",
      "type": "ox",
      "topic": "오개념 판단",
      "key": "ion-SO42",
      "prompt": "이온 1개에 산소 원자가 8개 있다.",
      "formula": "SO4^2-",
      "caption": "",
      "explain": "산소 원자는 아래 숫자 4개입니다. 위의 2-는 전하입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "periodic-order-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "periodic-order",
      "prompt": "주기율표는 양성자 수가 증가하는 순서로 배열한다.",
      "formula": "",
      "caption": "",
      "explain": "양성자 수, 즉 원자 번호 순서로 원소를 배열합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "periodic-period-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "periodic-period",
      "prompt": "주기율표의 가로줄을 주기라고 한다.",
      "formula": "",
      "caption": "",
      "explain": "가로줄은 주기, 세로줄은 족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "periodic-group-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "periodic-group",
      "prompt": "주기율표의 세로줄을 주기라고 한다.",
      "formula": "",
      "caption": "",
      "explain": "세로줄은 족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "same-group-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "same-group",
      "prompt": "같은 족 원소는 성질이 비슷한 경우가 많다.",
      "formula": "",
      "caption": "",
      "explain": "같은 족 원소들에서 화학적 성질의 유사성을 찾을 수 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "same-period-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "same-period",
      "prompt": "같은 주기의 원소는 모두 성질이 같다.",
      "formula": "",
      "caption": "",
      "explain": "가로줄이 같다는 이유만으로 모두 성질이 같지는 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "hydrogen-exception-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "hydrogen-exception",
      "prompt": "수소는 1족이므로 알칼리 금속이다.",
      "formula": "",
      "caption": "",
      "explain": "수소는 1족에 있지만 금속이 아니며 알칼리 금속에서 제외합니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "noble-reactivity-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "noble-reactivity",
      "prompt": "18족 원소는 대체로 반응성이 작다.",
      "formula": "",
      "caption": "",
      "explain": "헬륨·네온·아르곤 등은 안정하여 반응성이 매우 작습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "alkali-reactivity-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "alkali-reactivity",
      "prompt": "리튬·나트륨·칼륨은 물과 반응한다.",
      "formula": "",
      "caption": "",
      "explain": "이 세 원소는 비슷한 화학적 성질을 보이는 1족 금속입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "period-Li-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Li",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Li",
      "caption": "",
      "explain": "{{Li}}는 주기율표의 1족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "period-Na-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Na",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Na",
      "caption": "",
      "explain": "{{Na}}는 주기율표의 1족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "period-K-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-K",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "K",
      "caption": "",
      "explain": "{{K}}는 주기율표의 1족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "pair-LiNa-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-LiNa",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "Li · Na",
      "caption": "",
      "explain": "두 원소 모두 1족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "pair-NaK-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-NaK",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "Na · K",
      "caption": "",
      "explain": "두 원소 모두 1족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "period-He-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-He",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "He",
      "caption": "",
      "explain": "{{He}}는 주기율표의 18족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "period-Ne-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Ne",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Ne",
      "caption": "",
      "explain": "{{Ne}}는 주기율표의 18족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "period-Ar-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Ar",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Ar",
      "caption": "",
      "explain": "{{Ar}}는 주기율표의 18족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "18"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "pair-HeNe-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-HeNe",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "He · Ne",
      "caption": "",
      "explain": "두 원소 모두 18족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "pair-NeAr-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-NeAr",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "Ne · Ar",
      "caption": "",
      "explain": "두 원소 모두 18족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "period-F-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-F",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "F",
      "caption": "",
      "explain": "{{F}}는 주기율표의 17족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "17"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "period-Cl-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Cl",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Cl",
      "caption": "",
      "explain": "{{Cl}}는 주기율표의 17족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "17"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "pair-FCl-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-FCl",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "F · Cl",
      "caption": "",
      "explain": "두 원소 모두 17족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "period-Mg-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Mg",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Mg",
      "caption": "",
      "explain": "{{Mg}}는 주기율표의 2족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "period-Ca-01",
      "type": "text",
      "topic": "주기율표",
      "key": "period-Ca",
      "prompt": "이 원소는 몇 족에 속할까?",
      "formula": "Ca",
      "caption": "",
      "explain": "{{Ca}}는 주기율표의 2족 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "족",
      "inputMode": "numeric"
    },
    {
      "id": "pair-MgCa-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-MgCa",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "Mg · Ca",
      "caption": "",
      "explain": "두 원소 모두 2족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "pair-NaMg-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-NaMg",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "Na · Mg",
      "caption": "",
      "explain": "{{Na}}는 1족, {{Mg}}는 2족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "pair-LiNe-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-LiNe",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "Li · Ne",
      "caption": "",
      "explain": "{{Li}}는 1족, {{Ne}}는 18족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": false
    },
    {
      "id": "pair-HeAr-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-HeAr",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "He · Ar",
      "caption": "",
      "explain": "{{He}}와 {{Ar}}은 모두 18족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "pair-HNa-01",
      "type": "ox",
      "topic": "주기율표",
      "key": "pair-HNa",
      "prompt": "두 원소는 같은 족이다.",
      "formula": "H · Na",
      "caption": "",
      "explain": "둘 다 1족에 놓이지만 수소는 알칼리 금속이 아닙니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": true
    },
    {
      "id": "flame-Li-01",
      "type": "text",
      "topic": "불꽃 반응",
      "key": "flame-Li",
      "prompt": "이 금속 원소의 불꽃 반응 색은?",
      "formula": "Li",
      "caption": "리튬",
      "explain": "리튬을 포함한 대표적인 시료의 불꽃 반응은 빨간색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "빨간색",
        "빨강",
        "붉은색",
        "적색"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "flame-Li-02",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Li",
      "prompt": "불꽃 반응 색은 빨간색이다.",
      "formula": "Li",
      "caption": "리튬",
      "explain": "리튬을 포함한 대표적인 시료의 불꽃 반응은 빨간색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-Li-03",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Li",
      "prompt": "불꽃 반응 색은 노란색이다.",
      "formula": "Li",
      "caption": "리튬",
      "explain": "리튬을 포함한 대표적인 시료의 불꽃 반응은 빨간색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-Na-01",
      "type": "text",
      "topic": "불꽃 반응",
      "key": "flame-Na",
      "prompt": "이 금속 원소의 불꽃 반응 색은?",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨을 포함한 대표적인 시료의 불꽃 반응은 노란색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "노란색",
        "노랑",
        "황색"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "flame-Na-02",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Na",
      "prompt": "불꽃 반응 색은 노란색이다.",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨을 포함한 대표적인 시료의 불꽃 반응은 노란색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-Na-03",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Na",
      "prompt": "불꽃 반응 색은 보라색이다.",
      "formula": "Na",
      "caption": "나트륨",
      "explain": "나트륨을 포함한 대표적인 시료의 불꽃 반응은 노란색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-K-01",
      "type": "text",
      "topic": "불꽃 반응",
      "key": "flame-K",
      "prompt": "이 금속 원소의 불꽃 반응 색은?",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨을 포함한 대표적인 시료의 불꽃 반응은 보라색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "보라색",
        "보라",
        "자색"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "flame-K-02",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-K",
      "prompt": "불꽃 반응 색은 보라색이다.",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨을 포함한 대표적인 시료의 불꽃 반응은 보라색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-K-03",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-K",
      "prompt": "불꽃 반응 색은 주황색이다.",
      "formula": "K",
      "caption": "칼륨",
      "explain": "칼륨을 포함한 대표적인 시료의 불꽃 반응은 보라색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-Ca-01",
      "type": "text",
      "topic": "불꽃 반응",
      "key": "flame-Ca",
      "prompt": "이 금속 원소의 불꽃 반응 색은?",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘을 포함한 대표적인 시료의 불꽃 반응은 주황색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "주황색",
        "주황",
        "주황빨강",
        "주황빨간색",
        "벽돌색"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "flame-Ca-02",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Ca",
      "prompt": "불꽃 반응 색은 주황색이다.",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘을 포함한 대표적인 시료의 불꽃 반응은 주황색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-Ca-03",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Ca",
      "prompt": "불꽃 반응 색은 황록색이다.",
      "formula": "Ca",
      "caption": "칼슘",
      "explain": "칼슘을 포함한 대표적인 시료의 불꽃 반응은 주황색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-Ba-01",
      "type": "text",
      "topic": "불꽃 반응",
      "key": "flame-Ba",
      "prompt": "이 금속 원소의 불꽃 반응 색은?",
      "formula": "Ba",
      "caption": "바륨",
      "explain": "바륨을 포함한 대표적인 시료의 불꽃 반응은 황록색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "황록색",
        "연두색",
        "연두",
        "노란초록색"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "flame-Ba-02",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Ba",
      "prompt": "불꽃 반응 색은 황록색이다.",
      "formula": "Ba",
      "caption": "바륨",
      "explain": "바륨을 포함한 대표적인 시료의 불꽃 반응은 황록색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-Ba-03",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Ba",
      "prompt": "불꽃 반응 색은 청록색이다.",
      "formula": "Ba",
      "caption": "바륨",
      "explain": "바륨을 포함한 대표적인 시료의 불꽃 반응은 황록색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-Cu-01",
      "type": "text",
      "topic": "불꽃 반응",
      "key": "flame-Cu",
      "prompt": "이 금속 원소의 불꽃 반응 색은?",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리을 포함한 대표적인 시료의 불꽃 반응은 청록색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "청록색",
        "청록",
        "파란초록색",
        "녹청색"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "flame-Cu-02",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Cu",
      "prompt": "불꽃 반응 색은 청록색이다.",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리을 포함한 대표적인 시료의 불꽃 반응은 청록색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-Cu-03",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-Cu",
      "prompt": "불꽃 반응 색은 빨간색이다.",
      "formula": "Cu",
      "caption": "구리",
      "explain": "구리을 포함한 대표적인 시료의 불꽃 반응은 청록색으로 구분합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-same-metal-01",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-same-metal",
      "prompt": "{{NaCl}}과 {{NaNO3}}는 같은 불꽃 반응 색을 보인다.",
      "formula": "",
      "caption": "",
      "explain": "둘 다 나트륨을 포함하여 대표적으로 노란색을 나타냅니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "flame-anion-01",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-anion",
      "prompt": "불꽃 반응 색은 주로 음이온을 구별하는 데 쓴다.",
      "formula": "",
      "caption": "",
      "explain": "이 단원에서 불꽃 반응은 주로 금속 원소를 구별하는 데 활용합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "flame-all-01",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "flame-all",
      "prompt": "모든 원소가 뚜렷한 불꽃 반응 색을 보인다.",
      "formula": "",
      "caption": "",
      "explain": "모든 원소에 뚜렷한 특유의 불꽃색이 나타나는 것은 아닙니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "spectrum-same-01",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "spectrum-same",
      "prompt": "같은 원소는 같은 선 스펙트럼을 나타낸다.",
      "formula": "",
      "caption": "",
      "explain": "같은 원소는 같은 위치의 선을 나타내므로 원소를 구별할 수 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "spectrum-different-01",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "spectrum-different",
      "prompt": "원소에 따라 선 스펙트럼의 위치가 다르다.",
      "formula": "",
      "caption": "",
      "explain": "원소마다 고유한 선 스펙트럼이 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "spectrum-similar-flame-01",
      "type": "ox",
      "topic": "불꽃 반응",
      "key": "spectrum-similar-flame",
      "prompt": "불꽃색이 비슷해도 선 스펙트럼으로 구별할 수 있다.",
      "formula": "",
      "caption": "",
      "explain": "선의 위치를 비교하여 원소를 구별할 수 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "precip-AgCl-01",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-AgCl",
      "prompt": "이 앙금의 색은?",
      "formula": "AgCl",
      "caption": "염화 은",
      "explain": "염화 은은 대표적인 흰색 앙금입니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "흰색",
        "흰",
        "하얀색",
        "백색",
        "하양",
        "하얀"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-AgCl-02",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-AgCl",
      "prompt": "흰색 앙금이 생긴다.",
      "formula": "Ag^+ + Cl^-",
      "caption": "두 이온이 수용액에서 만날 때",
      "explain": "{{Ag^+}}와 {{Cl^-}}가 만나면 염화 은({{AgCl}}) 앙금이 생깁니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "precip-AgCl-03",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-AgCl",
      "prompt": "생기는 앙금의 이름은?",
      "formula": "Ag^+ + Cl^-",
      "caption": "수용액에서 두 이온이 만남",
      "explain": "두 이온은 염화 은({{AgCl}})이라는 물에 잘 녹지 않는 앙금을 만듭니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "염화 은"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-BaSO4-01",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-BaSO4",
      "prompt": "이 앙금의 색은?",
      "formula": "BaSO4",
      "caption": "황산 바륨",
      "explain": "황산 바륨은 대표적인 흰색 앙금입니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "흰색",
        "흰",
        "하얀색",
        "백색",
        "하양",
        "하얀"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-BaSO4-02",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-BaSO4",
      "prompt": "흰색 앙금이 생긴다.",
      "formula": "Ba^2+ + SO4^2-",
      "caption": "두 이온이 수용액에서 만날 때",
      "explain": "{{Ba^2+}}와 {{SO4^2-}}가 만나면 황산 바륨({{BaSO4}}) 앙금이 생깁니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "precip-BaSO4-03",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-BaSO4",
      "prompt": "생기는 앙금의 이름은?",
      "formula": "Ba^2+ + SO4^2-",
      "caption": "수용액에서 두 이온이 만남",
      "explain": "두 이온은 황산 바륨({{BaSO4}})이라는 물에 잘 녹지 않는 앙금을 만듭니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "황산 바륨"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-CaCO3-01",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-CaCO3",
      "prompt": "이 앙금의 색은?",
      "formula": "CaCO3",
      "caption": "탄산 칼슘",
      "explain": "탄산 칼슘은 대표적인 흰색 앙금입니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "흰색",
        "흰",
        "하얀색",
        "백색",
        "하양",
        "하얀"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-CaCO3-02",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-CaCO3",
      "prompt": "흰색 앙금이 생긴다.",
      "formula": "Ca^2+ + CO3^2-",
      "caption": "두 이온이 수용액에서 만날 때",
      "explain": "{{Ca^2+}}와 {{CO3^2-}}가 만나면 탄산 칼슘({{CaCO3}}) 앙금이 생깁니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "precip-CaCO3-03",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-CaCO3",
      "prompt": "생기는 앙금의 이름은?",
      "formula": "Ca^2+ + CO3^2-",
      "caption": "수용액에서 두 이온이 만남",
      "explain": "두 이온은 탄산 칼슘({{CaCO3}})이라는 물에 잘 녹지 않는 앙금을 만듭니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "탄산 칼슘"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-PbI2-01",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-PbI2",
      "prompt": "이 앙금의 색은?",
      "formula": "PbI2",
      "caption": "아이오딘화 납",
      "explain": "아이오딘화 납은 대표적인 노란색 앙금입니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "노란색",
        "노랑",
        "황색",
        "노란"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-PbI2-02",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-PbI2",
      "prompt": "노란색 앙금이 생긴다.",
      "formula": "Pb^2+ + I^-",
      "caption": "두 이온이 수용액에서 만날 때",
      "explain": "{{Pb^2+}}와 {{I^-}}가 만나면 아이오딘화 납({{PbI2}}) 앙금이 생깁니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "precip-PbI2-03",
      "type": "text",
      "topic": "앙금 생성",
      "key": "precip-PbI2",
      "prompt": "생기는 앙금의 이름은?",
      "formula": "Pb^2+ + I^-",
      "caption": "수용액에서 두 이온이 만남",
      "explain": "두 이온은 아이오딘화 납({{PbI2}})이라는 물에 잘 녹지 않는 앙금을 만듭니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": [
        "아이오딘화 납",
        "요오드화 납",
        "아이오딘화 납(Ⅱ)",
        "아이오딘화 납(II)"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "precip-insoluble-01",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-insoluble",
      "prompt": "앙금은 물에 잘 녹지 않는 물질이다.",
      "formula": "",
      "caption": "",
      "explain": "수용액 속 이온들이 만나 물에 잘 녹지 않는 물질이 생성되면 앙금이 생깁니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "precip-all-01",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-all",
      "prompt": "두 수용액을 섞으면 언제나 앙금이 생긴다.",
      "formula": "",
      "caption": "",
      "explain": "물에 잘 녹지 않는 물질을 생성하는 이온 조합이 있어야 합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "precip-cation-01",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-cation",
      "prompt": "앙금은 양이온끼리만 결합해서 만들어진다.",
      "formula": "",
      "caption": "",
      "explain": "이 단원에서 다루는 앙금은 양이온과 음이온이 만나 만들어집니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "precip-nacl-01",
      "type": "ox",
      "topic": "앙금 생성",
      "key": "precip-nacl",
      "prompt": "{{Na^+}}와 {{Cl^-}}가 수용액에서 만나면 흰 앙금이 생긴다.",
      "formula": "",
      "caption": "",
      "explain": "염화 나트륨은 물에 잘 녹으므로 이 조건에서는 앙금으로 분리되지 않습니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "electro-salt-01",
      "type": "ox",
      "topic": "이온과 전기",
      "key": "electro-salt",
      "prompt": "소금물에는 이동할 수 있는 이온이 있다.",
      "formula": "",
      "caption": "",
      "explain": "소금물에는 나트륨 이온과 염화 이온이 존재하여 이동할 수 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": true
    },
    {
      "id": "electro-solid-01",
      "type": "ox",
      "topic": "이온과 전기",
      "key": "electro-solid",
      "prompt": "고체 소금의 이온은 자유롭게 이동한다.",
      "formula": "",
      "caption": "",
      "explain": "고체에서는 이온이 제자리에 묶여 자유롭게 이동하기 어렵습니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "electro-sugar-01",
      "type": "ox",
      "topic": "이온과 전기",
      "key": "electro-sugar",
      "prompt": "설탕이 물에 녹으면 모두 양이온과 음이온으로 나뉜다.",
      "formula": "",
      "caption": "",
      "explain": "설탕은 물에 녹아도 설탕 분자로 존재합니다.",
      "clue": "",
      "enabled": true,
      "scope": "연결·보충",
      "answer": false
    },
    {
      "id": "model-o2-01",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-o2",
      "prompt": "원소는 몇 종류?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 다른 원소 기호의 종류를 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "O"
        ],
        [
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-o2-02",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-o2",
      "prompt": "분자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 떨어져 있는 원자 묶음 하나가 분자 하나입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "O"
        ],
        [
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-o2-03",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-o2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "모형의 원 하나가 원자 하나입니다. 모든 원을 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "O"
        ],
        [
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-o2-04",
      "type": "pick2",
      "topic": "입자 모형",
      "key": "model-o2",
      "prompt": "모형 속 물질을 분류하세요.",
      "formula": "",
      "caption": "모든 입자는 같은 종류의 분자",
      "explain": "분자가 존재하며, 구성 원소가 1종류이므로 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ],
      "model": [
        [
          "O",
          "O"
        ],
        [
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-h2o-01",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-h2o",
      "prompt": "원소는 몇 종류?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 다른 원소 기호의 종류를 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric",
      "model": [
        [
          "H",
          "O",
          "H"
        ],
        [
          "H",
          "O",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2o-02",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-h2o",
      "prompt": "분자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 떨어져 있는 원자 묶음 하나가 분자 하나입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "H",
          "O",
          "H"
        ],
        [
          "H",
          "O",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2o-03",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-h2o",
      "prompt": "원자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "모형의 원 하나가 원자 하나입니다. 모든 원을 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "H",
          "O",
          "H"
        ],
        [
          "H",
          "O",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2o-04",
      "type": "pick2",
      "topic": "입자 모형",
      "key": "model-h2o",
      "prompt": "모형 속 물질을 분류하세요.",
      "formula": "",
      "caption": "모든 입자는 같은 종류의 분자",
      "explain": "분자가 존재하며, 구성 원소가 2종류이므로 화합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ],
      "model": [
        [
          "H",
          "O",
          "H"
        ],
        [
          "H",
          "O",
          "H"
        ]
      ]
    },
    {
      "id": "model-co2-01",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-co2",
      "prompt": "원소는 몇 종류?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 다른 원소 기호의 종류를 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "C",
          "O"
        ],
        [
          "O",
          "C",
          "O"
        ]
      ]
    },
    {
      "id": "model-co2-02",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-co2",
      "prompt": "분자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 떨어져 있는 원자 묶음 하나가 분자 하나입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "C",
          "O"
        ],
        [
          "O",
          "C",
          "O"
        ]
      ]
    },
    {
      "id": "model-co2-03",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-co2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "모형의 원 하나가 원자 하나입니다. 모든 원을 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "C",
          "O"
        ],
        [
          "O",
          "C",
          "O"
        ]
      ]
    },
    {
      "id": "model-co2-04",
      "type": "pick2",
      "topic": "입자 모형",
      "key": "model-co2",
      "prompt": "모형 속 물질을 분류하세요.",
      "formula": "",
      "caption": "모든 입자는 같은 종류의 분자",
      "explain": "분자가 존재하며, 구성 원소가 2종류이므로 화합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ],
      "model": [
        [
          "O",
          "C",
          "O"
        ],
        [
          "O",
          "C",
          "O"
        ]
      ]
    },
    {
      "id": "model-nh3-01",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-nh3",
      "prompt": "원소는 몇 종류?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 다른 원소 기호의 종류를 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "종류",
      "inputMode": "numeric",
      "model": [
        [
          "N",
          "H",
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-nh3-02",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-nh3",
      "prompt": "분자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 떨어져 있는 원자 묶음 하나가 분자 하나입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "N",
          "H",
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-nh3-03",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-nh3",
      "prompt": "원자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "모형의 원 하나가 원자 하나입니다. 모든 원을 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "4"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "N",
          "H",
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-nh3-04",
      "type": "pick2",
      "topic": "입자 모형",
      "key": "model-nh3",
      "prompt": "모형 속 물질을 분류하세요.",
      "formula": "",
      "caption": "모든 입자는 같은 종류의 분자",
      "explain": "분자가 존재하며, 구성 원소가 2종류이므로 화합물입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 1
        }
      ],
      "model": [
        [
          "N",
          "H",
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2-01",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-h2",
      "prompt": "원소는 몇 종류?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 다른 원소 기호의 종류를 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric",
      "model": [
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2-02",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-h2",
      "prompt": "분자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 떨어져 있는 원자 묶음 하나가 분자 하나입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "3"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2-03",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-h2",
      "prompt": "원자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "모형의 원 하나가 원자 하나입니다. 모든 원을 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-h2-04",
      "type": "pick2",
      "topic": "입자 모형",
      "key": "model-h2",
      "prompt": "모형 속 물질을 분류하세요.",
      "formula": "",
      "caption": "모든 입자는 같은 종류의 분자",
      "explain": "분자가 존재하며, 구성 원소가 1종류이므로 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ],
      "model": [
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ],
        [
          "H",
          "H"
        ]
      ]
    },
    {
      "id": "model-o3-01",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-o3",
      "prompt": "원소는 몇 종류?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 다른 원소 기호의 종류를 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "1"
      ],
      "suffix": "종류",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "O",
          "O"
        ],
        [
          "O",
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-o3-02",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-o3",
      "prompt": "분자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "서로 떨어져 있는 원자 묶음 하나가 분자 하나입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "2"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "O",
          "O"
        ],
        [
          "O",
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-o3-03",
      "type": "text",
      "topic": "입자 모형",
      "key": "model-o3",
      "prompt": "원자는 모두 몇 개?",
      "formula": "",
      "caption": "붙어 있는 원 한 묶음 = 한 분자",
      "explain": "모형의 원 하나가 원자 하나입니다. 모든 원을 셉니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "6"
      ],
      "suffix": "개",
      "inputMode": "numeric",
      "model": [
        [
          "O",
          "O",
          "O"
        ],
        [
          "O",
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "model-o3-04",
      "type": "pick2",
      "topic": "입자 모형",
      "key": "model-o3",
      "prompt": "모형 속 물질을 분류하세요.",
      "formula": "",
      "caption": "모든 입자는 같은 종류의 분자",
      "explain": "분자가 존재하며, 구성 원소가 1종류이므로 원소입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "분자 여부",
          "options": [
            "분자 O",
            "분자 X"
          ],
          "correct": 0
        },
        {
          "label": "물질의 종류",
          "options": [
            "원소",
            "화합물"
          ],
          "correct": 0
        }
      ],
      "model": [
        [
          "O",
          "O",
          "O"
        ],
        [
          "O",
          "O",
          "O"
        ]
      ]
    },
    {
      "id": "proton-pick-01",
      "type": "pick2",
      "topic": "원자의 구조",
      "key": "proton-pick",
      "prompt": "입자의 성질을 두 개 고르세요.",
      "formula": "",
      "caption": "양성자",
      "explain": "양성자는 (+)전하를 띠며 원자핵 안에 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "전하",
          "options": [
            "(+)전하",
            "(-)전하"
          ],
          "correct": 0
        },
        {
          "label": "위치",
          "options": [
            "원자핵 안",
            "원자핵 주위"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "electron-pick-01",
      "type": "pick2",
      "topic": "원자의 구조",
      "key": "electron-pick",
      "prompt": "입자의 성질을 두 개 고르세요.",
      "formula": "",
      "caption": "전자",
      "explain": "전자는 (-)전하를 띠며 원자핵 주위에 있습니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "groups": [
        {
          "label": "전하",
          "options": [
            "(+)전하",
            "(-)전하"
          ],
          "correct": 1
        },
        {
          "label": "위치",
          "options": [
            "원자핵 안",
            "원자핵 주위"
          ],
          "correct": 1
        }
      ]
    },
    {
      "id": "concept-proton-01",
      "type": "text",
      "topic": "핵심 용어",
      "key": "concept-proton",
      "prompt": "원소의 종류를 결정하는 입자는?",
      "formula": "",
      "caption": "",
      "explain": "정답은 양성자입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "양성자"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "concept-electron-01",
      "type": "text",
      "topic": "핵심 용어",
      "key": "concept-electron",
      "prompt": "이온이 될 때 잃거나 얻는 입자는?",
      "formula": "",
      "caption": "",
      "explain": "정답은 전자입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "전자"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "concept-neutron-01",
      "type": "text",
      "topic": "핵심 용어",
      "key": "concept-neutron",
      "prompt": "원자핵 속에서 전하를 띠지 않는 입자는?",
      "formula": "",
      "caption": "",
      "explain": "정답은 중성자입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "중성자"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "concept-nucleus-01",
      "type": "text",
      "topic": "핵심 용어",
      "key": "concept-nucleus",
      "prompt": "원자의 중심에 있는 작은 부분은?",
      "formula": "",
      "caption": "",
      "explain": "정답은 원자핵입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "원자핵"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "concept-group-01",
      "type": "text",
      "topic": "핵심 용어",
      "key": "concept-group",
      "prompt": "주기율표의 세로줄을 무엇이라고 할까?",
      "formula": "",
      "caption": "",
      "explain": "정답은 족입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "족"
      ],
      "suffix": "",
      "inputMode": "text"
    },
    {
      "id": "concept-period-01",
      "type": "text",
      "topic": "핵심 용어",
      "key": "concept-period",
      "prompt": "주기율표의 가로줄을 무엇이라고 할까?",
      "formula": "",
      "caption": "",
      "explain": "정답은 주기입니다.",
      "clue": "",
      "enabled": true,
      "scope": "2022 핵심",
      "answer": [
        "주기"
      ],
      "suffix": "",
      "inputMode": "text"
    }
  ]
};
