
# 🛠️ Instructivo para Crear una Cuenta en GitHub e Instalar Git

## 📘 ¿Qué es Git y GitHub?

- **Git**: Sistema de control de versiones. Permite guardar y manejar cambios en tu código.
- **GitHub**: Plataforma en la nube para almacenar proyectos con Git y colaborar en equipo.

Ambas herramientas son fundamentales en el mundo del desarrollo de software y ciencia de datos.

---

## 🧾 1️⃣ Crear una cuenta en GitHub

1. Ingresá a: [https://github.com/](https://github.com/)
2. Hacé clic en **Sign up** (arriba a la derecha).
3. Completá los siguientes datos:
   - Correo electrónico
   - Nombre de usuario (elegilo con cuidado, será visible)
   - Contraseña
4. Confirmá tu dirección de correo electrónico.
5. Elegí el plan gratuito.

✅ ¡Listo! Ya tenés tu cuenta de GitHub.

---

## 💻 2️⃣ Instalar Git en tu computadora

### 🪟 Windows

1. Ingresá a: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. El instalador se descargará automáticamente.
3. Ejecutá el instalador.
4. En las opciones, dejá todo por defecto y hacé clic en **Next** hasta finalizar.
5. Verificá la instalación con:
   ```bash
   git --version
   ```

### 🍎 macOS

1. Instalá Git usando Homebrew:
   ```bash
   brew install git
   ```
2. O descargalo desde: [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

### 🐧 Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install git
```

---

## ⚙️ 3️⃣ Configurar Git por primera vez

En tu terminal, ejecutá los siguientes comandos con tus datos:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@ejemplo.com"
```

Podés verificar la configuración con:

```bash
git config --list
```

---

## 🧠 ¿Por qué es importante?

- Vas a poder trabajar en proyectos reales de forma colaborativa.
- Aprender Git y GitHub te prepara para el mundo laboral.
- Es una herramienta imprescindible en ciencia de datos y desarrollo de software.

---

📌 **Recomendación docente:** Instalá Git y creá tu cuenta de GitHub antes de la segunda clase.  
Guardá tu nombre de usuario y correo porque lo vas a necesitar para subir tus ejercicios.

