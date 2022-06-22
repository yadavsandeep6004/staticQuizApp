let quizData = [
    {
      question: 'Which language runs in a web browser?',
      a: 'Java',
      b: 'C',
      c: 'Python',
      d: 'JavaScript',
      correct: 'd',
    },
    {
      question: 'What does CSS stand for?',
      a: 'Central Style Sheets',
      b: 'Cascading Style Sheets',
      c: 'Cascading Simple Sheets',
      d: 'Cars SUVs Sailboats',
      correct: 'b',
    },
    {
      question: 'What does HTML stand for?',
      a: 'Hypertext Markup Language',
      b: 'Hypertext Markdown Language',
      c: 'Hyperloop Machine Language',
      d: 'Helicopters Terminals Motorboats Lamborginis',
      correct: 'a',
    },
    {
      question: 'What year was JavaScript launched?',
      a: '1996',
      b: '1995',
      c: '1994',
      d: 'none of the above',
      correct: 'b',
    },
  ];

  const cantenar = document.getElementById("cantenar");
  const question = document.getElementById("question");
  const answer =  document.querySelectorAll(".answer");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const button = document.getElementById("btn");
  const skip = document.getElementById("skip");

  let quesIndex=0;
  let score =0;
  //=====================loadQuize====================
  loadQuize();
  function loadQuize(){
    deselectwers();
    question.innerText=quizData[quesIndex].question;
    a_text.innerText=quizData[quesIndex].a;
    b_text.innerText=quizData[quesIndex].b;
    c_text.innerText=quizData[quesIndex].c;
    d_text.innerText=quizData[quesIndex].d;
  }
  

  // ===================== checked false===========
function deselectwers(){
  answer.forEach(element => element.checked=false);
}



//===========================================

function getSelected(){
  let ans;
  answer.forEach((e)=>{
    if(e.checked){
      ans=e.id;
    }
  })
  return ans;
}

function check(){
  if(quesIndex<quizData.length){
    loadQuize()
  }else{
    cantenar.innerHTML=`
    <h2>You Answered ${score}/${quizData.length} Question correctly</h2>
    <button onclick="location.reload()">Reload</button>`
  }
}




button.addEventListener('click',()=>{
  let ans= getSelected()
  if(ans){
    if(ans===quizData[quesIndex].correct){
      score++;
    }
  
  
  quesIndex++;
  check()
}
  
})

skip.addEventListener('click',()=>{
  quesIndex++;
  check()
})

