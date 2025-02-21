import styles from './searchBar.module.css'

const SearchBar = () => {
    return(
        <input className={styles.searchBar} type="text" placeholder='Search' />
    )
}

export default SearchBar