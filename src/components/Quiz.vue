<template>
  <v-app>
    <v-stepper v-model="round">
      <v-stepper-header>
        <template v-for="n in quiz.rounds.length">
          <v-stepper-step :key="`${n}-step`" :complete="round > n" :step="n">
            Round {{ n }}
          </v-stepper-step>

          <v-divider v-if="n !== quiz.rounds.length" :key="n"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="(item, i) in quiz.rounds"
          :key="`${i + 1}-content`"
          :step="i + 1"
        >
          <round :round="item" />

          <v-btn
            v-if="quiz.back"
            text
            :disabled="round === 1"
            @click="previousRound()"
          >
            Back
          </v-btn>
          <v-btn color="primary" @click="nextRound()">
            {{ round === quiz.rounds.length ? "Finish quiz" : "Continue" }}
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>

      <v-stepper-header>
        <template v-for="n in quiz.rounds.length">
          <v-stepper-step :key="`${n}-step`" :complete="round > n" :step="n">
            Round {{ n }}
          </v-stepper-step>

          <v-divider v-if="n !== quiz.rounds.length" :key="n"></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>
  </v-app>
</template>

<script>
import Round from "@/components/Round";
export default {
  name: "QuizComponent",

  components: {
    Round
  },

  data: () => ({
    round: 1,
    quiz: {
      back: true,
      rounds: [
        {
          id: 0,
          label: "An example round, with stupid questions.",
          questions: [
            {
              id: 0,
              label: "question one",
              multiple: true,
              other: true,
              answers: [
                { id: 0, label: "once upon a time a man indeed" },
                { id: 1, label: "two" },
                { id: 2, label: "three" }
              ]
            },
            {
              id: 1,
              mandatory: true,
              label: "question two",
              answers: [
                { id: 0, label: "one" },
                { id: 1, label: "two" },
                { id: 2, label: "three" },
                { id: 3, label: "four" }
              ]
            },
            {
              id: 2,
              other: true,
              label: "question epsilon",
              answers: [
                { id: 0, text: true, label: "text field question" },
                { id: 1, text: true, label: "text area question" }
              ]
            },
            {
              id: 3,
              label: "question beta",
              multiple: true,
              answers: [
                { id: 0, label: "one" },
                { id: 1, label: "two" },
                { id: 2, label: "three" },
                { id: 3, label: "four" },
                { id: 4, label: "alpha" },
                { id: 5, label: "beta" },
                { id: 6, label: "zeta" }
              ]
            }
          ]
        },
        {
          id: 1,
          label: "Another example round, with stupid questions.",
          questions: [
            {
              id: 0,
              label: "question one",
              multiple: true,
              answers: [
                { id: 0, label: "Once upon a time a man indeed" },
                { id: 1, label: "two" },
                {
                  id: 2,
                  label:
                    "I'm trying to completely fill this element, how am I doing so far? Must be quite near the end now, right? Hopefully this won't take much longer, it is getting very tiresome."
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "Another another example round, with stupid questions.",
          questions: [
            {
              id: 0,
              label: "question one",
              multiple: true,
              answers: [
                { id: 0, label: "Once upon a time a man indeed" },
                { id: 1, label: "two" },
                { id: 2, label: "Lorem ipsum" }
              ]
            }
          ]
        },
        {
          id: 3,
          label:
            "Another another another example round, with stupid questions.",
          questions: [
            {
              id: 0,
              label: "question one",
              other: true,
              answers: [
                { id: 0, label: "Once upon a time a man indeed" },
                { id: 1, label: "two" },
                { id: 2, text: true, label: "lorem" },
                { id: 3, label: "Lorem ipsum" },
                { id: 4, text: true, label: "ipsum" }
              ]
            }
          ]
        }
      ]
    }
  }),

  methods: {
    nextRound() {
      if (this.round !== this.quiz.rounds.length) {
        this.round++;
      } else {
        this.$router.push("/");
      }
    },
    previousRound() {
      if (this.round !== 1) {
        this.round--;
      }
    }
  }
};
</script>
