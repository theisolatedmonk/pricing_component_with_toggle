import { clsx } from 'clsx';

type SwitchType = {
    onClick: () => void;
    isOpen: boolean
}

export function Switch(props: SwitchType) {
    const { isOpen, onClick } = props



    return <div onClick={onClick} className={clsx(' flex h-5 w-10 cursor-pointer rounded-3xl  p-1 py-3 items-center hover:bg-lightblue ', isOpen ? 'bg-darkblue' : 'bg-darkblue  ')}>
        <div className={clsx('h-4 w-4 transition-all   rounded-full bg-[hsl(240,78%,98%)]', isOpen ? 'translate-x-full ' : 'translate-x-0')}></div>
    </div>
}