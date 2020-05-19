<template>
  <v-item-group
    v-model="answer"
    :mandatory="question.mandatory"
    :multiple="question.multiple"
  >
    <v-container fill-height fluid>
      <v-card shaped width="100%">
        <v-card-title class="headline"
          >Question {{ question.id + 1 }}
        </v-card-title>
        <v-card-text class="headline">{{ question.label }}</v-card-text>
        <v-card-actions>
          <v-row>
            <v-col
              v-for="answer in question.answers"
              :key="answer.id"
              cols="12"
              md="6"
              lg="4"
              xl="3"
              align-self="center"
            >
              <v-item v-if="answer.text">
                <v-textarea
                  :label="answer.label"
                  auto-grow
                  clearable
                  rows="1"
                ></v-textarea>
              </v-item>
              <v-item v-else v-slot:default="{ active, toggle }">
                <v-card
                  :color="
                    active
                      ? 'activeButton' + (answer.id % 6)
                      : 'button' + (answer.id % 6)
                  "
                  class="d-flex align-center quizButton white--text"
                  min-height="140"
                  @click="toggle"
                >
                  <div class="title flex-grow-1 text-center">
                    {{ answer.label }}
                  </div>
                </v-card>
              </v-item>
            </v-col>
            <v-col v-if="question.other" cols="12" sm="6" md="3">
              <v-textarea label="Other" auto-grow clearable rows="1" />
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  name: "Question",

  props: {
    question: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    answer: []
  })
};
</script>

<style>
.quizButton {
  padding: 0.6rem;
}
</style>
