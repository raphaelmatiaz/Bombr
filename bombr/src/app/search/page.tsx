
import Navbar from '../../components/Navbar/navbar.tsx'
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx';
import SearchBar from  '@/components/SearchBar/searchBar.tsx'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainSection>
        <span>
          <SearchBar></SearchBar>
          <ScrollRegion>
            <p>test</p>
          </ScrollRegion>
        </span>
      </MainSection>
    </div>
  );
}

export default Home