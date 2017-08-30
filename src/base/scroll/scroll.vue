<template>
	<div ref="scroll">
		<slot></slot>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
	props: {
		data: {
			type: Array,
			default: null
		},
		probeType: {
			type: Number,
			default: 1
		},
		click: {
			type: Boolean,
			default: true
		}
	},
	mounted() {
		setTimeout(() => {
			this._initScroll();
		}, 20);
	},
	methods: {
		//初始化better-scroll
		_initScroll() {
			if (!this.$refs.scroll) {
				return
			}
			this.scroll = new BScroll(this.$refs.scroll, {
				probeType: this.probeType,
				click: this.click
			})
		},
		disable() {
			this.scroll && this.scroll.disable()
		},
		enable() {
			this.scroll && this.scroll.enable()
		},
		refresh() {
			this.scroll && this.scroll.refresh()
		}
	},
	watch: {
		data() {
			this.$nextTick(() => {
				this.refresh();
			})
		}
	}
}
</script>
