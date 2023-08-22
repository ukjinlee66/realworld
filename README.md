## Git Convention

------

## Commit Message Format

```
type: subject

body (optional)
```

## Type

| 종류     | 설명                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 새로운 기능 추가                                             |
| fix      | 버그 수정                                                    |
| docs     | 문서 수정                                                    |
| style    | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우     |
| refactor | 코드 리팩터링                                                |
| test     | 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X) |
| chore    | 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)     |
| ci       | CI 관련 변경 사항                                            |

## PR Template

```
Close #~~

## 개요

개요를 적어주세요.

## 작업내용

작업내용을 적어주세요.

## 리뷰어에게 집중적으로 체크해주었으면 하는 부분

깊은 체크를 원하는 부분을 적어주세요.
```

- .github/PULL_REQUEST_TEMPLATE.md

## Issue Template

```
## 개요

개요를 적어주세요.

## Subtask

- [] subtask 1
- [] subtask 2
```

- .github/ISSUE_TEMPLATE.md

## Repository Rule 관련

- 최소 1명의 reviewer를 할당
  - 추후 repository setting을 통해 approval 없이 머지가 불가능하도록 적용 예정
- PR, issue(사용하지 않을 수 있음)의 경우 가급적 템플릿 활용

## Git PR(merge) 전략

1. feature → develop PR
2. 이외 PR
   - hotfix PR (논의를 통한 정리 필요)
     - hotfix의 경우, 상황에 따라 main으로 직접 변경사항을 적용해야 할 수 있음
     - main으로의 PR을 생성함과 동시에 develop으로의 PR을 생성하는 것으로 이를 해결할 수 있다고 생각함

# ERD
![image](https://github.com/ukjinlee66/realworld/assets/43813141/74ba2a80-b149-4c0b-87ea-a1e7241135f8)


# collaboration tool
- jira - [https://tmaxreal.atlassian.net/jira/software/projects/TMAX/boards/1]

# Tech Stack
---
### 자세한 버전도 추후에 명시해주세요.
## Backend
- spring Webflux
- MySQL
- spring security
- (ELK Stack)
- spring batch(고려 사항)
## Frontend
- 
