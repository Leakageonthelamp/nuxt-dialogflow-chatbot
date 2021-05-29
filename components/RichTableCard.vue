<template>
  <div class="rich-table-card">
    <div class="rich-table-card-head">
      <div class="rich-table-info">
        <div v-if="title" class="rich-table-card-title">{{ title }}</div>
        <div v-if="subtitle" class="rich-table-card-subtitle">
          {{ subtitle }}
        </div>
      </div>
      <img
        v-if="imageUri"
        class="rich-table-card-image"
        :src="imageUri"
        :alt="imageTitle"
      />
    </div>
    <div class="rich-table-card-scrollable">
      <table class="rich-table-card-table" cellspacing="0" cellpadding="0">
        <tr>
          <th v-for="(head, head_id) in header" :key="head_id">
            {{ head.header }}
          </th>
        </tr>
        <tr v-for="(row, row_id) in rows" :key="row_id">
          <td v-for="(cell, cell_id) in row.cells" :key="cell_id">
            {{ cell.text }}
          </td>
        </tr>
      </table>
    </div>
    <div :class="{ 'rich-table-actions': $slots.default }"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: 'SubTitle',
    },
    imageUri: {
      type: String,
      default:
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
    },
    imageTitle: {
      type: String,
      default: 'image',
    },
    // header: {
    //   type: Array,
    //   default: null,
    // },
    // rows: {
    //   type: Array,
    //   default: null,
    // },
  },

  data: () => ({
    header: [
      {
        header: 'Head 1',
      },
      {
        header: 'Head 2',
      },
      {
        header: 'Head 3',
      },
    ],
    rows: [
      {
        cells: [
          {
            text: 'Row1',
          },
          {
            text: 'Row1',
          },
          {
            text: 'Row1',
          },
        ],
      },
      {
        cells: [
          {
            text: 'Row2',
          },
          {
            text: 'Row2',
          },
          {
            text: 'Row2',
          },
        ],
      },
      {
        cells: [
          {
            text: 'Row3',
          },
          {
            text: 'Row3',
          },
          {
            text: 'Row3',
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.rich-table-card {
  @apply p-4 rounded-xl bg-white shadow-lg;
  .rich-table-card-head {
    @apply flex mt-1 items-start;
    .rich-table-info {
      flex: 1;
      .rich-table-card-title {
        @apply text-xl leading-7;
      }
      .rich-table-card-subtitle {
        @apply leading-6 text-gray-400;
      }
    }
    .rich-table-card-image {
      @apply rounded-xl h-12 w-12 object-cover ml-4 float-right;
    }
  }

  .rich-table-card-scrollable {
    @apply whitespace-nowrap overflow-scroll;
    .rich-table-card-table {
      @apply w-full pb-4;
      th {
        font-weight: inherit;
        @apply text-left pt-2 pb-2 border-b text-sm text-gray-400;
      }
      td {
        @apply pt-4 pb-4 border-b text-sm;
      }
      tr:last-child td {
        @apply pb-0 border-b-0;
      }
    }
  }

  .rich-table-actions {
    @apply pt-4;
  }
}
</style>
