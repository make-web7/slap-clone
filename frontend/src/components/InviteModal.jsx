import {useEffect, useState} from "react";
import {useChatContext} from "stream-chat-react"
import {XIcon} from "lucide-react"


const InviteModal = ({channel, onClose}) => {
    const {client} = useChatContext()

    const [users, setUsers] = useState([])
    const [selectedMembers, setSelectedMembers] = useState([])
    const [isLoadingUsers, setIsLoadingUsers] = useState(true)
    const [error, setError] = useState("")
    const [isInviting, setIsInviting] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoadingUsers(true)
            setError("")

            try {
                const members = Object.keys(channel.state.members)
                const res = await client.queryUsers({id: {$nin: members}}, {name:1}, {limit:30})
                setUsers(res.users)
            } catch (error) {
                console.log("error fetching users for invite", error)
                setError(error)
            } finally {
                setIsLoadingUsers(false)
            }
        }

    }, [channel, client])



    return (
        <div>InviteModal</div>
    )
}
export default InviteModal
