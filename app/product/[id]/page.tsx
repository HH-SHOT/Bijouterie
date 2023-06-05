import Image from "next/image"
export default async function Product( {searchParams} ) {
    return (
        <div className="flex justify-between gap-24 p-12 ">
            <Image src={searchParams.image}
            alt={searchParams.name}
            width={600}
            height={600}
            />
            <div>
                <h1>Name</h1>
                <p>Description</p>
            </div>
        </div>
    )
}