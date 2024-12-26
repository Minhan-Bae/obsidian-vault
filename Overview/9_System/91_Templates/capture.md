<%*
let baseName = "무제";
let fileName = baseName;
let counter = 1;

while (await app.vault.adapter.exists(tp.file.folder() + "/" + fileName + ".md")) {
    fileName = `${baseName}${counter}`;
    counter++;
}

await tp.file.rename(fileName);
-%>
---
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
status: capture
due: null
priority: null
context: null
tags: []
---
# <% tp.file.title %>

## 내용
<% tp.file.cursor() %>

## GTD 분류
- [ ] 2분 이내 처리 가능 → 즉시 처리 후 완료 처리
- [ ] 프로젝트화 필요 → 프로젝트 폴더로 이동
- [ ] 달력 예약 필요 → Calendar로 이동
- [ ] 다른 사람에게 위임 → 담당자 지정
- [ ] 참고자료로 보관 → Reference로 이동

## 메타데이터
컨텍스트:: #home #work #errand
우선순위:: 🔥(높음) 🔸(중간) 🔽(낮음)
기한:: YYYY-MM-DD
담당자:: 

## 다음 행동
