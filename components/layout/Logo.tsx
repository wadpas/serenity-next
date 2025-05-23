import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/wonder.svg'
        width={0}
        height={0}
        priority
        alt='Wonder logo'
        className='object-cover w-auto h-10 max-w-none bg-primary-foreground rounded-full'
      />
      <p className='text-2xl italic font-bold'>WONDER</p>
    </div>
  )
}
