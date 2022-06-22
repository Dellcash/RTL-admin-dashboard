import { reactive } from 'vue'

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

export const productsInfo = reactive({
  products: [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/71fb7xILoyL._AC_SL1500_.jpg',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      name: 'آتش‌زا',
      price: '۲٬۰۰۰ تومان',
      rating: 3,
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/61Vuot5ILFL._AC_SL1500_.jpg',
      name: 'اره',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      price: '۵٬۰۰۰ تومان',
      status: 'تمام شده',
      rating: 4,
    },
    {
      id: 3,
      img: 'https://static.h2r-equipements.com/23491-thickbox_default/campingaz-camping-micro-plus.jpg',
      name: 'اجاق کمپینگ',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      price: '۸٬۰۰۰ تومان',
      status: 'تخفیف ۵۰٪',
      rating: 4,
    },
    {
      id: 4,
      img: 'https://m.media-amazon.com/images/I/71czD50UQ5L._AC_UL1500_.jpg',
      name: 'کوله کوهنوردی',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      price: '۱۷٬۰۰۰ تومان',
      rating: 5,
    },
    {
      id: 5,
      img: 'https://www.ghooch.com/userfiles/product/prd_1308/FX-700-1.jpg',
      name: 'تبر',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      price: '۸۹٬۰۰۰ تومان',
      rating: 5,
    },
    {
      id: 1,
      img: 'https://koohsite.com/wp-content/uploads/p/1/5/9/%D8%A7%D8%AC%D8%A7%D9%82-%D8%A7%D9%84%DA%A9%D9%84%DB%8C-300x300.jpg',
      name: 'اجاق الکلی',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      price: '۸٬۰۰۰ تومان',
      status: 'تخفیف ۳۰٪',
      rating: 4,
    }
  ]
})

export const toFarsiNumber = (n) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
}

export const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
}