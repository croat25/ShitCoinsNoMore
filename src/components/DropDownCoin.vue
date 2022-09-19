<script>
import {
  VueCollapsiblePanelGroup,
  VueCollapsiblePanel,
} from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
import HistoricalChart from './HistoricalChart.vue'
</script>

<template>
    <vue-collapsible-panel-group>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            BTC Info
        </template>
        <template #content>
            <div>
              <HistoricalChart />

            </div>
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Panel B Title
        </template>
        <template #content>
            Panel B Content
        </template>
    </vue-collapsible-panel>
</vue-collapsible-panel-group>
</template>