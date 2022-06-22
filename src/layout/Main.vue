<script setup>
const icon = ref({
	header: ['i-carbon-logo-github', 'i-carbon-bullhorn', 'i-carbon-user-avatar'],
	dashboard: [
		{
			title: 'داشبورد',
			icon: 'i-carbon-dashboard',
			link: '/'
		},
		{
			title: 'داشبورد CRM',
			icon: 'i-carbon-dashboard-reference',
			link: '/crm'
		}
	],
	page: [
		{
			title: 'ورود',
			icon: 'i-carbon-login',
			link: '/login'
		},
		{
			title: 'قفل صفحه',
			icon: 'i-carbon-locked',
			link: '/lock'
		},
		{
			title: 'قفل صفحه ۲',
			icon: 'i-carbon-unlocked',
			link: '/lock-2'
		},
		{
			title: 'قیمت‌ها',
			icon: 'i-carbon-data-definition',
			link: '/pricing'
		},
		{
			title: 'پروفایل کاربر',
			icon: 'i-carbon-user-profile',
			link: '/profile'
		},
		{
			title: 'نگهداری',
			icon: 'i-carbon-license-maintenance',
			link: '/maintenance'
		}
	],
	map: {
		parent: {
			title: 'نقشه‌ها',
			icon: 'i-carbon-map',
			arrow: 'i-carbon-caret-down'
		},
		child: [
			{
				title: 'نقشه',
				icon: 'i-carbon-map-center',
				link: '#',
			},
			{
				title: 'نقشه‌ساز',
				icon: 'i-carbon-map-identify',
				link: '#',
			},
			{
				title: 'نمای خیابان',
				icon: 'i-carbon-map-boundary',
				link: '#'
			}
		]
	},
	rest: [
		{
			title: 'ایمیل',
			icon: 'i-carbon-email',
			link: '#'
		},
		{
			title: 'جدول درختی',
			icon: 'i-carbon-table-built',
			link: '#'
		},
		{
			title: 'نمودار',
			icon: 'i-carbon-chart-error-bar',
			link: '#'
		},
		{
			title: 'مخاطبین',
			icon: 'i-carbon-connect',
			link: '#'
		},
		{
			title: 'تسویه حساب',
			icon: 'i-carbon-wireless-checkout',
			link: '#'
		},
		{
			title: 'تقویم',
			icon: 'i-carbon-calendar',
			link: '#'
		},
		{
			title: 'وظایف',
			icon: 'i-carbon-checkmark',
			link: '#'
		},
		{
			title: 'صفحه بندی',
			icon: 'i-carbon-application',
			link: '/pagination'
		},
		{
			title: 'کاتالوگ محصولات',
			icon: 'i-carbon-catalog',
			link: '/products'
		}
	],
})

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

const duration = ref(0)
const windowWidth = ref(null)
const checkScreen = () => {
	windowWidth.value = window.innerWidth
	if (windowWidth.value >= 1024) {
		openDrawer.value = true
		duration.value = 0.5
	} else {
		openDrawer.value = false
		duration.value = 1000
	}
}
onMounted(() => {
	if (window.innerWidth >= 1024) {
		openDrawer.value = true
	}

	window.addEventListener('resize', checkScreen)
	checkScreen()
})
</script>

<template>
	<div lg="evfx87">
		<div lg="pufms">
			<header class="x468wv">
				<div @click="openDrawer = !openDrawer" class="c2v3ev lg:hidden">
					<div i-carbon-menu text-6 />
				</div>

				<div class="c2v3ev hidden lg:block">
					<div i-carbon-search text-6 />
				</div>
				<div class="kagvzm">
					<div class="c2v3ev" v-for="icon in icon.header" :key="icon">
						<div :class="icon" text-7 />
					</div>
				</div>
			</header>

			<RouterView />
		</div>

		<Transition enter-active-class="animate__animated animate__fadeIn"
			leave-active-class="animate__animated animate__fadeOut">
			<!-- BG -->
			<div v-if="openDrawer" @click="openDrawer = false" class="tm4880"></div>
		</Transition>
		<!-- DRAWER -->
		<TransitionGroup :duration="duration" enter-active-class="animate__animated animate__slideInRight"
			leave-active-class="animate__animated animate__slideOutRight">
			<!-- SIDENAV -->
			<div v-if="openDrawer" class="f3tmkt">
				<!-- HEADER -->
				<div mb-2>
					<div class="us22lg">
						<h3 class="o0bw2y">پنل مدیریت</h3>
						<h3 class="puuac8">DE
						</h3>
					</div>

					<div class="rzgqts">
						<img src="../assets/images/Dellkesh.jpeg" alt="Me" class="d029z3l">
						<h5 class="uno-hiqyu">امید دلکش</h5>
					</div>
				</div>
				<!-- DASHBOARD ICONS -->
				<router-link v-for="dashboard in icon.dashboard" :key="dashboard" :to="dashboard.link"
					@click="openDrawer = false" class="a02nz2">
					<div :class="dashboard.icon" class="rq0ho8 " />
					<h6 class="ut4ofj">{{ dashboard.title }}</h6>
				</router-link>

				<router-link v-for="dashboard in icon.dashboard" :key="dashboard" :to="dashboard.link" class="mt808z">
					<div :class="dashboard.icon" class="rq0ho8" />
					<h6 class="ut4ofj">{{ dashboard.title }}</h6>
				</router-link>

				<!-- PAGE ICONS -->
				<button @click="page = !page" class="c31cid">
					<div class="rq0ho8 i-carbon-shape-except" />
					<h6 class="ut4ofj">صفحه‌ها</h6>
					<div class="i-carbon-chevron-down t9q27" :class="page === true ? 'rotate-180' : ''" />
				</button>
				<!-- child -->
				<Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
					<div v-show="page" mr-7>
						<router-link v-for="page in icon.page.slice(0, 4)" :key="page" :to="page.link" @click="openDrawer = false"
							class="a02nz2">
							<div :class="page.icon" class="rq0ho8" />
							<h6 class="ut4ofj">{{ page.title }}</h6>
						</router-link>

						<router-link v-for="page in icon.page.slice(0, 4)" :key="page" :to="page.link" class="mt808z">
							<div :class="page.icon" class="rq0ho8" />
							<h6 class="ut4ofj">{{ page.title }}</h6>
						</router-link>

						<h5 class="uno-4vvqbz">عمومی</h5>
						<router-link v-for="page in icon.page.slice(4, 6)" :key="page" :to="page.link" @click="openDrawer = false"
							class="a02nz2">
							<div :class="page.icon" class="rq0ho8" />
							<h6 class="ut4ofj">{{ page.title }}</h6>
						</router-link>

						<router-link v-for="page in icon.page.slice(4, 6)" :key="page" :to="page.link" class="mt808z">
							<div :class="page.icon" class="rq0ho8" />
							<h6 class="ut4ofj">{{ page.title }}</h6>
						</router-link>
					</div>
				</Transition>

				<!-- MAP ICONS -->
				<button @click="map = !map" class="c31cid">
					<div class="rq0ho8 i-carbon-map" />
					<h6 class="ut4ofj">نقشه‌ها</h6>
					<div class="i-carbon-chevron-down t9q27 !mr-49.2%" :class="map === true ? 'rotate-180' : ''" />
				</button>
				<!-- child -->
				<Transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
					<div v-if="map" mr-7>
						<router-link v-for="map in icon.map.child" :key="map" :to="map.link" @click="openDrawer = false"
							class="a02nz2">
							<div :class="map.icon" class="rq0ho8" />
							<h6 class="ut4ofj">{{ map.title }}</h6>
						</router-link>

						<router-link v-for="map in icon.map.child" :key="map" :to="map.link" class="mt808z">
							<div :class="map.icon" class="rq0ho8" />
							<h6 class="ut4ofj">{{ map.title }}</h6>
						</router-link>
					</div>
				</Transition>

				<!-- REST OF ICONS -->
				<router-link v-for="icon in icon.rest" :key="icon" :to="icon.link" @click="openDrawer = false" class="a02nz2">
					<div :class="icon.icon" class="rq0ho8" />
					<h6 class="ut4ofj">{{ icon.title }}</h6>
				</router-link>

				<router-link v-for="icon in icon.rest" :key="icon" :to="icon.link" class="mt808z">
					<div :class="icon.icon" class="rq0ho8" />
					<h6 class="ut4ofj">{{ icon.title }}</h6>
				</router-link>
			</div>
		</TransitionGroup>
	</div>
</template>

<style scoped>
.x468wv {
	--un-bg-opacity: 1;
	background-color: rgba(54, 54, 54, var(--un-bg-opacity));
	position: sticky;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}

.c2v3ev {
	--at-apply: "filter-invert-100";
	cursor: pointer;
	border-radius: 9999px;
	padding: 0.5rem;
	transition-duration: 250ms;
}

.c2v3ev:hover {
	--un-bg-opacity: 1;
	background-color: rgba(156, 163, 175, var(--un-bg-opacity));
}

.kagvzm {
	display: flex;
}

.kagvzm div:nth-child(2) {
	margin: 0 .3rem;
}

.kagvzm div:nth-child(2) div {
	color: #04fbe4;
}

.kagvzm div:nth-child(3) div {
	color: #2934d1;
}

.tm4880 {
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

.f3tmkt {
	position: fixed;
	top: 0rem;
	right: 0rem;
	z-index: 9999;
	width: 260px;
	height: 100%;
	overflow-y: scroll;
	padding-bottom: .8rem;
	--un-bg-opacity: 1;
	background-color: rgba(54, 54, 54, var(--un-bg-opacity));
}

.us22lg {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
}

.o0bw2y {
	font-weight: 300;
	--un-text-opacity: 1;
	color: rgba(255, 255, 255, var(--un-text-opacity));
}

.uno-hiqyu {
	margin-right: 1.5rem;
	letter-spacing: 0.08em;
	--un-text-opacity: 1;
	color: rgba(255, 255, 255, var(--un-text-opacity));
}

.puuac8 {
	font-family: 'Courier New', Courier, monospace;
	border-radius: 9999px;
	--un-bg-opacity: 1;
	background-color: rgba(243, 244, 246, var(--un-bg-opacity));
	padding: 0.5rem;
	font-weight: 200;
	--un-shadow-opacity: 1;
	--un-shadow-color: rgba(255, 255, 255, var(--un-shadow-opacity));
}

.rzgqts {
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

.d029z3l {
	--at-apply: "shadow-lg";
	margin-right: 0.75rem;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 9999px;
	object-fit: cover;
	--un-shadow: var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgba(0, 0, 0, 0.1)), var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
	box-shadow: var(--un-ring-offset-shadow, 0 0 #0000), var(--un-ring-shadow, 0 0 #0000), var(--un-shadow);
}

.rq0ho8 {
	--at-apply: "filter-invert-100";
	font-size: 1.4rem;
	cursor: pointer;
	--un-invert: invert(1);
	filter: var(--un-filter);
}

.t9q27 {
	--at-apply: "!filter-invert-50 duration-320";
	font-size: 1rem;
	margin-right: 46%;
	cursor: pointer;
	--un-invert: invert(1);
	filter: var(--un-filter);
}

.a02nz2 {
	display: flex;
	align-items: center;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 0.875rem;
	padding-right: 0.875rem;
	transition-duration: 250ms;
}

.a02nz2:hover {
	--un-bg-opacity: 1;
	background-color: rgba(48, 48, 48, var(--un-bg-opacity));
}

.mt808z {
	display: none;
	align-items: center;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 0.875rem;
	padding-right: 0.875rem;
	transition-duration: 250ms;
}

.mt808z:hover {
	--un-bg-opacity: 1;
	background-color: rgba(48, 48, 48, var(--un-bg-opacity));
}


.c31cid {
	width: 100%;
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 0.875rem;
	padding-right: 0.875rem;
	transition-duration: 250ms;
}

.c31cid:focus {
	outline: 2px solid transparent;
	outline-offset: 2px;
}

.c31cid:hover {
	--un-bg-opacity: 1;
	background-color: rgba(48, 48, 48, var(--un-bg-opacity));
}

.ut4ofj {
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

@media (min-width: 1024px) {
	[lg~="evfx87"] {
		display: flex;
		align-items: flex-start;
	}

	[lg~="pufms"] {
		order: 1;
		margin-right: 260px;
		flex: 1 1 0%;
	}

	.tm4880 {
		display: none;
	}

	.a02nz2 {
		display: none;
	}

	.mt808z {
		display: flex;
	}

}
</style>
