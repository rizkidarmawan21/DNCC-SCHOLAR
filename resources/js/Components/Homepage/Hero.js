import { Link } from "@inertiajs/inertia-react"

const Hero = () => {
    return (
        <>
            <div className="hero text-white py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-1.png" className="ml-10 rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">DNCC Scholar</h1>
                        <p className="py-6 text-lg">Research collection for members of Dian Nuswantoro Computer Club</p>
                        <Link href={route('research')} className="btn btn-primary">Research Now</Link>
                        {/* <Link href={route('login')} className="btn bg-white text-slate-900 hover:bg-slate-300">Sign In</Link> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero