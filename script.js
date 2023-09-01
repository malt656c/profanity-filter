/* definitioner */
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];
const paragraph = document.querySelector("p");
/* splitter sætningen op i et array */
let sentenceArray = paragraph.textContent.split(" ");
document.querySelector("button").addEventListener("click", SFW);

function SFW() {
  /* tjekker om sætningen allerede er "clean" */
  if (paragraph.textContent.includes(curseWords[0].good && curseWords[1].good && curseWords[2].good)) {
    alert("ingen 'dårlige' ord");
  }
  /* går igennem alle ordene i sætningen og tjekker om de er et "dårligt" ord, og erstatter dårlige ord med de gode */
  sentenceArray.forEach((word) => {
    if (word.includes(curseWords[0].bad)) {
      sentenceArray.splice(sentenceArray.indexOf(word), 1, `<span>${curseWords[0].good}</span>`);
    } else if (word.includes(curseWords[1].bad)) {
      sentenceArray.splice(sentenceArray.indexOf(word), 1, `<span>${curseWords[1].good}</span>`);
    } else if (word.includes(curseWords[2].bad)) {
      sentenceArray.splice(sentenceArray.indexOf(word), 1, `<span>${curseWords[2].good}</span>`);
    }
  });
  /* sætter sætningen sammen til en string igen */
  let sfwSentence = sentenceArray.join(" ");
  /* sætter den nye sætning ind i vores <p> */
  paragraph.innerHTML = sfwSentence;
}
