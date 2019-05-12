Vue.component('dd-navbar', {
  data() {
    return {
      search: ''      
    };
  },
  
  template: `
  <div>
    <v-toolbar
      dense
      floating
      absolute
      color="grey lighten-3"
      scroll-off-screen
      scroll-target="#scrolling-techniques"
      style="border-radius:7px"
    >
      <v-toolbar-side-icon
        @click.stop="$emit('drawer')"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>Ramini-WP</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-text-field
        v-model="search"
        class="mx-3"
        flat
        label="Search"
        hide-details
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="green">notifications</v-icon>
      </v-btn>

      <v-btn @click="$emit('logout')" icon>
        <v-icon color="blue">exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </div>

  `
})