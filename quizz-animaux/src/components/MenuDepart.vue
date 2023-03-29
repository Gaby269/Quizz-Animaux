<template>
  <div>
    <h2 class="display-1">MenuDepart</h2>
    <ul v-for="message in messages" :key="message.id">
      <li>{{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ["My very", "Coucou", "Message"],
    };
  },
};
</script>

<style scoped>
li:before {
  content: "\2022"; /* code unicode pour le point */
  margin-left: 5px; /* ajouter une marge à droite pour séparer le point du texte */
  margin-right: 5px; /* ajouter une marge à droite pour séparer le point du texte */
  font-size: 2em; /* doubler la taille du point */
  line-height: 1.1; /* ajuster la hauteur de ligne pour aligner le texte */
  vertical-align: middle; /* ajuster la position verticale du point */
}
</style>
