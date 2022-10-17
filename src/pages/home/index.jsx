import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { HeroBanner } from '@/components/HeroBanner'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Screencasts } from '@/components/Screencasts'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import NavTop from '@/components/NavTop'
import Steps from '@/components/Steps'
import TextHeader from '@/components/TextHeader'

import image1 from '@/images/pexels-tara-winstead-6690916.jpg'
import image2 from '@/images/pexels-ylanite-koppens-1693653.jpg'
import ProductsList from '@/components/ProductsList'
import Categories from '@/components/Categories'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
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
      href: '#section1',
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
      href: '#section1',
    },
    button2: {
      text: 'More details',
      href: '#section2',
    },
    image: image2,
  },
]

const products = [
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
      />
      <ProductsList
        items={products}
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
      />
      <Screencasts />
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
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
