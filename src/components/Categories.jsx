import Category from '@/components/Category'

const Categories = ({ headerBlock, items }) => {
  return (
    <section id="categories" className="bg-white py-16">
      {headerBlock}
      {items.map((item) => (
        <Category
          key={item.id}
          items={item.products}
          title={item.name}
        />
      ))}
    </section>
  )
}

export default Categories
