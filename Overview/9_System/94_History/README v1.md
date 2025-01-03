
## 10. directory
```
# 수집 단계
	00.Inbox               
	ㄴ 01.Capture # 미처리 입력사항
		ㄴ 011.Notes
		ㄴ 012.Ideas
	ㄴ 02.Processing # 처리 중
	ㄴ 03.Urgent

# 실행 단계
	10.Daily
	ㄴ 11.Calendar # 옵시디언 기본 기능 "데일리 노트" 저장(형식 ./YYYY/MM/YYYY-MM-DD)
	ㄴ 12.Next-Actions
	ㄴ 13.Journal
	ㄴ 14.Tasks

# 프로젝트 관리
	20.Projects
	ㄴ 21.Active
		ㄴ 211.Sprint-Database # 노션 API 기반 스프린트 DB
		ㄴ 212.Project-Notes # 프로젝트 관련 자료
		ㄴ 213.Progress
	ㄴ 22.Someday-Maybe # 향후 프로젝트

# 책임 영역
	30.Areas              
	ㄴ Health # 건강
	ㄴ Finance # 재정
	ㄴ Career # 경력
	ㄴ Personal # 개인

# 참고자료
	40.Resources          
	ㄴ 41.Apps # 이미지 자료
	ㄴ 42.Literature # 문헌노트
	ㄴ 43.Permanent # 영구노트
	ㄴ 44.MOC

# 검토 단계
	50.Review             
	ㄴ 51.Weekly # 주간 검토
	ㄴ 52.Monthly # 월간 검토
	ㄴ 53.Quarterly # 분기 검토
	ㄴ 54.Annual # 연간 검토

# 보관
	80.Archive           
	ㄴ Completed # 완료 항목
	ㄴ Reference # 참고자료
	ㄴ Reviews # 과거 검토

# 시스템
	90.System            
	ㄴ Templates # 템플릿
	ㄴ Guideline # 가이드라인
	ㄴ Scripts # JS 스크립트
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