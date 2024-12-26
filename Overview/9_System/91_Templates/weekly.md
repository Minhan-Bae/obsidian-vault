---
week: <% tp.date.now("YYYY-[W]ww") %>
---
---
week: <% tp.date.now("YY-[W]ww") %>
---

## 주간 목표
- 

## 주간 회고
- 성과:
- 개선점:
- 다음 주 계획:

## 데일리 노트 요약
```
TABLE WITHOUT ID
file.link AS "날짜",
오늘의우선순위 AS "주요 목표",
컨디션 AS "컨디션"
FROM "Overview/5_Archive/53_Calendar"
WHERE week = this.week
SORT file.name ASC
```

## 주간 프로젝트 진행 상황
```
TABLE WITHOUT ID
file.link AS "날짜",
진행중인프로젝트 AS "프로젝트 상태"
FROM "Overview/5_Archive/53_Calendar"
WHERE week = this.week
SORT file.name ASC
```

## 주간 메트릭스
```
TABLE WITHOUT ID
file.link AS "날짜",
물섭취량 AS "물 섭취",
집중시간 AS "집중 시간",
운동 AS "운동",
독서 AS "독서"
FROM "Overview/5_Archive/53_Calendar"
WHERE week = this.week
SORT file.name ASC
```

## 주간 컨디션 그래프
```
const weekData = dv.pages('"Overview/5_Archive/53_Calendar"')
  .where(p => p.week == dv.current().week)
  .sort(p => p.file.name);

const labels = weekData.file.name.array();
const data = weekData.컨디션.array();

const chartData = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: '컨디션',
      data: data,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }
};

window.renderChart(chartData, this.container);
``` 
