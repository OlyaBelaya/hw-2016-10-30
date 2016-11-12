var i = 0;
var j = 0;
var rand1 = 0;
var rand2 = 0;
// Выполнения блока для игрока 1                
for (; i<=21; i = i + rand1) {
     console.log(i);
     var str1 = prompt(`Предлагаем сгенерировать случайное число первому игроку...
                        Для генерации нажмите "Y"
                        Для отмены нажмите "N"`, "");
         
     if (str1 === "Y" || str1 ==="y") {
         var rand1 = Math.floor(Math.random() * (11-1 + 1)) + 1;
         alert("Случайное число - " + rand1 + ". Сумма очков - " + (i + rand1));                                             
         continue;
     } else if (str1 ==="N" || str1 === "n") {
                alert("Ход переходит к игроку 2");                                 
                break;
            }
       else if (str1 === null) {if (confirm("Вы хотите завершить игру?")) {break;}
                                       else {continue;}
                                }
                                                    
       else {alert("Ваш ответ не понятен!!!");
                           continue;}                         
            
}
if ( i > 21) {
    alert(`GAME OVER!!!
                    Игрок №1 проиграл!!!`)
  } else{ // Выполнения блока для игрока 2          
               
         for (; j<=21; j = j + rand2) {
              console.log(j);
              var str2 = prompt(`Предлагаем сгенерировать случайное число второму игроку...
                                  Для генерации нажмите "Y"
                                  Для отмены нажмите "N"`, "");
         
              if (str2 === "Y" || str2 ==="y") {
                  var rand2 = Math.floor(Math.random() * (11-1 + 1)) + 1;
                  alert("Случайное число - " + rand2 + ". Сумма очков - " + (j + rand2)); 
                  continue;
                } else if (str2 ==="N" || str2 === "n") {
                          break;
                        }
                                              
                  else if (str2 === null) {if (confirm("Вы хотите завершить игру?")) {break;}
                                           else {continue;}
                                          }                              
                  else {
                        alert("Ваш ответ не понятен!!!");
                        continue;
                      }
              }  
          console.log("Player 1 = " + i);
          console.log("Player 2 = " + j);                                                   
          if ( j > 21) {
              alert(`GAME OVER!!!
                    Игрок №2 проиграл!!!`)
            }  else if (i === j) {
                        alert("Победила дружба")
                      } 
               else if (i > j) {
                        alert("Победу одержал первый игрок!!!!")
                      }
               else {
                     alert("Победу одержал второй игрок!!!!")
                   }                                                                   
           }      
                                     
                                                   
                                                   
             
              
            
