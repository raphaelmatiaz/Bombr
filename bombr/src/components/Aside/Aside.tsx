import LinkToProfile from "../LinkToProfile/LinkToProfile"
import FriendSuggestions from "../FriendSuggestions/friendSuggestions"
import SuggestedProfile from "../suggestedProfile/suggestedProfile"

import styles from './aside.module.css'

const Aside = () => {
    return(
        <span className={styles.asideWrapper}>

            <LinkToProfile></LinkToProfile>

            <FriendSuggestions>
                <SuggestedProfile></SuggestedProfile>
                <SuggestedProfile></SuggestedProfile>
                <SuggestedProfile></SuggestedProfile>
                <SuggestedProfile></SuggestedProfile>
            </FriendSuggestions>
        </span>
    )
}

export default Aside