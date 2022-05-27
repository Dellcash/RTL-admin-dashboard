<script setup>
import { ref } from "vue"
import { icons } from "../stores/data";
import { RouterView } from "vue-router";

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
		<img @click="openDrawer = true" :src="icons.hamburger" class="uno-rq0ho8 mb-.7">
		<div class="mt-1.5">
			<img :src="icons.github.icon" class="uno-rq0ho8 uno-2cv3ev">
			<img :src="icons.bell.icon" class="uno-rq0ho8 mx-3 uno-2cv3ev">
			<img :src="icons.avatar.icon" class="uno-rq0ho8 uno-2cv3ev">
		</div>
	</header>

	<Transition enter-active-class="animate__animated animate__fadeIn"
		leave-active-class="animate__animated animate__fadeOut">
		<!-- BG -->
		<div v-if="openDrawer" @click="openDrawer = false" class="uno-4880tm "></div>
	</Transition>
	<!-- DRAWER -->
	<TransitionGroup enter-active-class="animate__animated animate__slideInRight"
		leave-active-class="animate__animated animate__slideOutRight">
		<!-- SIDENAV -->
		<div v-if="openDrawer" class="uno-3ftmkt">
			<!-- HEADER -->
			<div mb-2>
				<div class="uno-us22lg">
					<h3 class="uno-0obw2y">پنل مدیریت</h3>
					<h3 class="uno-puuac8">DE
					</h3>
				</div>

				<div class="uno-rzgqts">
					<img src="../assets/images/Dellkesh.jpeg" alt="Me" class="uno-029z3l shadow-lg">
					<h5 class="uno-0obw2y mr-6">امید دلکش</h5>
				</div>
			</div>
			<!-- DASHBOARD ICONS -->
			<router-link v-for="dashboard in icons.dashboard" :key="dashboard" :to="dashboard.link"
				@click="openDrawer = false" class="uno-a02nz2">
				<img :src="dashboard.icon" class="uno-rq0ho8" />
				<h6 class="uno-ut4ofj">{{ dashboard.title }}</h6>
			</router-link>

			<!-- PAGE ICONS -->
			<button @click="page = !page" class="uno-a02nz2 uno-3c1cid">
				<img :src="icons.page.parent.icon" class="uno-rq0ho8">
				<h6 class="uno-ut4ofj">{{ icons.page.parent.title }}</h6>
				<img :src="icons.arrow" class="uno-rq0ho8 mr-1/2 !filter-invert-50"
					:class="page === true ? 'rotate-180 duration-300' : 'duration-250'">
			</button>
			<!-- child -->
			<Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
				<div v-show="page" mr-7>
					<router-link v-for="page in icons.page.child.slice(0, 4)" :key="page" :to="page.link"
						@click="openDrawer = false" class="uno-a02nz2">
						<img :src="page.icon" class="uno-rq0ho8" />
						<h6 class="uno-ut4ofj">{{ page.title }}</h6>
					</router-link>
					<h5 class="uno-4vvqbz">عمومی</h5>
					<router-link v-for="page in icons.page.child.slice(4, 6)" :key="page" :to="page.link"
						@click="openDrawer = false" class="uno-a02nz2">
						<img :src="page.icon" class="uno-rq0ho8" />
						<h6 class="uno-ut4ofj">{{ page.title }}</h6>
					</router-link>
				</div>
			</Transition>

			<!-- MAP ICONS -->
			<button @click="map = !map" class="uno-a02nz2 uno-3c1cid">
				<img :src="icons.map.parent.icon" class="uno-rq0ho8">
				<h6 class="uno-ut4ofj ml-1.3">{{ icons.map.parent.title }}</h6>
				<img :src="icons.arrow" class="uno-rq0ho8 mr-1/2 !filter-invert-50"
					:class="map === true ? 'rotate-180 duration-300' : 'duration-250'">
			</button>
			<!-- child -->
			<Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
				<div v-if="map" mr-7>
					<router-link v-for="map in icons.map.child" :key="map" :to="map.link" @click="openDrawer = false"
						class="uno-a02nz2">
						<img :src="map.icon" class="uno-rq0ho8" />
						<h6 class="uno-ut4ofj">{{ map.title }}</h6>
					</router-link>
				</div>
			</Transition>

			<!-- REST OF ICONS -->
			<router-link v-for="icon in icons.rest" :key="icon" :to="icon.link" @click="openDrawer = false"
				class="uno-a02nz2">
				<img :src="icon.icon" class="uno-rq0ho8" />
				<h6 class="uno-ut4ofj">{{ icon.title }}</h6>
			</router-link>
		</div>
	</TransitionGroup>

	<RouterView />
</template>

<style scoped>
.uno-x468wv {
	--un-bg-opacity: 1;
	background-color: rgba(54, 54, 54, var(--un-bg-opacity));
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
}

.uno-2cv3ev {
	width: 2.5rem !important;
	border-radius: 9999px;
	padding: 0.5rem;
	transition-duration: 250ms;
}

.uno-2cv3ev:hover {
	--un-bg-opacity: 1;
	background-color: rgba(156, 163, 175, var(--un-bg-opacity));
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
	padding-bottom: .8rem;
	--un-bg-opacity: 1;
	background-color: rgba(54, 54, 54, var(--un-bg-opacity));
}

.uno-us22lg {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
}

.uno-0obw2y {
	font-weight: 300;
	--un-text-opacity: 1;
	color: rgba(255, 255, 255, var(--un-text-opacity));
}

.uno-puuac8 {
	font-family: 'Courier New', Courier, monospace;
	border-radius: 9999px;
	--un-bg-opacity: 1;
	background-color: rgba(243, 244, 246, var(--un-bg-opacity));
	padding: 0.5rem;
	font-weight: 200;
	--un-shadow-opacity: 1;
	--un-shadow-color: rgba(255, 255, 255, var(--un-shadow-opacity));
}

.uno-rzgqts {
	display: flex;
	align-items: center;
	border-top-width: 1px;
	border-top-style: solid;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	--un-border-opacity: 1;
	border-color: rgba(75, 85, 99, var(--un-border-opacity));
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}

.uno-029z3l {
	margin-right: 0.75rem;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 9999px;
	object-fit: cover;
	--un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
	box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
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

.uno-3c1cid {
	width: 100%;
	font-size: 1.1rem;
}

.uno-3c1cid:focus {
	outline: 2px solid transparent;
	outline-offset: 2px;
}


.uno-ut4ofj {
	margin-right: 2rem;
	font-weight: 100;
	--un-text-opacity: 1;
	color: rgba(255, 255, 255, var(--un-text-opacity));
}

.uno-4vvqbz {
	margin: .8rem;
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
