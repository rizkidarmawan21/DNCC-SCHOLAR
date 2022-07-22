import { Link } from "@inertiajs/inertia-react"

export const CardResearch = () => {
    return (
        <div className="w-full mb-10">
            <div>
                <Link href={route('research.show', 1)}>
                    <h2 className="card-title text-sky-700 hover:text-sky-900">Perancangan sistem aplikasi pembangunan rumah dengan arduino</h2>
                </Link>
                <p className="text-slate-400 text-sm my-3">Rizki Darmawan - Techlonogy - 21-04-2002</p>
                <p>Pengadaan Barang merupakan suatu kegiatan pendistribusian barang yang digunakan untuk mendapatkan suatu barang atau jasa. Dalam suatu perusahaan, pengadaan barang merupakan kegiatan yang penting… <Link className="text-sky-700">Expand</Link></p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
                <div className="mt-4 flex">
                    <Link><img src="/assets/pdf.svg" /></Link>
                    <img className="ml-5" src="/assets/eye.svg" /> <span className="text-sm text-[#B85900] ml-1">1.2 View</span>
                </div>
            </div>
        </div>
    )
}