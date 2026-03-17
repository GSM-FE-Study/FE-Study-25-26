function solution(myString, pat) {
  let changed = "";
  for (let i = 0; i < myString.length; i++) {
    changed += myString[i] === "A" ? "B" : "A";
  }

  return changed.includes(pat) ? 1 : 0;
}
