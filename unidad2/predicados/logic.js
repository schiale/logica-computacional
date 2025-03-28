let contador = 0;

function agregarUsuario() {
  const container = document.getElementById("usuarios-container");
  const div = document.createElement("div");
  div.className = "usuario";

  div.innerHTML = `
    <label>Usuario ${contador + 1} - Compras: 
      <input type="number" name="compras${contador}" min="0" required>
    </label>
    <label>¿Recibe recomendación? 
      <input type="checkbox" name="recomienda${contador}">
    </label>
    <hr>
  `;
  container.appendChild(div);
  contador++;
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  let cumple = true; 

  for (let i = 0; i < contador; i++) {
    const compras = parseInt(document.querySelector(`[name=compras${i}]`).value);
    const recomienda = document.querySelector(`[name=recomienda${i}]`).checked;

    if (compras > 3 && !recomienda) {
      cumple = false;
    }
  }

  const resultado = document.getElementById("resultado");
  resultado.textContent = cumple
    ? "✅ La fórmula se cumple para todos los usuarios."
    : "⛔ La fórmula NO se cumple para todos.";
});
