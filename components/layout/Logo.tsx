import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/wonder.svg'
        width={0}
        height={0}
        priority
        alt='Picture of the author'
        className='object-cover w-auto h-8 max-w-none'
      />
      <p className='text-2xl italic'>WONDER</p>
    </div>
  )
}
