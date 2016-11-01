//创建一个函数,比较两个数的大小，返回较大的，快捷方式return x >= y ? x : y;
function larger_number(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

//调用函数
var a = larger_number(2, 3);
document.write("2和3中比较大的数字是：" + a + "<br>");

//创建一个两个数和的函数
function add2(x, y) {
    var sum = x + y;
    return sum;
}

//做一个小计算器

function calculator(num1, num2) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var result;
    switch (operator) {
        case '+':
            result = parseInt(num1) + parseInt(num2) // code
            break;
        case '-':
            result = parseInt(num1) - parseInt(num2) // code
            break;
        case '*':
            result = parseInt(num1) * parseInt(num2) // code
            break;
        case '/':
            result = parseInt(num1) / parseInt(num2) // code
            break;
    }
    document.getElementById("result").value = result;
}

//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
var mystr = "hello world!"
document.write(mystr.indexOf("o") + "<br/>")

//通过javascript的日期对象来得到当前的日期，并输出。
var my_Date = new Date()
var myYear = my_Date.getFullYear()
var myMonth = my_Date.getMonth()
var myDate = my_Date.getDate()
var week = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
myDay = week[my_Date.getDay()]

//成绩是一长窜的字符串不好处理，找规律后分割放到数组里更好操作哦
var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76"
var myArry = scoreStr.split(";")
var my_num = 0;
var avg;

//从数组中将成绩撮出来，然后求和取整，并输出。
for (var i = 0; i < myArry.length; i++) {
    my_num = my_num + parseInt(my_num = myArry[i].slice(3))
    avg = my_num / parseInt(myArry.length)
};
var scor = parseInt(avg)
document.write(myYear + "年" + myMonth + "月" + myDate + "日" + " " + myDay + "--班级总分为" + scor + "<br/>")

//DOM方法
function myFunction() {
    alert("欢迎来到慕课网")
    window.open("http://www.imooc.com", "width=600", "height=400")
}

//计时器
var attime;
function clock() {
    var time = new Date();
    attime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    document.getElementById("clock").value = attime;
}
var i=setInterval(clock,1000)

//要创建一个运行于无穷循环中的计数器
var num=0;
function count(){
    document.getElementById("txt").value=num;
    num=num+1; 
    setTimeout("count()",1000); 
}


