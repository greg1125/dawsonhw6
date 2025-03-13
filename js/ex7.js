const getSumOfIntegers = () => {
    const contentDiv = document.getElementById("content");

    let num1 = prompt("Enter the first integer:");
    let num2 = prompt("Enter the second integer:");

    if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2)) || num1.includes(".") || num2.includes(".")) {
        contentDiv.innerHTML = `<p><strong style="color: red;">Error!</strong> You must enter integers. You entered "<strong>${num1}</strong>" and "<strong>${num2}</strong>". Try again.</p>`;
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let sum = num1 + num2;

    contentDiv.innerHTML = `<p>${num1} + ${num2} = <span style="color: red; font-weight: bold;">${sum}</span></p>`;
};

getSumOfIntegers();
