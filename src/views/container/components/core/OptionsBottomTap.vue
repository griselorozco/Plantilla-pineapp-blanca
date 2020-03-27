<template>
  <v-col
    cols="12"
    md="12"
  >
    <v-btn
      v-if="isModeSave"
      color="secondary"
      dark
      absolute
      bottom
      right
      fab
      :class="{ 'btn-save-flat': isModeSave, 'btn-save-no-arrow': noArrow }"
      @click="onSaveButton"
    >
      <v-icon>mdi-content-save-outline</v-icon>
    </v-btn>

    <v-btn
      v-if="isModeSave"
      color="secondary"
      dark
      absolute
      bottom
      right
      fab
      :class="{ 'btn-save-flat': !isModeSave, 'btn-cancel-flat': isModeSave,'btn-cancel-no-arrow': noArrow }"
      @click="onCancelButton"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-btn
      v-if="!noArrow"
      color="secondary"
      dark
      absolute
      bottom
      right
      fab
      @click="nextTap"
    >
      <v-icon>mdi-arrow-right</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
  export default {
    props: {
      tapNumber: {
        type: Number,
        default: 0,
      },
      isModeSave: Boolean,
      onSave: Boolean,
      isViewMode: Boolean,
      noArrow: {
        type: Boolean,
        default: false,
      },
    },
    mounted () {},
    methods: {
      nextTap () {
        this.$emit('nextTap', this.tapNumber)
      },
      onSaveButton: function () {
        this.$emit('onSave')
      },
      onCancelButton: function () {
        this.$emit('onCancelButton')
      },
    },
  }
</script>

<style>
.btn-cancel-flat {
  right: 134px !important;
}
.btn-save-flat {
  right: 75px !important;
}

.btn-save-no-arrow {
    right:20px !important;
}

.btn-cancel-no-arrow {
    right:80px !important;
}
</style>
