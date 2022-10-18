import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { HeroBanner } from '@/components/HeroBanner'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import NavTop from '@/components/NavTop'
import Steps from '@/components/Steps'
import TextHeader from '@/components/TextHeader'
import Categories from '@/components/Categories'
import FavouriteProducts from '@/components/FavouriteProducts'

import image1 from '@/images/pexels-tara-winstead-6690916.jpg'
import image2 from '@/images/pexels-ylanite-koppens-1693653.jpg'
import Subscribe from '@/components/Subscribe'
import FooterSocials from '@/components/FooterSocials'

const navigation = [
  { name: 'Favourite Products', href: '#favourite-products' },
  { name: 'Categories', href: '#categories' },
  { name: 'How to buy', href: '#how-to-buy' },
]

const steps = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'SSL Certificates',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'Simple Queues',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]

const heroList = [
  {
    title: 'Data to enrich your',
    titleHighlight: 'online business',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.',
    button: {
      text: 'Our products',
      href: '#categories',
    },
    button2: {
      text: 'More details',
      href: '#section2',
    },
    image: image1,
  },
  {
    title: 'Hero banner',
    titleHighlight: 'Slide 2',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.',
    button: {
      text: 'Our products',
      href: '#categories',
    },
    button2: {
      text: 'More details',
      href: '#section2',
    },
    image: image2,
  },
]

const favouriteProductsList = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 10,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 4,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  // More products...
]

const categoriesList = [
  {
    id: 1,
    name: 'Soap',
    products: [
      {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 2,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 3,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 4,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 5,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 6,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      // More products...
    ],
  },
  {
    id: 2,
    name: 'Chrimast present',
    products: [
      {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 2,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 3,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 4,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 5,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      {
        id: 6,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt:
          'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
          { name: 'Black', colorBg: '#111827' },
          { name: 'Brass', colorBg: '#FDE68A' },
          { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
      },
      // More products...
    ],
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
      </Head>
      <NavTop items={navigation} />
      <HeroBanner items={heroList} />
      <Steps
        headerBlock={
          <TextHeader
            label="How to buy"
            title="Steps to order"
            description="Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla."
          />
        }
        items={steps}
        id="how-to-buy"
      />
      <FavouriteProducts
        items={favouriteProductsList}
        headerBlock={
          <TextHeader
            title="Favourite products"
            description="By default Swiper React uses core version of Swiper (without any additional modules). If you want to use Navigation, Pagination and other modules, you have to install them first. Here is the list of additional modules imports:"
          />
        }
      />
      <Categories
        headerBlock={
          <TextHeader
            title="Categories"
            description="Over an hour of high quality, step-by-step video content to sharpen your icon design workflow."
          />
        }
        items={categoriesList}
      />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Subscribe
        title="Join our soap community"
        description="Be the first to know about new releases, exclusive offers, tips and more"
        id="subscribe"
        formTitle="Give us your contact"
      />
      <FooterSocials/>
    </>
  )
}
