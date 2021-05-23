/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" color="primary" class="mb-3">Add new user</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h3 class="primary--text">Add a New User</h3>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Username" v-model="model.username" prepend-icon="account_box"></v-text-field>
          <v-text-field label="Firstname" v-model="model.firstname" prepend-icon="person"></v-text-field>
          <v-text-field label="Lastname" v-model="model.lastname" prepend-icon="person"></v-text-field>
          <v-text-field :type="'password'" label="Password" v-model="model.password" prepend-icon="edit"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary mx-0 mt-3" @click="submit" >
              Add User
              <v-icon right>done</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  data () {
    return {
      dialog: false,
      model: {}
    }
  },
  methods: {
    submit () {
      this.dialog = false
      this.$emit('userInfo', this.model)
    }
  }
}
</script>
