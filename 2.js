//创建一个函数,比较两个数的大小，返回较大的，快捷方式return x >= y ? x : y;
        function larger_number(x, y) {
            if (x >= y) {
                return x;
            }
            else {
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