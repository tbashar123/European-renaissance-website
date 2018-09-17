  function mystery(quizType, operator, numberOfQuestions ){
        for(var i=0; i<numberOfQuestions; i++){
               var quizFieldSet = document.getElementById('quizQuestions');
               document.getElementById('quizLegend').innerHTML = quizType.toUpperCase() + " QUIZ";
               nums1[i] = Math.floor(Math.random() * 10 + 1);
               nums2[i] = Math.floor(Math.random() * 10 + 1);
               var question = document.createElement('label');
               question.innerHTML =  nums1[i] + operator + nums2[i] + " = ";
               document.getElementById('quizQuestions').appendChild(question);
               var answer = document.createElement('input');
               var ansID = document.createAttribute("id");
               var ansType = document.createAttribute("type");
               ansType.value = "number";
               ansID.value = "answer"+i;
               answer.setAttributeNode(ansID);
               answer.setAttributeNode(ansType);
               document.getElementById('quizQuestions').appendChild(answer);
               document.getElementById('quizType').disabled=true;
           }
       }
