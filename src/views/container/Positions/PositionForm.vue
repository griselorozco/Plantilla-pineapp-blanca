<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      inline
      class="px-5 py-3"
    >
      <template v-slot:heading>
        <v-tabs
          v-model="tabs"
          background-color="transparent"
          slider-color="white"
        >
          <v-tab class="mr-3">
            <v-icon class="mr-2">
              mdi-account-badge-horizontal-outline
            </v-icon>
            {{ $t('general') }}
          </v-tab>
        </v-tabs>
      </template>

      <v-card-text style="position: relative">
        <v-fab-transition>
          <v-btn
            fab
            dark
            small
            color="secondary"
            absolute
            right
            top
            @click="back()"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-card-text>
      <v-divider class="mt-3" />
      <v-form class="mt-5">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="position.name"
                :readonly="!isSaveMode"
                :label="$t('positions.name')"
              />
            </v-col>
            <v-col
              cols="12"
              md="8"
            >
              <v-textarea
                v-model="position.description"
                :label="$t('positions.description')"
                :readonly="!isSaveMode"
                rows="1"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <compOptionsBottomTap
        :no-arrow="true"
        :is-mode-save="option !== 2"
        @onSave="onSave"
        @onCancelButton="onCancelButton"
      />
    </base-material-card>

    <v-snackbar
      v-model="snackbar"
      color="error"
      label="error"
    >
      {{ snackText }}
    </v-snackbar>
  </v-container>
</template>

<script>
  import i18n from '@/i18n'
  import OptionsBottomTap from '@/views/container/components/core/OptionsBottomTap'

  const position = {
    id: null,
    name: null,
    description: null,
    status: null,
  }

  export default {
    name: 'PositionForm',
    components: {
      compOptionsBottomTap: OptionsBottomTap,
    },
    data: () => ({
      tabs: 0,
      itemData: {},
      snackbar: false,
      snackText: i18n.t('alert.fieldsNotFilled'),
      option: '',
      isSaveMode: false,
      position: Object.assign(position),
    }),
    computed: {
      getTitle () {
        if (this.option === 1) return i18n.t('positions.position-create')
        else if (this.option === 2) return i18n.t('positions.position-show')
        else if (this.option === 3) return i18n.t('positions.position-edit')
        else return i18n.t('positions.position')
      },
      getTitleButton: function () {
        if (this.option === 1) return i18n.t('crud.create')
        else if (this.option === 2) return i18n.t('crud.show')
        else if (this.option === 3) return i18n.t('crud.edit')
        else return i18n.t('positions.position')
      },
    },
    mounted () {
      this.initialize()
    },
    beforeDestroy: function () {
      this.onCancelButton()
    },
    methods: {
      back: function () {
        this.onCancelButton()
        this.$router.go(-1)
      },
      onBack () {
        this.$router.back()
      },
      initialize () {
        this.option = this.$route.params.option

        if (this.option === 1 || this.option === 3) {
          this.isSaveMode = true
        }
        this.position = Object.assign(position, this.$route.params.positionData)
      },
      onSave: async function () {
        // if (
        //   this.position.name !== null && this.position.description !== null && this.position.name !== '' && this.position.description !== ''
        // ) {
        //   console.log('xx')

        //   if (this.option === 1) {
        //     const responseData = await postPosition({
        //       name: this.position.name,
        //       description: this.position.description,
        //     })

        //     console.log(responseData)

        //     if (responseData.ok === 1) {
        //       this.$router.push({ name: 'Positions' })
        //       this.onCancelButton()
        //     } else {
        //       this.snackText = responseData.message.text
        //       this.snackbar = true
        //     }
        //   } else {
        //     const responseData = await putPosition(
        //       {
        //         name: this.position.name,
        //         description: this.position.description,
        //       },
        //       this.position.id
        //     )
        //     console.log(responseData)

        //     if (responseData.ok === 1) {
        //       this.$router.push({ name: 'Positions' })
        //       this.onCancelButton()
        //     } else {
        //       this.snackText = responseData.message.text
        //       this.snackbar = true
        //     }
        //   }
        // } else {
        //   this.snackbar = true
        //   this.snackText = i18n.t('alert.fieldsNotFilled')
        // }
      },
      onCancelButton: function () {
        this.position = Object.assign(this.position, {
          id: null,
          name: null,
          description: null,
          status: null,
        })
      },
    },
  }
</script>

<style></style>
