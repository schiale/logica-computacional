function evaluateExpression() {
    let expr = document.getElementById("expression").value;
    let rows = "";

    try {
        for (let p of [false, true]) {
            for (let q of [false, true]) {
                for (let r of [false, true]) {
                    let result = eval(expr.replace(/P/g, p).replace(/Q/g, q).replace(/R/g, r));
                    rows += `<tr>
                        <td>${p ? "V" : "F"}</td>
                        <td>${q ? "V" : "F"}</td>
                        <td>${r ? "V" : "F"}</td>
                        <td>${result ? "V" : "F"}</td>
                    </tr>`;
                }
            }
        }
        document.getElementById("truthTable").innerHTML = rows;
    } catch (error) {
        document.getElementById("truthTable").innerHTML = "<tr><td colspan='4'>Expresión inválida</td></tr>";
    }
}