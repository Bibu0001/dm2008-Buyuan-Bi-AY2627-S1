# Final Project — Ecosystem

<!-- Replace "Title" with the name of your project -->

---

### The Project

We tried to create an ecosystem simulation that contains objects that eat each other to sustain themselves, forming a self sustaining biome. 

---

### Output

![screenshot](readme-assets/screenshot-01.png)

<!-- Drop a screenshot or GIF of your project.
     Got more to show? Add more images — let the work speak for itself.
     Save everything to a readme-assets/ folder inside this project folder. -->

[Watch Online](https://editor.p5js.org/furiousskeeleton/full/ZFnp30XDH)

<!-- Replace the link above with a URL to a screen recording or video of your final project.
     ⚠️ Make sure the file or page is set to public before submitting. -->

---

### ✍️ Reflection

Our input system uses mouse clicks to allow the players to spawn in creatures in a population of plants, predators and prey.
Using the keyboard, the user can toggle between growing plants, prey or predator as well as the size of the population planted. This allows the user to alter the populations of plants, predator and prey to disrupt the balance of the ecosystem, causing it to deplete or regenerate.


Our project uses object oriented programming. The ecosystem is organized around the superclass of Living Thing which contains shared properties such as random movement and boundary checking that is inherited by each class of Predator, Prey and Plant. 

A key system used is a grid based movement system where organisms move between cells using a destination-based random-walk algorithm, and population management systems that regulate feeding, hunting, reproduction and starvation. Each organism has individual attributes, such as hunger levels, movement ranges and lifespan, which determine its behaviour and survival.

The ecosystem evolves as organisms move, consume, reproduce and die. Each interaction changes the population balance, affecting the availability of food and the survival of other organisms. Users can influence this progression by clicking to introduce more plants, prey or predators. Increasing or decreasing a particular population disrupts the existing food chain and can lead to population growth, food shortages or ecosystem collapse. Over time, the simulation demonstrates how the survival of each species depends on the balance between the different populations. This highlights the fragility of a self-sustaining ecosystem.

---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ Features
     A short list of what your project does.
     - Responds to mouse position and velocity
     - Generates sound based on particle density

     ### 🔍 Code Structure
     How are your files organised?
     - `sketch.js` — main setup and draw loop
     - `Agent.js` — autonomous agent class
     - `assets/` — images and sounds

     ### 🛠️ Hardware (if applicable)
     List any physical components used.
     - Arduino Uno
     - Sensor type and model

     ### 🧩 Something I'm Proud Of
     A snippet, a decision, a moment where it all came together.
     ```js
     // your code here
     ```

     ### 🔗 References
     Tutorials, libraries, artworks, or research that informed your project.
     ───────────────────────────────────────────────────── -->
