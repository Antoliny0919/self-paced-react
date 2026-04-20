# Claude Code 학습 하네스

이 저장소는 Claude Code 슬래시 커맨드와 규칙 파일로 구성된 학습 하네스를 포함하고 있습니다.
AI 어시스턴트가 학습 도우미 역할을 할 수 있도록 동작 방식을 미리 정의해둔 것입니다.

## 사용 방법

Claude Code에서 아래 커맨드를 입력하면 학습을 시작할 수 있습니다.

```
/react-study   학습 시작 — 챕터 선택 후 단계별 안내
/save          현재 세션 내용을 learnings/ 폴더에 저장
```

## Claude Code가 심화로 다루는 것

- TypeScript 기초 (심화)
- useRef (심화)
- useReducer, custom hook (심화)

## 하네스 구조

```
CLAUDE.md                 프로젝트 전체 맥락 — Claude가 항상 읽는 파일

.claude/
├── settings.json         권한 설정 — 허용된 도구/명령어 목록
├── rules/
│   └── teaching-style.md 항상 활성화되는 안내 규칙 (i+1 입력 가설 기반)
└── commands/
    ├── react-study.md    /react-study 커맨드 정의
    └── save.md           /save 커맨드 정의

learnings/                /save로 저장된 챕터별 학습 노트
```

- `settings.json`: 이 프로젝트에서 Claude가 실행할 수 있는 도구와 명령어의 범위를 제한합니다.
- `rules/`: 커맨드 호출 여부와 관계없이 항상 적용되는 행동 규칙입니다. `paths:` 필드로 어떤 파일을 다룰 때 이 규칙을 적용할지 범위를 지정합니다.
- `commands/`: 슬래시 커맨드 파일입니다. `allowed-tools:` 필드로 각 커맨드가 사용할 수 있는 도구를 제한합니다.

## 설계 원칙

학습 안내는 스티븐 크라센의 **입력 가설(i+1)** 을 따릅니다.
학습자의 현재 수준보다 한 단계 높은 개념만, 한 번에 하나씩 소개합니다.
챕터 기본 과정을 마치면 우테코 레벨2 수준의 심화 주제(TypeScript, custom hook, useReducer 등)로 이어갈 수 있습니다.
