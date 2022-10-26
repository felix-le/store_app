import {createUseStyles} from 'react-jss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import 'swiper/css'
import "swiper/css/pagination"

// import tailwindConfig from '@root/tailwind.config'
// const fullConfig = resolveConfig(tailwindConfig)
// const theme = fullConfig.theme

const useStyles = createUseStyles({
})

export default function Category({ items, title = 'Category', allItemsHref }) {
  const classes = useStyles()

  return (
    <div className="bg-white">
      <div className="pt-16 sm:pt-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {allItemsHref && (
            <a
              href={allItemsHref}
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          )}
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <Swiper
              className="swiper-custom"
              spaceBetween={30}
              slidesPerView={"auto"}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              // pagination={{
              //   dynamicBullets: true,
              // }}
              // modules={[Pagination]}
              // breakpoints={{
              //   640: {
              //     pagination: false
              //   }
              // }}
            >
              {items.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className={`inline-flex w-64 flex-col text-center ${classes.cardProduct}`}
                >
                  <div className="group relative">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={`/product/${product.id}`}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* <div className="mt-12 flex px-4 sm:hidden">
          <a
            href="#"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}
