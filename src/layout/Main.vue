<script setup>
import { ref } from "vue";
import Hamburger from "../components/icons/Hamburger.vue";
import Dashboard from "../components/icons/Dashboard.vue";

const openDrawer = ref(false);
</script>

<template>
	<header class="uno-ibna21">
		<Hamburger class="uno-9nu97g" @click="openDrawer = true" />
	</header>

	<TransitionGroup
		enter-active-class="animate__animated animate__slideInRight"
		leave-active-class="animate__animated animate__slideOutRight"
	>
		<div
			v-if="openDrawer"
			@click="openDrawer = false"
			class="uno-4880tm"
		></div>
		<div
			v-if="openDrawer"
			class="uno-3ftmkt"
		>
			<div v-for="n in 100" :key="n" flex items-center>
				<Dashboard />
				<h6 class="uno-055jnt">{{ n }} داشبورد</h6>
			</div>
		</div>
	</TransitionGroup>
</template>

<style scoped></style>
