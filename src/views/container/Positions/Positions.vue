<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="mdi-account-badge-horizontal-outline"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          {{ $t("positions.positions") }}
        </div>
      </template>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        :label="$t('search')"
        hide-details
        single-line
        style="max-width: 250px;"
      />

      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="positions"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
        class="elevation-1 text-right"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn
            :key="1"
            color="blue"
            fab
            class="px-1 ml-1"
            x-small
            @click="onShowPosition(item)"
          >
            <v-icon
              small
              v-text="'mdi-eye'"
            />
          </v-btn>
          <v-btn
            :key="2"
            color="primary"
            fab
            class="px-1 ml-1"
            x-small
            @click="onEditPosition(item)"
          >
            <v-icon
              small
              v-text="'mdi-pencil'"
            />
          </v-btn>
          <v-btn
            :key="3"
            color="secondary"
            fab
            class="px-1 ml-1"
            x-small
            @click="dialog = true"
          >
            <v-icon
              small
              v-text="'mdi-delete'"
            />
          </v-btn>
        </template>
      </v-data-table>

      <v-fab-transition>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              color="secondary"
              dark
              absolute
              bottom
              right
              fab
              @click="onCreatePosition"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>{{ $t("positions.add") }}</span>
        </v-tooltip>
      </v-fab-transition>
    </base-material-card>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          {{ $t("delete.title") }}
        </v-card-title>

        <v-card-text class="text-center">
          {{ $t("delete.confirm") }}
        </v-card-text>
        <v-card-actions class="text-center">
          <v-spacer />
          <v-btn
            text
            color="green darken-1"
            @click="dialog = false"
          >
            {{ $t("no") }}
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            {{ $t("yes") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import i18n from '@/i18n'

  const position = {
    id: null,
    name: null,
    description: null,
    status: null,
  }

  export default {
    data: () => ({
      search: '',
      dialog: false,
      itemSelected: Object.assign(position),
      actions: [
        {
          color: 'info',
          icon: 'mdi-information-outline',
          router: 'kitchens-show',
        },
        {
          color: 'success',
          icon: 'mdi-pencil',
          router: 'kitchens-edit',
        },
        {
          color: 'error',
          icon: 'mdi-close',
        },
      ],
      headers: [
        // Por definir
        {
          text: 'id',
          value: 'id',
        },
        {
          text: i18n.t('positions.name'),
          value: 'name',
        },
        {
          text: i18n.t('positions.description'),
          value: 'description',
        },
        {
          sortable: false,
          text: i18n.t('positions.actions'),
          value: 'actions',
          align: 'right',
        },
      ],
      positions: [
        { id: '01', name: 'Administrador', description: 'Acceso Alto' },
      ],
      fab: null,
      hidden: false,
      tabs: 'one',
    }),
    computed: {},
    mounted: async function () {

    },
    methods: {
      onCreatePosition () {
        this.$router.push({
          name: 'PositionForm',
          params: {
            option: 1, // option 1 to create
          },
        })
      },
      onShowPosition (item) {
        this.$router.push({
          name: 'PositionForm',
          params: {
            option: 2, // option 2 to show
            positionData: item,
          },
        })
      },
      onEditPosition (item) {
        this.$router.push({
          name: 'PositionForm',
          params: {
            option: 3, // option 2 to edit
            positionData: item,
          },
        })
      },
      onDeletePosition (item) {
        console.log('Delete:', item)
      },
    },
  }
</script>

<style>
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>
