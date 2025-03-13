const createNumberTable = () => {
    const outputDiv = document.getElementById("output");
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    for (let i = 1; i <= 12; i++) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = i;
        cell.style.border = "1px solid black";
        cell.style.padding = "10px";
        cell.style.textAlign = "center";

        if (i % 4 === 0) {
            cell.style.backgroundColor = "blue";
            cell.style.color = "white";
        }

        row.appendChild(cell);
        table.appendChild(row);
    }

    outputDiv.appendChild(table);
};

createNumberTable();
