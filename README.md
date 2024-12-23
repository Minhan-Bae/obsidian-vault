# obsidian vault

## 10. directory
```
00.Inbox               # 수집 단계
  ㄴ Capture          # 미처리 입력사항
  ㄴ Processing       # 처리 중
  ㄴ Waiting-For      # 대기 항목

10.Daily              # 실행 단계
  ㄴ Next-Actions     # 다음 실행 항목
  ㄴ Today           # 오늘 할 일
  ㄴ Journal         # 일지
  ㄴ Review          # 일일/주간 검토

20.Projects           # 프로젝트 관리
  ㄴ Active          # 활성 프로젝트
    ㄴ Plan          # 계획
    ㄴ Progress      # 진행
    ㄴ Review        # 검토
  ㄴ Someday-Maybe   # 미래 프로젝트

30.Areas              # 책임 영역
  ㄴ Health          # 건강
  ㄴ Finance         # 재정
  ㄴ Career          # 경력
  ㄴ Personal        # 개인

40.Resources          # 참고자료
  ㄴ Apps            # 이미지자료
  ㄴ Literature      # 문헌노트
  ㄴ Reference       # 참고자료
  ㄴ Permanent       # 영구노트
  ㄴ Checklists      # 체크리스트

50.Review             # 검토 단계
  ㄴ Weekly          # 주간 검토
  ㄴ Monthly         # 월간 검토
  ㄴ Quarterly       # 분기 검토
  ㄴ Annual          # 연간 검토

80.Archive           # 보관
  ㄴ Completed       # 완료 항목
  ㄴ Reference       # 참고자료
  ㄴ Reviews         # 과거 검토

90.System            # 시스템
  ㄴ Templates       # 템플릿
  ㄴ Publishing      # 발행
  ㄴ Automation      # 자동화
```

## 20. GTD Workplow
### 21. 수집(Collect)
•	Capture 폴더는 모든 새로운 아이디어, 생각, 정보의 첫 진입점입니다
•	Processing 폴더에서 수집된 항목을 분류하고 정리합니다
•	Waiting-For 폴더는 다른 사람의 응답을 기다리는 항목을 보관합니다
```
외부 입력 -> 00.Inbox/Capture
```
### 22. 처리(Process)
```
00.Inbox/Capture → 00.Inbox/Processing
  ↓
실행가능? → 10.Daily/Next-Actions
대기필요? → 00.Inbox/Waiting-For
프로젝트? → 20.Projects/Active
참고자료? → 40.Resources
```
### 23.구성(Optional)
```
20.Projects/Active    # 프로젝트별 구성
30.Areas             # 영역별 구성
40.Resources         # 참고자료 구성
```
이 때, 이미지 첨부 자료의 저장 경로는 `41.Apps`로 한다.
### 24.검토(Review)
```
50.Review
  ㄴ Daily   → 10.Daily/Review
  ㄴ Weekly  → 50.Review/Weekly
  ㄴ Monthly → 50.Review/Monthly
```
### 25.실행(Do)
```
10.Daily/Next-Actions
10.Daily/Today
20.Projects/Active/Progress
```