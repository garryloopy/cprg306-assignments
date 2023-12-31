import Link from 'next/link';

export default function Week({ weekNumber }) {
    return (
        <div className="my-2">
            <Link href={`week${weekNumber}`} className="px-5 py-1 bg-violet-800 hover:bg-violet-900 max-w-md rounded-r-md font-medium">Week {weekNumber}</Link>
        </div>
    );
}