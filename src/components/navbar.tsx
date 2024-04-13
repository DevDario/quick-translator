import Image from 'next/image';

export default function navbar(){
    return(
        <nav className='flex flex-row justify-between'>
            <div className='flex flex-row justify-around items-center'>
                <Image
                    alt='quicktranslator-logo'
                    src={''}
                />
                <h1 className='bg-slate-100 font-bold'>QuickTranslator</h1>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Image 
                    alt='github-logo'
                    src={''}
                />
            </div>
        </nav>
    )
}