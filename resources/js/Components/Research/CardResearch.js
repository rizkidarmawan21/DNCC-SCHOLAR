import { Link } from "@inertiajs/inertia-react"

export const CardResearch = ({ key, research }) => {
    return (
        <div className="w-full mb-10" key={key}>
            <div>
                <Link href={route('research.show', research.id)}>
                    <h2 className="card-title text-sky-700 hover:text-sky-900">{research.title}</h2>
                </Link>
                <p className="text-slate-400 text-sm my-3">{research.author.name} - {research.category} - {research.year}</p>
                <p> {research.excerpt} <Link href={route('research.show', research.id)} className="text-sky-700">Expand</Link></p>
                <div className="mt-4 flex">
                    {research.pdf ?
                        <a target="_blank" rel="noopener noreferrer" href={research.pdf}><img src="/assets/pdf.svg" /></a>
                        : null
                    }

                    {research.link ? 
                        <a target="_blank" rel="noopener noreferrer" href={research.link}><img src="/assets/link.svg" /></a>
                        : null
                    }

                </div>
            </div>
        </div>
    )
}