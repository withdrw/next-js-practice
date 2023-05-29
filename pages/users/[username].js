import { useRouter } from "next/router"

export default function User(){

    const router = useRouter()
    console.log(router.query)
    const {username} = router.query

    return (
        <div>
            <h1> 
                This is the user: {username}
            </h1>
        </div>
    )
}