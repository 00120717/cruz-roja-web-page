<template>
<div>
  <h1>{{ id }}</h1>
  <h2>{{ fechaInicio }}</h2>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  id = 0
  fechaInicio = ''

  mounted() {
    this.id = +this.$route.params.id;
    this.fechaInicio = this.$route.params.fechaInicio;
  }
}
</script>
