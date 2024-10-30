let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        let operators = ['+', '-', '*', '/'];

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } 
        else if (value === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            if (operators.includes(value) && operators.includes(string.slice(-1))) {
                string = string.slice(0, -1) + value;
            } else {
                string += value;
            }

            input.value = string;
        }
    });
});
