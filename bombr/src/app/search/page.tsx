
import Navbar from '@/components/Navbar/navbar.tsx'
import MainSection from '@/components/Main/main.tsx';
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx';
import SearchBar from  '@/components/SearchBar/searchBar.tsx'
import Aside from '@/components/Aside/Aside.tsx';
import SuggestedProfile from '@/components/suggestedProfile/suggestedProfile';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainSection>
        <span>
          <SearchBar></SearchBar>
          <ScrollRegion>
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
        <Aside></Aside>
      </MainSection>
    </div>
  );
}

export default Home