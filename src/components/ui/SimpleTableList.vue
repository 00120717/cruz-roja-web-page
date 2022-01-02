<template>
  <div
    class="flex flex-col overflow-x-auto"
    style="overflow-y: hidden"
    :class="[paddingOff ? 'padding-bottom: 0rem' : 'padding-bottom: 8rem']"
  >
    <div class="py-2 -my-2">
      <div
        class="relative inline-block min-w-full align-middle bg-white border border-gray-100 shadow sm:rounded-lg"
      >
        <table class="min-w-full overflow-x-scroll">
          <thead>
          <tr>
<!--            <th class="border-b border-gray-200 bg-gray-50" />-->
            <th
              v-for="(header, index) in headers"
              :key="index"
              class="px-6 py-3 border-b border-gray-200 bg-gray-50"
            >
            <button
                class="flex items-center text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase focus:outline-none"
                :class="{ 'cursor-not-allowed': !header.sort }"
                :disabled="!header.sort"
                @click="sortHeader(header)"
              >
                {{ header.name }}
                <svg
                  v-show="header.sort"
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </th>
            <th class="border-b border-gray-200 bg-gray-50" />
          </tr>
          </thead>
          <tbody>
          <slot name="items" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop,
} from 'vue-property-decorator';

interface Header {
  name: string;
  key: string;
  sort: boolean;
}

@Component({
  components: {
  },
})
export default class SimpleTableList extends Vue {
  @Prop() paddingOff!: boolean
  @Prop(Array) readonly headers!: Array<object>
}
</script>
