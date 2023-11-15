import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
          projectId="4592190a-1d4b-4c85-9aea-615c0bdee287"
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%' }} 
        />
        </div>
    )
}

export default ChatsPage