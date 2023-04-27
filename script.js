function calculate() {
  let sub1 = parseInt(
    document.getElementsByClassName('scoreMarks')[0].innerHTML
  );
  let sub2 = parseInt(
    document.getElementsByClassName('scoreMarks')[1].innerHTML
  );
  let sub3 = parseInt(
    document.getElementsByClassName('scoreMarks')[2].innerHTML
  );
  let sub4 = parseInt(
    document.getElementsByClassName('scoreMarks')[3].innerHTML
  );
  let sub5 = parseInt(
    document.getElementsByClassName('scoreMarks')[4].innerHTML
  );
  let sub6 = parseInt(
    document.getElementsByClassName('scoreMarks')[5].innerHTML
  );

  totalMarks = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
  console.log(totalMarks);

  let percentage = Math.floor((totalMarks / 600) * 100);
  document.getElementById(
    'percentage'
  ).innerHTML = `Percentage : ${percentage}% `;

  document.getElementById('totalScoredMarks').innerHTML = totalMarks;
}
