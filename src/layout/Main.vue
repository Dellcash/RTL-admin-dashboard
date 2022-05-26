<script setup>
import { ref } from "vue"
import { icons } from "../stores/data";

const openDrawer = ref(false)
const page = ref(false)
const map = ref(false)

const enter = (el) => {
	el.style.height = 'auto'
	const height = getComputedStyle(el).height
	el.style.height = 0

	getComputedStyle(el)
	setTimeout(() => {
		el.style.height = height
	});
}
const afterEnter = (el) => {
	el.style.height = 'auto'
}
const leave = (el) => {
	el.style.height = getComputedStyle(el).height
	getComputedStyle(el)
	setTimeout(() => {
		el.style.height = 0
	});
}
</script>

<template>
	<header class="uno-x468wv">
		<img @click="openDrawer = true" src="https://api.iconify.design/ci:hamburger.svg" class="uno-rq0ho8 mt-1.2">
	</header>

	<!-- DRAWER -->
	<TransitionGroup enter-active-class="animate__animated animate__slideInRight"
		leave-active-class="animate__animated animate__slideOutRight">
		<!-- BG -->
		<div v-if="openDrawer" @click="openDrawer = false" class="uno-4880tm"></div>
		<!-- SIDENAV -->
		<div v-if="!openDrawer" class="uno-3ftmkt">
			<!-- DASHBOARD ICONS -->
			<router-link v-for="dashboard in icons.dashboard" :key="dashboard" :to="dashboard.link" class="uno-a02nz2">
				<img :src="dashboard.icon" class="uno-rq0ho8" />
				<h6 class="uno-ut4ofj">{{ dashboard.title }}</h6>
			</router-link>

			<!-- PAGE ICONS -->
			<button @click="page = !page" class="uno-a02nz2 w-full text-1.1rem">
				<img :src="icons.page.parent.icon" class="uno-rq0ho8" filter-invert-100>
				<h6 class="uno-ut4ofj">{{ icons.page.parent.title }}</h6>
				<img :src="icons.arrow" class="uno-rq0ho8 mr-1/2" :class="page === true ? 'rotate-180 duration-250' : ''">
			</button>
			<!-- child -->
			<Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
				<div v-show="page" mr-7>
					<router-link v-for="page in icons.page.child.slice(0, 4)" :key="page" :to="page.link" class="uno-a02nz2">
						<img :src="page.icon" class="uno-rq0ho8" />
						<h6 class="uno-ut4ofj">{{ page.title }}</h6>
					</router-link>
					<h5 class="uno-4vvqbz">عمومی</h5>
					<router-link v-for="page in icons.page.child.slice(4, 6)" :key="page" :to="page.link" class="uno-a02nz2">
						<img :src="page.icon" class="uno-rq0ho8" />
						<h6 class="uno-ut4ofj">{{ page.title }}</h6>
					</router-link>
				</div>
			</Transition>

			<!-- MAP ICONS -->
			<button @click="map = !map" class="uno-a02nz2 w-full text-1.1rem">
				<img :src="icons.map.parent.icon" class="uno-rq0ho8" filter-invert-100>
				<h6 class="uno-ut4ofj ml-1.3">{{ icons.map.parent.title }}</h6>
				<img :src="icons.arrow" class="uno-rq0ho8 mr-1/2" :class="map === true ? 'rotate-180 duration-250' : ''">
			</button>
			<!-- child -->
			<Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
				<div v-if="map" mr-7>
					<router-link v-for="map in icons.map.child" :key="map" :to="map.link" class="uno-a02nz2">
						<img :src="map.icon" class="uno-rq0ho8" />
						<h6 class="uno-ut4ofj">{{ map.title }}</h6>
					</router-link>
				</div>
			</Transition>
		</div>
	</TransitionGroup>
</template>

<style scoped>
.uno-x468wv {
	--un-bg-opacity: 1;
	background-color: rgba(54, 54, 54, var(--un-bg-opacity));
	padding-top: 0.425rem;
	padding-bottom: 0.425rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
}

.uno-4880tm {
	position: fixed;
	top: 0rem;
	left: 0rem;
	z-index: 9999;
	display: block;
	width: 100%;
	height: 100%;
	--un-bg-opacity: 0.5;
	background-color: rgba(0, 0, 0, var(--un-bg-opacity));
}

.uno-3ftmkt {
	position: fixed;
	top: 0rem;
	right: 0rem;
	z-index: 9999;
	width: 90%;
	height: 100%;
	overflow-y: scroll;
	--un-bg-opacity: 1;
	background-color: rgba(54, 54, 54, var(--un-bg-opacity));
}

.uno-rq0ho8 {
	--at-apply: "filter-invert-100";
	width: 1.5rem;
	cursor: pointer;
	--un-invert: invert(1);
	filter: var(--un-filter);
}

.uno-a02nz2 {
	display: flex;
	align-items: center;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 0.875rem;
	padding-right: 0.875rem;
	transition-duration: 250ms;
}

.uno-a02nz2:hover {
	--un-bg-opacity: 1;
	background-color: rgba(48, 48, 48, var(--un-bg-opacity));
}

.uno-ut4ofj {
	margin-right: 2rem;
	font-weight: 100;
	--un-text-opacity: 1;
	color: rgba(255, 255, 255, var(--un-text-opacity));
}

.uno-4vvqbz {
	margin: 1rem;
	letter-spacing: -0.05em;
	--un-text-opacity: 1;
	color: rgba(255, 255, 255, var(--un-text-opacity));
}

.expand-enter-active,
.expand-leave-active {
	transition: height .25s ease-in-out;
	overflow: hidden;
}
</style>
