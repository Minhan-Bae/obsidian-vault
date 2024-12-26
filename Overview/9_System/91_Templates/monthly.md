---
month: <% tp.date.now("YYYY-MM") %>
---

## 월간 목표
- 

## 월간 회고
- 주요 성과:
- 개선점:
- 다음 달 계획:

## 주간 요약
```
TABLE WITHOUT ID
week AS "주",
주간목표 AS "주요 목표",
성과 AS "주요 성과"
FROM "Weekly"
WHERE month = this.month
SORT week ASC
```

## 월간 프로젝트 진행 상황
```
TABLE WITHOUT ID
week AS "주",
진행중인프로젝트 AS "프로젝트 상태"
FROM "Weekly"
WHERE month = this.month
SORT week ASC
```

## 월간 메트릭스 평균
```
TABLE WITHOUT ID
week AS "주",
round(average(물섭취량), 1) AS "평균 물 섭취",
round(average(집중시간), 1) AS "평균 집중 시간",
round(average(운동), 1) AS "평균 운동",
round(average(독서), 1) AS "평균 독서"
FROM "Daily"
WHERE month = this.month
GROUP BY week
SORT week ASC
```

## 월간 컨디션 그래프
```
const monthData = dv.pages('"Daily"')
  .where(p => p.month == dv.current().month)
  .sort(p => p.file.name);

const labels = monthData.file.name.array();
const data = monthData.컨디션.array();

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