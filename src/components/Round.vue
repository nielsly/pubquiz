<template>
  <div>
    <v-card-title class="display-2">Round {{ round.id + 1 }}</v-card-title>
    <v-card-text>{{ round.text }}</v-card-text>
    <question v-for="item in round.questions" :key="item.id" :question="item" />
  </div>
</template>

<script>
import Question from "@/components/Question";
export default {
  name: "Round",

  components: {
    Question
  },

  props: {
    round: {
      type: Object,
      required: true
    }
  }
};
</script>
