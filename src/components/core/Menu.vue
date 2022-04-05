<template>
  <!-- Drawer options
"app" means it can work together with app.vue
 -->
  <v-navigation-drawer app permanent>
    <!-- router-link look like a tage on html -->
    <router-link to="/" exact>
      <v-img src="@/assets/LAD trans....png" alt="" width="100%" />
    </router-link>
    <v-list shaped>
      <!-- Use item group for make it to remember and select automatic when drage cursor on the list -->
      <v-list-item-group v-model="selectMenu" mandatory color="primary">
        <!-- v-for is means the option that use for get the array into the list -->
        <!-- memus = the name of item list -->
        <v-list-item
          v-for="([icon, title, route], index) in menus"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon>
              {{ icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-areaspline", "Report", "/report"],
        ["mdi-man", "About", "/about"],
      ],
    };
  },
};
</script>

<style></style>
