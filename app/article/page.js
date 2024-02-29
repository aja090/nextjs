import Link from "next/link"

export default function article() {

    return (

        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl">Article</h1>

            <Link href={"/posts"}>
                <button className="gap-4 bg-blue-900 p-2 rounded-2xl">take me to posts</button>
            </Link>
        </div>
    )
}