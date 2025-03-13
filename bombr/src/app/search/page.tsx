
import Navbar from '@/components/Navbar/navbar.tsx'
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx';
import SearchBar from  '@/components/SearchBar/searchBar.tsx'
import Aside from '@/components/Aside/Aside.tsx';
import SuggestedProfile from '@/components/suggestedProfile/suggestedProfile';

function Home() {
  return (
    <div>
      <MainSection>
        <span>
          <ScrollRegion>
          <SearchBar></SearchBar>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
            <SuggestedProfile></SuggestedProfile>
          </ScrollRegion>
        </span>
      </MainSection>
    </div>
  );
}

export default Home