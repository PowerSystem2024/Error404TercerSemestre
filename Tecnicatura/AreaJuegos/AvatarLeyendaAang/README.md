# 🧙‍♂️ LA LEYENDA DE AANG: AVATAR – Juego Interactivo en HTML, CSS y JavaScript

## 📋 Descripción

Este proyecto es un juego interactivo en el cual el usuario puede seleccionar un personaje del universo *Avatar* y enfrentarse a un enemigo en un combate por turnos. Utiliza tecnologías básicas del desarrollo web: **HTML**, **CSS** y **JavaScript**.

---

## 🧱 Estructura HTML

El archivo `index.html` contiene la estructura base del juego. Las principales secciones son:

- Título del juego en una etiqueta `<h1>`.
- Sección de **selección de personaje**, con inputs tipo `radio` para elegir entre Zuko, Katara, Aang y Toph.
- Botón para confirmar el personaje elegido.
- Sección para seleccionar ataques (Puño, Patada, Barrida).
- Zona de mensajes donde se muestra el resultado de cada ataque.
- Botón para reiniciar el juego.
- Modal con las reglas del juego.

---

## 🧍‍♂️ Selección de Personaje

Se agregaron inputs tipo `radio` para que el usuario seleccione su personaje. Al hacer clic en "Confirmar", se muestra una alerta con el personaje seleccionado y se oculta la sección de selección para dar paso al combate.

El enemigo selecciona aleatoriamente un personaje entre los disponibles mediante `Math.random()`.

---

## 🥋 Ataques y Lógica del Juego

Los jugadores pueden elegir entre tres ataques:

- **Puño**
- **Patada**
- **Barrida**

El resultado del combate se define según estas reglas:

- `Puño` vence a `Barrida`
- `Patada` vence a `Puño`
- `Barrida` vence a `Patada`
- Si ambos ataques son iguales, se considera **empate**

---

## ❤️ Sistema de Vidas

- El jugador y el enemigo comienzan con 3 vidas.
- Cada victoria reduce una vida del oponente.
- El juego termina cuando alguno llega a 0 vidas.
- Se muestra un mensaje final (GANASTE o PERDISTE) y se habilita el botón de reinicio.



