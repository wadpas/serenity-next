import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src='/serenity.svg'
        width={0}
        height={0}
        priority
        alt='Serenity logo'
        className='object-cover w-auto h-8 max-w-none '
      />
      <p className='text-2xl font-bold'>SERENITY</p>
    </div>
  )
}
