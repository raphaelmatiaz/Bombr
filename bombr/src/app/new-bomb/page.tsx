"use client"
import MainSection from '@/components/Main/main'
import styles from './newBomb.module.css'
import ScrollRegion from '@/components/scrollRegion/scrollRegion'
import Stepper, { Step } from '../../blocks/Components/Stepper/Stepper';
import { useEffect, useState } from "react";
import SearchBar from '@/components/SearchBar/searchBar';
import { GiphyFetch } from '@giphy/js-fetch-api'
import TargetProfile from '@/components/targetProfile/targetProfile';
import Link from 'next/link'
import { useRef } from 'react';
import Crosshair from '../../blocks/Animations/Crosshair/Crosshair';

// Giphy API Settings

    // Playground: https://codesandbox.io/p/sandbox/20kmp3zp9r?file=%2Fsrc%2Findex.ts
    // API Docs: https://developers.giphy.com/docs/#implementation-options

const gf = new GiphyFetch('your api key')

// fetch 10 gifs
// const { data: gifs } = await gf.trending({ limit: 10 })

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
}

const NewBomb = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTarget, setSelectedTarget] = useState("asd")
    const [preview, setPreview] = useState<string | null>('/post-preview-default.svg');
    const [apiType, setApiType] = useState("gifs")
    const [barPosition, setBarPosition] = useState("0")
    const containerRef = useRef(null);
    
    useEffect(() => {
        if (apiType === "gifs") {
           console.log("gifs")
        }
        else if (apiType === "memes") {
            console.log("memes")
        }
           
    }, [apiType]);
    
    // Handle file selection
    const handleFileChange = (event: FileChangeEvent): void => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);

            // Generate preview URL
        const previewURL = URL.createObjectURL(file);
        setPreview(previewURL);
        }
    };

    interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

    // Handle form submission
    const handleSubmit = (event: SubmitEvent): void => {
        event.preventDefault();
        if (selectedFile) {
            console.log("Submitting file:", selectedFile);
            // Here, you'd send the file to your backend or API
        }
    };

    // API Nav UI (Memes vs Gifs)
    const ListMemes = async () => {
        // const { data: gifs } = await gf.trending({ limit: 10 })
        setApiType("memes")
        setBarPosition("100%")
    }

    const ListGifs = () => {
        setApiType("gifs")
        setBarPosition("0")   
    }


    return (
        <div className={styles.newBombview}>
            <MainSection>
                {/* <ScrollRegion> */}
                <div className={styles.stepperWrapper}>
                    <Stepper
                        initialStep={1}
                        onStepChange={(step) => {
                            console.log(step);
                        }}
                        onFinalStepCompleted={() => console.log("All steps completed!")}
                        backButtonText="Previous"
                        nextButtonText="Next"
                        >
                        {/*======= STEP 1 =======*/}
                        <Step>
                            <div className={styles.stepWrapper}>

                                <div className={styles.postImageWrapper}>
                                    <div className={styles.postImage} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                </div>

                                <h2>Arm Your Arsenal 💣</h2>
                                {selectedFile && <p className={styles.selectedFile}><em className={styles.em}> 💥 Selected Munition :</em> {selectedFile.name} 💥</p>}
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*,image/gif"
                                        onChange={handleFileChange}
                                        className={styles.fileInput}
                                        
                                    />
                                    <label htmlFor="fileInput"className={styles.fileInputLabel}>Browse File </label>
                                    </form>
                                    <hr />
                                    <nav className={styles.profileNavbar}>
                                        <div className={styles.navBarButtonsWrapper}>
                                            <button className={styles.postListButton} onClick={() => ListGifs()}>Gifs</button>
                                            <button className={styles.postListButton} onClick={() => ListMemes()}>Memes</button>
                                        </div>
                                        <div className={styles.movingBarWrapper} style={{ marginLeft: barPosition }}>
                                            <div id="movingBar" className={styles.movingBar}></div>
                                        </div>
                                        <input className={styles.searchBar} type="text" placeholder='Search' />
                                    </nav>
                                    <ul className={styles.contentList}>
                        {apiType === "gifs" && (
                            <>
                            <img src="/monkey-pc.gif" alt="Description" />
                            <img src="/image.png" alt="Description" />
                            <img src="/image2.jpg" alt="Description" />
                            <img src="/image3.jpg" alt="Description" />
                            <img src="/image4.jpg" alt="Description" />
                            <img src="/image5.jpg" alt="Description" />
                            <img src="/image6.jpg" alt="Description" />
                            <img src="/image7.jpg" alt="Description" />
                            <img src="/image8.jpg" alt="Description" />
                            <img src="/image9.jpg" alt="Description" />
                            <img src="/image10.jpg" alt="Description" />
                            <img src="/image11.jpg" alt="Description" />
                            </>
                        )}

                        {apiType === "memes" && (
                            <>
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            <img src="/chillguy.jpg" alt="Description" />
                            </>
                        )}
                        </ul>
                            </div>
                        </Step>
                        {/*======= STEP 2 =======*/}
                        <Step>
                        

                            <div className={styles.postImageWrapper}>
                                {!preview ? <button className={styles.removeImageButton}>✖️</button> : null}
                                <div className={styles.postImage} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                            </div>
                                <h2>Chosose your Target  </h2>
                                <input className={styles.searchBar} style={{marginBottom: "32px"}} type="text" placeholder='Search' />
                                    <ul className={styles.targetProfilesList}>
                                        <span onClick={() => setSelectedTarget("asd")}></span>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        <TargetProfile></TargetProfile>
                                        {/* <div ref={containerRef} style={{ overflow: 'hidden' }}>
                                            <Crosshair  color='#000'/></div> */}
                                    </ul>
                                <div className={styles.stepWrapper}>
                            </div>
                        </Step>
                        {/*======= STEP 3 =======*/}
                        <Step>
                            <div className={styles.stepWrapper}>
                            {/* <div className={styles.postImageWrapper}>
                                <div className={styles.postImageStep3} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                            </div> */}
                            <div className={styles.postImageWrapper}>
                                <div className={styles.munitionAndTargetWrapper}>
                                    <div className={styles.postImageStep3} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                    <div className={styles.arrow}></div>
                                    <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                                </div>
                            </div>
                            <h2>Add a Message</h2>
                            <input className={styles.input} type='text' placeholder='Write a message'/>
                            </div>
                        </Step>
                        {/*======= STEP 4 =======*/}
                        <Step>
                            <div className={styles.stepWrapper}>
                                <div className={styles.postImageWrapper}>
                                    <div className={styles.munitionAndTargetWrapper}>
                                        <div className={styles.postImageStep3} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                        <div className={styles.arrow}></div>
                                        <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                                    </div>
                                </div>
                                {/* <div className={styles.postImageWrapper}>
                                    <div className={styles.munitionAndTargetWrapper}>
                                        <div className={styles.postImage} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                        <div className={styles.arrow}></div>
                                        <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                                    </div>
                                </div> */}
                                <h2>'Target.username' was struck by your bomb! </h2>
                                <Link href={"/profile/suggestedUser"}>View Damage</Link>
                            </div>
                        </Step>
                    </Stepper>
                </div>
                {/* </ScrollRegion> */}
            </MainSection>
    </div>
    )
}

export default NewBomb