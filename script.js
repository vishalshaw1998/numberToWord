arr1 = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
];
arr2 = [
    "Zero",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
];
arr3 = [
    "Zero",
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
];
var btn = document.getElementsByClassName("btn")[0];
var toAppend = document.getElementsByClassName("content1")[0];
pattern = /^[0-9]{0,8}$/;
btn.addEventListener("click", () => {
    var input = document.getElementsByTagName("input")[0];
    var regexAns = pattern.test(input.value);
    if (regexAns == false) {
        alert("Please Enter the Correct 8 Digit Number");
        input.value = "";
        return;
    }
    if (input.value.length == 0) {
        alert("Please Enter a Value");
        return;
    } else if (input.value.length == 1) {
        ans = ToOne(input.value);
        if (ans == " ") ans = "Zero";
    } else if (input.value.length == 2) {
        ans = ToTwo(input.value);
        if (ans == " ") ans = "Zero";
    } else if (input.value.length == 3) {
        ans = ToThree(input.value);
        if (ans == " ") ans = "Zero";
    } else if (input.value.length == 4) {
        ans = ToFour(input.value);
        if (ans == " ") ans = "Zero";
    } else if (input.value.length == 5) {
        ans = ToFive(input.value);
        if (ans == " ") {
            ans = "Zero";
        }
    } else if (input.value.length == 6) {
        ans = ToSix(input.value);
        if (ans == " ") {
            ans = "Zero";
        }
    } else if (input.value.length == 7) {
        ans = ToSeven(input.value);
        if (ans == " ") {
            ans = "Zero";
        }
    } else if (input.value.length == 8) {
        ans = ToEight(input.value);
        if (ans == " ") {
            ans = "Zero";
        }
    }
    toAppend.innerHTML = ans;
});

function ToOne(num) {
    if (num == 0) {
        return " ";
    }
    return arr1[parseInt(num)];
}
function ToTwo(num) {
    if (num[0] == 0) {
        return ToOne(num.slice(1, 2));
    } else {
        if (num < 20) {
            if (num != 10) return arr2[parseInt(num.slice(1, 2))];
            else return "Ten";
        }
        return arr3[parseInt(num.slice(0, 1))] + " " + ToOne(num.slice(1, 2));
    }
}
function ToThree(num) {
    if (num[0] == 0) return ToTwo(num.slice(1, 3));
    else {
        return (
            arr1[parseInt(num.slice(0, 1))] +
            " Hundred " +
            ToTwo(num.slice(1, 3))
        );
    }
}
function ToFour(num) {
    if (num[0] == 0) return ToThree(num.slice(1, 4));
    else {
        return arr1[num.slice(0, 1)] + " Thousand " + ToThree(num.slice(1, 4));
    }
}
function ToFive(num) {
    if (num[0] == 0) {
        return ToFour(num.slice(1, 5));
    } else {
        return ToTwo(num.slice(0, 2)) + " Thousand " + ToThree(num.slice(2, 5));
    }
}
function ToSix(num) {
    if (num[0] == 0) {
        return ToFive(num.slice(1, 6));
    } else {
        return ToOne(num.slice(0, 1)) + " Lakh " + ToFive(num.slice(1, 6));
    }
}
function ToSeven(num) {
    if (num[0] == 0) {
        return ToSix(num.slice(1, 7));
    } else {
        return ToTwo(num.slice(0, 2)) + " Lakh " + ToFive(num.slice(2, 7));
    }
}
function ToEight(num) {
    if (num[0] == 0) {
        return ToSeven(num.slice(1, 8));
    } else {
        return ToOne(num.slice(0, 1)) + " Crore " + ToSeven(num.slice(1, 8));
    }
}
