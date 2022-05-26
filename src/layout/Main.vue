<script setup>
import { ref } from "vue";
import Hamburger from "../components/icons/Hamburger.vue";
import Dashboard from "../components/icons/Dashboard.vue";

const openDrawer = ref(false);
</script>

<template>
	<header class="bg-[#363636] py-1.7 px-3">
		<Hamburger class="cursor-pointer mt-1.2" @click="openDrawer = true" />
	</header>

	<TransitionGroup
		enter-active-class="animate__animated animate__slideInRight"
		leave-active-class="animate__animated animate__slideOutRight"
	>
		<div
			v-if="openDrawer"
			@click="openDrawer = false"
			class=":uno: fixed block top-0 left-0 w-100% h-100% bg-[rgba(0,0,0,0.5)] z-9999"
		></div>
		<div
			v-if="openDrawer"
			class="
				bg-[#363636]
				w-90%
				overflow-y-scroll
				h-full
				fixed
				top-0
				right-0
				z-9999
			"
		>
			<div v-for="n in 100" :key="n" flex items-center>
				<Dashboard />
				<h6 class="uno-055jnt">{{ n }} داشبورد</h6>
			</div>
		</div>
	</TransitionGroup>
</template>

<style scoped></style>
<!-- :uno: fixed block top-0 left-0 w-100% h-100% bg-[rgba(0,0,0,0.5)] z-9999 -->