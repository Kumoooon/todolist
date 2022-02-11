const quotes = [
  {
    quote:
      "가장 감사해야 할 것은 신이 주신 능력을 제대로 이용하는 것이다.        ",
    author: "트릴로프",
  },
  {
    quote: "가장 높은 곳에 올라가려면, 가장 낮은 곳부터 시작하라.",
    author: "시루스",
  },
  {
    quote: "가장 뛰어난 예언자는 과거이다.",
    author: "바이런",
  },
  {
    quote:
      "가정과 가정 생활의 안전과 향상이 문명의 중요 목적이요, 산업의 궁극적 목적이다.",
    author: "C.W.앨리어",
  },
  {
    quote: "가정이여, 그대는 도덕의 학교이다",
    author: "페스탈로치",
  },
  {
    quote:
      "가치 있는 적이 될 수 있는 자는 화해하면 더 가치가 있는 친구가 될 것이다.",
    author: "펠담",
  },
  {
    quote: "거짓말을 한 그 순간부터 뛰어난 기억력이 필요하게 된다.",
    author: "코르네이유",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ` + todaysQuote.author;
