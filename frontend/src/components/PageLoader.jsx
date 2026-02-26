import {Loader} from "lucide-react";



const PageLoader = () => {
    return (
        <div className="mine-h-screen flex items-center justify-center bg-gray-800">
            <Loader className="text-white animate-pulse size-10 text-primary" />
        </div>
    )
}
export default PageLoader
