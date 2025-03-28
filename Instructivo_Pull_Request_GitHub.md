
# 🚀 Instructivo para Realizar un Pull Request en GitHub

## 📘 Objetivo
Este instructivo te guiará paso a paso para que puedas subir tus ejercicios resueltos al repositorio de la materia y solicitar una revisión mediante un **Pull Request (PR)**.

Repositorio oficial de la materia:  
🔗 [https://github.com/schiale/logica-computacional/tree/main](https://github.com/schiale/logica-computacional/tree/main)

---

## 🧩 Requisitos

- Tener una cuenta en GitHub.
- Tener instalado **Git** en tu computadora.
- Editor de código recomendado: **Visual Studio Code**, **Sublime Text**, **JupyterLab**, etc.

---

## 1️⃣ Hacer un Fork del repositorio

1. Ingresá al repositorio oficial:  
   👉 [https://github.com/schiale/logica-computacional](https://github.com/schiale/logica-computacional)
2. Hacé clic en el botón **Fork** (arriba a la derecha).
3. GitHub creará una copia del repositorio en tu cuenta.

---

## 2️⃣ Clonar el repositorio a tu máquina local

Abrí una terminal y ejecutá:

```bash
git clone https://github.com/TU_USUARIO/logica-computacional.git
cd logica-computacional
```

---

## 3️⃣ Crear una nueva rama para tus ejercicios

```bash
git checkout -b ejercicios-tu-nombre
```

Ejemplo:

```bash
git checkout -b ejercicios-juan-perez
```

---

## 4️⃣ Agregar tus archivos o editar los ejercicios

1. Navegá hasta la carpeta correspondiente.
2. Agregá tus archivos `.txt`, `.md`, `.py`, `.circuit`, etc.
3. Guardá los cambios.

---

## 5️⃣ Hacer commit de los cambios

```bash
git add .
git commit -m "Agrego ejercicios resueltos - Juan Pérez"
```

---

## 6️⃣ Subir tus cambios a tu repositorio (fork)

```bash
git push origin ejercicios-tu-nombre
```

---

## 7️⃣ Crear el Pull Request

1. Andá a tu repositorio en GitHub.
2. Te va a aparecer un botón para “**Compare & Pull Request**”. Hacé clic.
3. Completá con un mensaje claro del contenido.
4. Verificá que el **branch base** sea `main` del repo original y el tuyo sea tu rama creada.
5. Hacé clic en **Create Pull Request**.

---

## ✅ ¡Listo!

Tu PR será revisado por el docente y vas a recibir comentarios si es necesario hacer correcciones.

---

## 🧠 Buenas prácticas

- Hacelo con tiempo: no esperes al último momento.
- Comentá tu código si es necesario.
- Subí imágenes o diagramas si ayudan a entender tu solución.
- Leé los comentarios de tu PR y aplicá las sugerencias.

---

¿Dudas o problemas?  
📧 Consultá por el aula virtual o directamente al docente.

