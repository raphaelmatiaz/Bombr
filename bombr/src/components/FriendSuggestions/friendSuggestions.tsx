import styles from './friendSuggestions.module.css'
import SuggestedProfile from '../suggestedProfile/suggestedProfile';

//Nota: React.ReactNode é para o react aceitar todo 
// o tipo de children serem passados no parent: strings, numbers, JSX, arrays, null ou undefined
interface FriendSuggestionsProps {
    children: React.ReactNode; 
}

const friendSuggestions = (props: FriendSuggestionsProps) => {
    return(
        <div className={styles.friendSuggestionsWrapper}>
            <p className={styles.worthyFoes}>Worthy Foes for You</p>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default friendSuggestions
