# ⚙️ Instructivo de instalación y configuración: XAMPP + Visual Studio Code

Este instructivo te guiará paso a paso para instalar un **entorno de desarrollo local** utilizando **XAMPP** como servidor y **Visual Studio Code** como editor de código. ¡Todo listo para empezar tus proyectos web con PHP! 💻🚀

---

## 🧰 ¿Qué vas a instalar?

| Herramienta           | ¿Para qué sirve?                                 |
|-----------------------|--------------------------------------------------|
| 🐘 **XAMPP**          | Servidor local (Apache + MySQL + PHP + Perl)    |
| 📝 **Visual Studio Code** | Editor de código ligero y potente               |

---

## 🪜 Paso 1: Descargar e instalar XAMPP

### 🔗 Enlace de descarga:
👉 [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html)

### 📦 Instrucciones:

1. Ingresá al enlace y descargá la versión de XAMPP para tu sistema operativo (Windows/Linux/Mac).
2. Ejecutá el instalador y seguí los pasos del asistente.
3. Durante la instalación, asegurate de incluir:
   - ✔️ Apache  
   - ✔️ MySQL  
   - ✔️ PHP  
4. Finalizada la instalación, abrí el **Panel de Control de XAMPP**.

---

## ▶️ Paso 2: Iniciar los servicios

1. Abrí el **XAMPP Control Panel**.
2. Hacé clic en **Start** en:
   - 🔥 **Apache**
   - 🐬 **MySQL**

> 🟢 Si todo está OK, verás los indicadores en color verde ✅.

---

## 📂 Paso 3: Crear tu proyecto

1. Abrí la carpeta donde está instalado XAMPP (por lo general: `C:\xampp`).
2. Ingresá a la carpeta `htdocs`.
3. Creá una nueva carpeta con el nombre de tu proyecto, por ejemplo:

```
C:\xampp\htdocs\mi_proyecto
```

4. Dentro de esa carpeta, vas a guardar todos los archivos `.php`, `.html`, `.css`, etc.

---

## 💻 Paso 4: Instalar Visual Studio Code

### 🔗 Enlace de descarga:
👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)

1. Descargá el instalador desde la página oficial.
2. Instalalo con las opciones predeterminadas.
3. Abrí VS Code y seleccioná **"Abrir carpeta"**, luego elegí tu carpeta del proyecto en `htdocs`.

---

## 🔌 Paso 5: Instalar extensiones recomendadas en VS Code

Dentro de Visual Studio Code, andá a la barra lateral izquierda y hacé clic en el ícono de **extensiones** (cuadro con 4 bloques). Instalá:

- 🌐 **PHP Server** (para correr scripts PHP fácilmente)
- 🎨 **Live Server** (útil para HTML/CSS)
- 🧠 **IntelliSense for CSS, HTML, PHP**
- 🛠️ **Prettier** (formateo automático de código)

---

## 🌐 Paso 6: Ver tu proyecto en el navegador

1. Asegurate de que **Apache** esté corriendo desde XAMPP.
2. Abrí tu navegador y escribí la siguiente dirección:

```
http://localhost/mi_proyecto
```

> 🔁 Recordá que podés actualizar los archivos desde VS Code y recargar el navegador para ver los cambios.

---

## 🧪 Paso 7: Verificar con un archivo de prueba

1. Dentro de tu carpeta de proyecto (`htdocs/mi_proyecto`), creá un archivo llamado `index.php`.
2. Pegá este contenido:

```php
<?php
  echo "¡Hola, mundo desde XAMPP!";
?>
```

3. Guardá el archivo y abrí `http://localhost/mi_proyecto` en tu navegador.  
Si ves el mensaje, ¡ya estás listo para desarrollar! 🎉

---

## ❓ Problemas comunes

| Problema                          | Solución                                             |
|----------------------------------|------------------------------------------------------|
| ❌ Apache no inicia              | Verificá que no haya conflictos con Skype, Teams, etc. |
| ⚠️ "Puerto 80 ocupado"          | Cambiá el puerto de Apache a 8080 desde el panel     |
| ❌ Archivos no se muestran      | Asegurate de guardar los archivos en `htdocs/`       |
| 🧐 Código PHP no se ejecuta     | Accedé vía `http://localhost/...`, no con doble clic |

---

## 🧭 ¡Todo listo!

Ya tenés un entorno de desarrollo completo para practicar lógica, estructuras de control, formularios, conexiones a bases de datos y mucho más 🚀
