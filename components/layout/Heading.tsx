const Heading = ({ title }: { title: string }) => {
  return (
    <section className='p-4 '>
      <h1 className='text-2xl font-bold tracking-tight text-gray-900'>{title}</h1>
    </section>
  )
}

export default Heading
