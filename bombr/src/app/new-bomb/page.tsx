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
import axios from 'axios';
import Image from 'next/image'
import  prisma  from '@/lib/prisma'
import fs from "fs";
import { div, object, span } from 'framer-motion/client';
import User from "@/types/user.ts";
import SuggestedProfile from '@/components/suggestedProfile/suggestedProfile';
import targetProfile from '@/components/targetProfile/targetProfile';
import { useSession } from 'next-auth/react';



// Giphy API Settings

    // Playground: https://codesandbox.io/p/sandbox/20kmp3zp9r?file=%2Fsrc%2Findex.ts
    // API Docs: https://developers.giphy.com/docs/#implementation-options

// const gf = new GiphyFetch('your api key')

// fetch 10 gifs
// const { data: gifs } = await gf.trending({ limit: 10 })

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget;
}

const NewBomb = () => {

    // Form Data
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTarget, setSelectedTarget] = useState("")
    const [targetUser, setTargetUser] = useState<User | null>(null)
    const [bombMessage, setBombMessage] = useState("")

    const [preview, setPreview] = useState<string | null>('/default-preview-placeholder.png');
    const [apiType, setApiType] = useState("gifs")
    const [barPosition, setBarPosition] = useState("0")

    // State of Gifs and Memes from APIs
    const [gifs, setGifs] = useState<any[]>([]);
    const [memes, setMemes] = useState<any[]>([]);

    // State of User Fetching from DB Xata
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    // State of Search Target User
    const [searchedUser, setSearchedUser] = useState<User | null>(null);
    const [foundUsers, setFoundUsers] = useState<User[] | null>(null);

    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [gifTitle, setGifTitle] = useState<string>('');
    const containerRef = useRef(null);

    // Session
    const { data: session, status } = useSession();

    useEffect(() => {
        const foundUsers = users.filter(user => user.username && user.username.includes(search));
        setFoundUsers(foundUsers);
    }, [searchedUser]);

    // Fetching GIFs from Giphy
    const fetchGifs = async (query: string) => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${query}&limit=50`
          );
          setGifs(response.data.data); // Set GIFs from the response
        } catch (error) {
          console.error('Error fetching GIFs:', error);
        } finally {
          setLoading(false);
        }
      };

    // Fetching memes from Imgflip
    const fetchMemes = async () => {
        setLoading(true);
        try {
          const response = await axios.get('https://api.imgflip.com/get_memes');
          console.log("Raw API response:", response.data); // Check what the API returns
          setMemes(response.data.data.memes);
        } catch (error) {
          console.error('Error fetching memes:', error);
        } finally {
          setLoading(false);
        }
      };
      
      // Log `memes` after state updates
      useEffect(() => {
        console.log("Updated memes state:", memes);
      }, [memes]);

      useEffect(() => {
        // 🔍 Filter Memes Based on Search Query
        if (search.trim() === '') {
            fetchMemes();
        }
        
        const filteredMemes = memes.filter((meme) =>
            meme.name.toLowerCase().includes(search.toLowerCase())
        );
        setMemes(filteredMemes);
      }, [search]);
      

    useEffect(() => {
        if (search.trim() === '') {
        fetchGifs('funny'); // Default search term for GIFs
        } else {
        fetchGifs(search); // Fetch GIFs based on search term
        }
    }, [search]); // Trigger the API call when search term changes
    
    useEffect(() => {
        if (apiType === "gifs") {
           console.log("gifs")
           fetchGifs("funny")
        }
        else if (apiType === "memes") {
            console.log("memes")
            fetchMemes()
            
        }
           
    }, [apiType]);

    useEffect(() => {
        async function fetchUsers() {
          try {
            const response = await fetch("/api/users");
            if (!response.ok) throw new Error("Failed to fetch users");

            const data: User[] = await response.json();
            setUsers(data);
          } catch (err) {
            setError((err as Error).message);
          }
        }

        fetchUsers();
        const fetchUser = async () => {
            console.log("fetchUser Called");
            if (session) {
            console.log('if session entered')
            try {
                console.log("Try entered");
                const postData = {
                    content: String(selectedFile),
                    senderId: session.user.id,
                    receiverId: selectedTarget,
                    message: bombMessage,
                };
                const res = await fetch(`/api/newBomb/${postData}`);
                
                if (!res.ok) {
                    console.log("If NOT OK entered");
                    throw new Error("Failed to fetch user");
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchUser();
    }}, []);
    
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

    // handleSelectTargetUser
    const handleSelectTargetUser = (user: User) => {
        if (user.username) {
            setSelectedTarget(user.username)
            return}
        if (user.name) {
            setSelectedTarget(user.name)
        }
        if (user.fullName) {
            setSelectedTarget(user.fullName)
        }}
        
        const handleNewPost = async () => {
            console.log("handleNewPost Called");
            if (!session || !selectedFile) return;
            console.log("if session entered");
        
            try {
                console.log("Try entered");
                const postData = {
                    content: String(selectedFile),
                    senderId: session.user.id,
                    receiverId: targetUser?.id,
                    message: bombMessage,
                };
        
                const res = await fetch(`/api/newBomb`, {  // ✅ Remove postData from URL
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),  // ✅ Send data in the request body
                });
        
                if (!res.ok) {
                    throw new Error("Failed to post NewBomb");
                }
        
                console.log("If Response OK entered");
                console.log("Post sent Successfully");
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

    useEffect(() => {
            const fetchUser = async () => {
                console.log("useEffect Triggered")
              try {
                console.log("Try entered")
                const res = await fetch(`/api/user/${selectedTarget}`);
                
                if (!res.ok) {
                  throw new Error("Failed to fetch user");
                  console.log("If NOT OK entered")
                }
                
                const data: User = await res.json();    // NÃO CONSIGO IR BUSCAR ESTE USER
                console.log("USER QUE ESTOU A TENTAR IR BUSCAR: ", data)
                setTargetUser(data);                    
              } catch (err) {
                setError((err as Error).message);
              } finally {
                setLoading(false);
              }
            };
        
            if (selectedTarget) {
              fetchUser();
            }
          }, [selectedTarget]);
    
   
    const handleGifClick = (gif: any) => {
        // setSelectedFile(gif.images.original.url);
        setSelectedFile(gif.images.fixed_height.webp);
        setPreview(gif.images.fixed_height.webp);
        setGifTitle(gif.title)
    }

    const handleMemeClick = (meme: any) => {
        setSelectedFile(meme.url);
        setPreview(meme.url);
        setGifTitle(meme.name)
    }

    interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

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
                            if (step === 2) {
                                if (selectedFile === null) {
                                    // window.alert("⚠️ Please select a munition")
                                    console.log("⚠️ No munition selected")
                                
                            }}
                            console.log(step);
                        }}
                        onFinalStepCompleted={() => console.log("All steps completed!")}
                        backButtonText="Previous"
                        nextButtonText="Next"
                        // disableStepIndicators
                        >
                        {/*===================== STEP 1 =====================*/}
                        <Step>
                            <div className={styles.stepWrapper}>

                                <div className={styles.postImageWrapper}>
                                    
                                    <div className={styles.postImage} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}>
                                        {preview !== '/default-preview-placeholder.png' ? <button className={styles.removeImageButton} onClick={() => {setPreview('/default-preview-placeholder.png'); setSelectedFile(null)}}>✖️</button> : <></>}
                                    </div>
                                </div>

                                <h2>Load Your Arsenal</h2>
                                {selectedFile && <p className={styles.selectedFile}><em className={styles.em}>💣 Selected Munition :</em> {selectedFile.name || gifTitle} 💣</p>}
                                {/* <form onSubmit={handleSubmit} className={styles.form}> */}
                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*,image/gif"
                                        onChange={handleFileChange}
                                        className={styles.fileInput}
                                        
                                    />
                                    <label htmlFor="fileInput"className={styles.fileInputLabel}>Browse File </label>
                                {/* </form> */}
                                <hr />
                                <nav className={styles.profileNavbar}>
                                <div className={styles.navBarButtonsWrapper}>
                                    <button className={styles.postListButton} onClick={() => ListGifs()}>Gifs</button>
                                    <button className={styles.postListButton} onClick={() => ListMemes()}>Memes</button>
                                </div>
                                <div className={styles.movingBarWrapper} style={{ marginLeft: barPosition }}>
                                    <div id="movingBar" className={styles.movingBar}></div>
                                </div>
                                <input className={styles.searchBar} 
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder={`Search for ${apiType}...`}/>
                                </nav>
                                <ul className={styles.contentList}>
                                    {apiType === "gifs" && (
                                        <>
                                            {/* Loading Spinner */}
                                            {loading && <p>Loading...</p>}

                                            {/* Display GIFs */}
                                            {gifs.map((gif, index) => (
                                                <img key={index} style={{width: "100%"}} className={styles.gif} src={gif.images.fixed_height.webp} alt={gif.title} onClick={() => handleGifClick(gif)} />
                                            ))}
                                        </>
                                    )}

                                    {apiType === "memes" && (
                                        <>
                                            {/* Loading Spinner */}
                                            {loading && <p>Loading...</p>}

                                            {/* Display GIFs */}
                                            {memes.length === 0 && <p>API Quota Exceeded. No Memes Available</p>}
                                            {memes.map((meme, index) => (
                                                <img key={index} style={{width: "100%"}} className={styles.gif} src={meme.url} alt={meme.name} onClick={() => handleMemeClick(meme)} />
                                            ))}
                                        </>
                                    )}
                                </ul>
                            </div>
                        </Step>
                        {/*===================== STEP 2 =====================*/}
                        <Step>
                            <div className={styles.postImageWrapper}>
                                
                                <div className={styles.postImage} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                            </div>
                                <h2>Chosose your Target  </h2>
                                {selectedTarget && <p className={styles.selectedFile}><em className={styles.em}>🎯 Selected Target :</em> {selectedTarget} 🎯</p>}
                                <input className={styles.searchBar} style={{marginBottom: "32px"}} type="text" placeholder='Search' />
                                <p>{selectedTarget}</p>
                                <p>{targetUser?.id}</p>
                                    <ul className={styles.targetProfilesList}>
                                        <span onClick={() => setSelectedTarget("asd")}></span>
                                            {foundUsers && foundUsers.length > 0 ? (
                                                foundUsers.map((user) => (
                                                    <span key={user.id} onClick={() => handleSelectTargetUser(user)} className={styles.targetProfileWrapaper}>
                                                        <TargetProfile name={user.name ?? ''} username={user.username ?? ''} fullName={user.fullName ?? ''}></TargetProfile>
                                                    </span>
                                                ))
                                            ) : (
                                                users.map((user) => (
                                                    <span key={user.id} onClick={() => handleSelectTargetUser(user)} className={styles.targetProfileWrapaper}>
                                                        <TargetProfile name={user.name ?? ''} username={user.username ?? ''} fullName={user.fullName ?? ''}></TargetProfile>
                                                    </span>
                                                ))
                                            )}
                                    </ul>
                                <div className={styles.stepWrapper}>
                            </div>
                        </Step>
                        {/*===================== STEP 3 =====================*/}
                        <Step>
                            <div className={styles.stepWrapper}>
                            <div className={styles.postImageWrapper}>
                                <div className={styles.munitionAndTargetWrapper}>
                                    <div className={styles.postImageStep3} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                    <div className={styles.arrow}></div>
                                    <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                                </div>
                            </div>
                            <h2>Add a Message</h2>
                            <input className={styles.input} value={bombMessage} onChange={(e) => setBombMessage(e.target.value)} type='text' placeholder='Write a message'/>
                            <p>Messaage: {bombMessage}</p>
                            <button onClick={()=> handleNewPost()}>Bomb!</button>
                            </div>
                        </Step>
                        {/*===================== STEP 4 =====================*/}
                        <Step>
                            <div className={styles.stepWrapper} id={styles.step4wrapper}>
                                <div className={styles.postImageWrapper}>
                                    <div className={styles.munitionAndTargetWrapper}>
                                            <span className={styles.bombShapedBorderWrapper}>
                                                
                                                <div className={styles.bombShapedBorder}></div>
                                                <div className={styles.postImageStep4} style={{ backgroundImage: preview ? `url(${preview})` : "none" }}></div>
                                            </span>
                                        
                                        
                                        <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                                    </div>
                                </div>
                                <h2>{selectedTarget} <br /> was struck by  your bomb! </h2>
                                
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </MainSection>
        </div>
    )
}

export default NewBomb