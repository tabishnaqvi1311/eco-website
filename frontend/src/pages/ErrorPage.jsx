import Navbar from "@/components/navbar/navbar";
import { useRouteError } from "react-router-dom"

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <main className="">
            <Navbar/>
            <div className="flex flex-col text-center h-[80vh] items-center justify-center">
                <h1 className="font-semibold text-xl">Oops, There seems to be an error!</h1>
                <span>{error.statusText || error.status}</span>
            </div>
        </main>
    )
}