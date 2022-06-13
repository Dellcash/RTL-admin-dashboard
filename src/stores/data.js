import { reactive } from 'vue'

export const icons = {
  hamburger: 'https://api.iconify.design/ci:hamburger.svg',
  github: {
    icon: 'https://api.iconify.design/akar-icons:github-fill.svg',
    link: 'https://github.com/Dellcash',
  },
  bell: {
    icon: 'https://api.iconify.design/clarity:bell-solid.svg',
    link: '#'
  },
  avatar: {
    icon: 'https://api.iconify.design/icon-park:avatar.svg',
    link: '#'
  },
  dashboard: [
    {
      title: 'داشبورد',
      icon: 'https://api.iconify.design/material-symbols:dashboard.svg',
      link: '/'
    },
    {
      title: 'داشبورد CRM',
      icon: 'https://api.iconify.design/material-symbols:dashboard-customize.svg',
      link: '/crm'
    }],
  page: {
    parent: {
      title: 'صفحه‌ها',
      icon: 'https://api.iconify.design/ic:sharp-pages.svg',
    },
    child: [
      {
        title: 'ورود',
        icon: 'https://api.iconify.design/ri:login-box-fill.svg',
        link: '/login'
      },
      {
        title: 'قفل صفحه',
        icon: 'https://api.iconify.design/material-symbols:lock-clock.svg',
        link: '/lock'
      },
      {
        title: 'قفل صفحه ۲',
        icon: 'https://api.iconify.design/material-symbols:lock-person.svg',
        link: '/lock-2'
      },
      {
        title: 'قیمت‌ها',
        icon: 'https://api.iconify.design/ic:baseline-local-offer.svg',
        link: '/pricing'
      },
      {
        title: 'پروفایل کاربر',
        icon: 'https://api.iconify.design/carbon:user-filled.svg',
        link: '/profile'
      },
      {
        title: 'نگهداری',
        icon: 'https://api.iconify.design/carbon:license-maintenance.svg',
        link: '/maintenance'
      }
    ]
  },
  map: {
    parent: {
      title: 'نقشه‌ها',
      icon: 'https://api.iconify.design/material-symbols:map.svg',
    },
    child: [
      {
        title: 'نقشه',
        icon: 'https://api.iconify.design/carbon:map-center.svg',
        link: '#',
      },
      {
        title: 'نقشه‌ساز',
        icon: 'https://api.iconify.design/ph:map-pin-fill.svg',
        link: '#',
      },
      {
        title: 'نمای خیابان',
        icon: 'https://api.iconify.design/bx:street-view.svg',
        link: '#'
      }
    ]
  },
  arrow: 'https://api.iconify.design/ic:sharp-keyboard-arrow-down.svg',
  rest: [
    {
      title: 'ایمیل',
      icon: 'https://api.iconify.design/material-symbols:mail-rounded.svg',
      link: '#'
    },
    {
      title: 'جدول درختی',
      icon: 'https://api.iconify.design/material-symbols:backup-table.svg',
      link: '#'
    },
    {
      title: 'نمودار',
      icon: 'https://api.iconify.design/material-symbols:bar-chart.svg',
      link: '#'
    },
    {
      title: 'مخاطبین',
      icon: 'https://api.iconify.design/material-symbols:contact-mail.svg',
      link: '#'
    },
    {
      title: 'تسویه حساب',
      icon: 'https://api.iconify.design/carbon:wireless-checkout.svg',
      link: '#'
    },
    {
      title: 'تقویم',
      icon: 'https://api.iconify.design/material-symbols:calendar-month.svg',
      link: '#'
    },
    {
      title: 'وظایف',
      icon: 'https://api.iconify.design/ic:baseline-check.svg',
      link: '#'
    },
    {
      title: 'صفحه بندی',
      icon: 'https://api.iconify.design/fluent:dual-screen-pagination-20-filled.svg',
      link: '#'
    },
    {
      title: 'کاتالوگ محصولات',
      icon: 'https://api.iconify.design/carbon:catalog.svg',
      link: '/products'
    }
  ],
  tabs: {
    contact: 'https://api.iconify.design/material-symbols:contact-phone-sharp.svg',
    message: 'https://api.iconify.design/ic:round-message.svg',
    notification: 'https://api.iconify.design/material-symbols:notifications.svg',
    phone: 'https://api.iconify.design/flat-color-icons:phone.svg',
    notificationTab: [
      {
        title: 'آواتار اعلان',
        icon: 'https://api.iconify.design/material-symbols:notification-important-rounded.svg',
      },
      {
        title: 'آواتار اعلان',
        icon: 'https://api.iconify.design/material-symbols:notifications-active.svg',
      },
      {
        title: 'آواتار اعلان',
        icon: 'https://api.iconify.design/material-symbols:notification-add-sharp.svg',
      },
      {
        title: 'آواتار اعلان',
        icon: 'https://api.iconify.design/ic:round-edit-notifications.svg',
      },
    ]
  },
  todo: [
    'https://api.iconify.design/ri:calendar-todo-fill.svg',
    'https://api.iconify.design/ic:baseline-message.svg'
  ],
  timeLine: {
    clock: 'https://api.iconify.design/ic:sharp-access-time.svg',
  },
  search: 'https://api.iconify.design/material-symbols:search.svg',
  arrowDown: 'https://api.iconify.design/ic:sharp-arrow-drop-down.svg',
  chart: 'https://api.iconify.design/ph:chart-line-bold.svg',
  basket: 'https://api.iconify.design/bi:basket2-fill.svg',
  eye: 'https://api.iconify.design/iconoir:eye-empty.svg',
  eyeOff: 'https://api.iconify.design/iconoir:eye-off.svg',
  maintenance: [
    'https://api.iconify.design/wpf:maintenance.svg',
    'https://api.iconify.design/mdi:alert.svg'
  ],
  plus: 'https://api.iconify.design/ic:outline-plus.svg',
  minus: 'https://api.iconify.design/ic:baseline-minus.svg',
  addToCart: 'https://api.iconify.design/fontisto:shopping-basket-add.svg'
}

export const cardSocial = [
  {
    icon: 'https://api.iconify.design/ri:user-6-fill.svg',
    number: '۲۰۰',
    title: 'اکانت من'
  },
  {
    icon: 'https://api.iconify.design/mdi:twitter.svg',
    number: '۵۰۰',
    title: 'دنبال کننده'
  },
  {
    icon: 'https://api.iconify.design/ion:logo-linkedin.svg',
    number: '۶۴۰',
    title: 'رابط'
  },
  {
    icon: 'https://api.iconify.design/material-symbols:bar-chart.svg',
    number: '۱۹۵۱',
    title: 'بازدید کننده'
  }
]

export const crmSocial = [
  {
    icon: 'https://api.iconify.design/fa-solid:money-check.svg',
    number: '۲۰۰ ریال',
    title: 'درآمد ماهیانه'
  },
  {
    icon: 'https://api.iconify.design/mdi:chart-sankey.svg',
    number: '۵۰۰ ریال',
    title: 'فروش هفتگی'
  },
  {
    icon: 'https://api.iconify.design/ph:chart-line-up-bold.svg',
    number: '۴۰',
    title: 'مشتری‌های جدید'
  },
  {
    icon: 'https://api.iconify.design/zondicons:user.svg',
    number: '۱۹',
    title: 'کاربرهای فعال'
  }
]

export const usersInfo = reactive({
  users: [
    {
      id: '1',
      img: 'https://joeschmoe.io/api/v1/male/jacques',
      name: 'عرفان طاهری',
      job: 'توسعه‌دهنده',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۱۱:۳۰',
      compeleted: false
    },
    {
      id: '2',
      img: 'https://joeschmoe.io/api/v1/male/josh',
      name: 'رسول فلاح',
      job: 'طراح',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۱۰:۰۰',
      compeleted: false
    },
    {
      id: '3',
      img: 'https://joeschmoe.io/api/v1/male/jerry',
      name: 'هوشنگ حسینی',
      job: 'اپراتور',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۰۳:۳۰',
      compeleted: false
    },
    {
      id: '4',
      img: 'https://joeschmoe.io/api/v1/male/james',
      name: 'شاپور پیردوست',
      job: 'مدیر',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۰۴:۲۰',
      compeleted: false
    },
    {
      id: '5',
      img: 'https://joeschmoe.io/api/v1/male/joe',
      name: 'ارژنگ بهداد',
      job: 'مشاور',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۰۵:۰۰',
      compeleted: false
    },
    {
      id: '6',
      img: 'https://joeschmoe.io/api/v1/male/joe',
      name: 'بهداد ارژنگ',
      job: 'اپراتور',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۰۵:۰۰',
      compeleted: false
    },
    {
      id: '7',
      img: 'https://joeschmoe.io/api/v1/male/joe',
      name: 'رسول شاپور',
      job: 'توسعه‌دهنده',
      message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      lastMessage: '۰۵:۰۰',
      compeleted: false
    },
  ]
})

export const timeLine = [
  {
    title: 'عرفان طاهری این محصول را پسندید',
    message:
      ' طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید. ',
    icon: 'https://api.iconify.design/ant-design:like-filled.svg',
  },
  {
    title: 'بروزرسانی محصولات',
    message:
      ' طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید. ',
    icon: 'https://api.iconify.design/ri:check-double-fill.svg',

  },
  {
    title: 'ارژنگ بهداد این محصول را پسندید',
    message:
      ' طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید. ',
    icon: 'https://api.iconify.design/bxs:like.svg'
  }
]

export const latestSales = [
  {
    id: 1,
    productImg: 'https://m.media-amazon.com/images/I/71czD50UQ5L._AC_UL1500_.jpg',
    productId: 'DGREgs',
    product: 'کوله کوهنوردی',
    total: '۱۷٬۰۰۰ تومان',
    status: 'ارسال شده',
    userImg: 'https://joeschmoe.io/api/v1/male/josh',
    username: 'عرفان طاهری',
  },
  {
    id: 2,
    productImg: 'https://m.media-amazon.com/images/I/61Vuot5ILFL._AC_SL1500_.jpg',
    productId: 'GJEII',
    product: 'اره',
    total: '۵٬۰۰۰ تومان',
    status: 'پرداخت شده',
    userImg: 'https://joeschmoe.io/api/v1/male/james',
    username: 'شاپور پیردوست',

  },
  {
    id: 3,
    productImg: 'https://m.media-amazon.com/images/I/71fb7xILoyL._AC_SL1500_.jpg',
    productId: 'DpjgwG',
    product: 'آتش‌زا',
    total: '۲٬۰۰۰ تومان',
    status: 'معلق',
    userImg: 'https://joeschmoe.io/api/v1/male/joe',
    username: 'بهداد ارژنگ',
  },
  {
    id: 1,
    productImg: 'https://static.h2r-equipements.com/23491-thickbox_default/campingaz-camping-micro-plus.jpg',
    productId: 'PUEghe',
    product: 'اجاق کمپینگ',
    total: '۸٬۰۰۰ تومان',
    status: 'لغو شده',
    userImg: 'https://joeschmoe.io/api/v1/male/james',
    username: 'هوشنگ حسینی',
  }
]

export const crmCarousel = [
  {
    img: 'https://quasar-admin-demo.netlify.app/img/coding.1a850e0e.jpeg',
    title: 'هرکاری که دلت می‌خواد انجام بده.اما بدون داری چیکار می‌کنی!',
    author: 'توسط دلکش'
  },
  {
    img: 'https://quasar-admin-demo.netlify.app/img/lookgood.9b0772e2.jpeg',
    title: 'همیشه طبق برنامه‌ای که چیندی پیش برو.',
    author: 'توسط دلکش'
  },
  {
    img: 'https://quasar-admin-demo.netlify.app/img/trawel.c87a1818.jpeg',
    title: 'هرموقع تونستی حتما سفر برو حتی یک روزه!',
    author: 'توسط دلکش'
  },
]

export const products = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/71fb7xILoyL._AC_SL1500_.jpg',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    name: 'آتش‌زا',
    price: '۲٬۰۰۰ تومان',
    rating: 3,
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/61Vuot5ILFL._AC_SL1500_.jpg',
    name: 'اره',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    price: '۵٬۰۰۰ تومان',
    status: 'تمام شده',
    // status_class: 'absolute right top bg-black text-white',
    rating: 4,
  },
  {
    id: 3,
    img: 'https://static.h2r-equipements.com/23491-thickbox_default/campingaz-camping-micro-plus.jpg',
    name: 'اجاق کمپینگ',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    price: '۸٬۰۰۰ تومان',
    status: 'تخفیف ۵۰٪',
    // status_class: 'absolute right-0 top-0 bg-blue-500 text-whtie',
    rating: 4,
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/I/71czD50UQ5L._AC_UL1500_.jpg',
    name: 'کوله کوهنوردی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    price: '۱۷٬۰۰۰ تومان',
    rating: 5,
  },
  {
    id: 5,
    img: 'https://www.ghooch.com/userfiles/product/prd_1308/FX-700-1.jpg',
    name: 'تبر',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    price: '۸۹٬۰۰۰ تومان',
    rating: 5,
  },
  {
    id: 1,
    img: 'https://koohsite.com/wp-content/uploads/p/1/5/9/%D8%A7%D8%AC%D8%A7%D9%82-%D8%A7%D9%84%DA%A9%D9%84%DB%8C-300x300.jpg',
    name: 'اجاق الکلی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
    price: '۸٬۰۰۰ تومان',
    status: 'تخفیف ۳۰٪',
    // status_class: 'absolute right top bg-black text-white',
    rating: 4,
  }
]

export const toFarsiNumber = (n) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
}

export const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
}