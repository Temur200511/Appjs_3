// 1) let a = prompt("birinchi sonni kiriting");
// let b = prompt("ikkinchi sonni kiriting");
// let c = prompt("uchinchi sonni kiriting");

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }   



// 2) let a = prompt("birinchi sonni kiriting");
// let b = prompt("ikkinchi sonni kiriting");
// let c = prompt("uchinchi sonni kiriting");

// if (a+b > c+a) {
//     console.log(a, b);            
// } else if (b+c > a+c) {
//     console.log(b, c);
// } else {
//     console.log(c, a);
// }





// 3) let son = prompt("Sonni kiriting");


// if(son > 0 && son % 2 == 1) {
//     console.log("Musbat toq son");        
// } else if (son > 0 && son % 2 ==0) {
//     console.log("musbat juft son");
    
// }
// else if (son < 0 && son % 2 == 1) {
//     console.log("manfiy toq son");        
// } else if (son < 0 && son % 2 ==0) {
//     console.log("manfiy juft son");
// }

// else if(son == 0) {
//     console.log("son nolga teng");
// }






// let Oyraqami = prompt("Oy raqamini kiriting");

// switch (Oyraqami) {
//     case "1":
//         console.log("31 kun");
//         break;
//     case "2":
//         console.log("28 kun");
//         break;
//     case "3":
//         console.log("31 kun");
//         break;
//     case "4":
//         console.log("30 kun");
//         break;
//     case "5":
//         console.log("31 kun");
//         break;
//     case "6":
//         console.log("30 kun");
//         break;
//     case "7":
//         console.log("31 kun");
//         break;
//     case "8":
//         console.log("31 kun");
//         break;
//     case "9":
//         console.log("30 kun");
//         break;
//     case "10":
//         console.log("31 kun");
//         break;
//     case "11":
//         console.log("30 kun");
//         break;
//     case "12":
//         console.log("31 kun");
//         break;
    
//         default:
//         console.log("Bunday oy raqami mavjud emas");
//         break;
// }





// let a = Number(prompt("Sonni kiriting"));

// if (a>0 && a<999) {
//     let yuz=Math.floor(a/100);
//     let on=Math.floor((a%100)/10);
//     let bir=a%10;

//     let yuzlik="",onlik="",birlik="";

//     switch (yuz) {
//         case 1: yuzlik="yuz"; break;    
//         case 2: yuzlik="ikki yuz"; break;
//         case 3: yuzlik="uch yuz"; break;
//         case 4: yuzlik="to'rt yuz"; break;
//         case 5: yuzlik="besh yuz"; break;
//         case 6: yuzlik="olti yuz"; break;
//         case 7: yuzlik="yetti yuz"; break;
//         case 8: yuzlik="sakkiz yuz"; break;
//         case 9: yuzlik="to'qqiz yuz"; break;
//     }

//     switch (on) {
//         case 1: onlik="o'n"; break;
//         case 2: onlik="yigirma"; break;
//         case 3: onlik="o'ttiz"; break;
//         case 4: onlik="qirq"; break;
//         case 5: onlik="ellik"; break;
//         case 6: onlik="oltmish"; break;
//         case 7: onlik="yetmish"; break;
//         case 8: onlik="sakson"; break;
//         case 9: onlik="to'qson"; break;
//     }

//     switch (bir) {
//         case 1: birlik="bir"; break;
//         case 2: birlik="ikki"; break;    
//         case 3: birlik="uch"; break;
//         case 4: birlik="to'rt"; break;
//         case 5: birlik="besh"; break;
//         case 6: birlik="olti"; break;
//         case 7: birlik="yetti"; break;
//         case 8: birlik="sakkiz"; break;
//         case 9: birlik="to'qqiz"; break;
//     }

//     alert(`Kiritilgan son: ${a} \nNatija:${yuzlik} ${onlik} ${birlik}`.trim());

// }

// alert("Son 1-999 orasida bo'lishi kerak");