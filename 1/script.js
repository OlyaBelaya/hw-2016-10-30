var str = prompt("Введите e-mail:", "");
console.log(str);
indexStr = str.indexOf("@");
indexDot = str.indexOf(".");
console.log(indexStr);
console.log(indexDot);

if (indexStr < 0 || indexDot < 0) {
    alert("E-Mail Введен не по шаблону!!! Пример - emailaddr@domain.zone");
} else {     
        if (indexStr < 5) {
            alert("Адрес введен не корректно!");
          }
        domain = str.slice(indexStr +1, indexDot);
        console.log(domain);
        console.log(domain.length);
              
        if (domain.length <=1 || domain.length >=10) {
            alert("Домен введен не корректно!");
          }

        zone = str.slice(indexDot + 1);
                console.log(zone);
                console.log(zone.length);
  
                if (zone.length < 2 || zone.length >=5) {
                    alert("Зона введена не корректно!");
                  }
        }
