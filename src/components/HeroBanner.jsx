import Image from 'next/future/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { EffectFade, EffectCreative } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

import image1 from '@/images/pexels-tara-winstead-6690916.jpg';
import image2 from '@/images/pexels-ylanite-koppens-1693653.jpg';

const data = [
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

export function HeroBanner() {
  const height = 80
  const heightDesktop = 136
  return (
    <section className="overflow-hidden bg-slate-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{backgroundImage: 'url(' + item.image.src + ')'}}
            className={`align-center h-auto bg-cover bg-no-repeat bg-right bg-slate-100 py-16`}
          >
            <div className="max-w-7xl mx-auto lg:pb-36 lg:pt-20 xl:py-32 px-4 sm:px-6">
              <div className="lg:grid lg:justify-end">
                <div
                  className={`sm:text-center lg:mx-auto lg:max-w-lg lg:text-left`}
                >
                  <h1>
                    <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                      <span className="text-gray-900 mr-4">{item.title}</span>
                      <span className="text-indigo-600">
                        {item.titleHighlight}
                      </span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {item.description}
                  </p>
                  <div className="mt-8 flex gap-4 sm:mx-auto sm:max-w-lg sm:justify-center lg:mx-0 lg:justify-start">
                    {item.button && (
                      <Button href={item.button.href} color="indigo">
                        {item.button.text}
                      </Button>
                    )}
                    {item.button2 && (
                      <Button
                        href={item.button2.href}
                        variant="outline"
                        color="indigo"
                      >
                        More details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
