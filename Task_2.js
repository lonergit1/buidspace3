const scores = [78, 92, 65, 88, 54, 71, 96, 83];
function analyzeScores(scores) {
  if (scores.length === 0) {
    return "No scores provided";
  }
  let total = 0;
  let passed = 0;
  let failed = 0;
  let highest = scores[0];
  let lowest = scores[0];

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    total += score;
    if (score >= 60) {
      passed++;
    } else {
      failed++;
    }
    if (score > highest) {
      highest = score;
    }
    if (score < lowest) {
      lowest = score;
    }
  }
  const average = total / scores.length;
  return {
    total: total,
    average: average,
    highest: highest,
    lowest: lowest,
    passed: passed,
    failed: failed,
  };
}
console.log(analyzeScores(scores));
