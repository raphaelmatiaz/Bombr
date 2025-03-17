"use client"
import LoginProviders from '../../../components/LoginProviders/LoginProviders.tsx'
import styles from './register.module.css'
import Link from 'next/link'
import ClickSpark from '../../../blocks/Animations/ClickSpark/ClickSpark.tsx'
import Particles from '../../../blocks/Backgrounds/Particles/Particles.tsx';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
function Register() {

    const [email, setEmail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession();

    // Redirect user to /home-feed if they are authenticated
    useEffect(() => {
    if (status === "authenticated") {
        router.push('/home-feed');
    }
    }, [status, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Set Full Name
        const fullName = `${firstName} ${lastName}`;
        // window.alert(fullName)
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          window.alert(`⚠️ Email ${email} is invalid. Please enter a valid email address.`)
          return;
        }


        // Verify passwords match
        if (password !== confirmPassword) {
            //   setError("As passwords não coincidem");
              window.alert("⚠️ Your passwords do not match")
              return;   
            }

        // Validate password
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
        //   setError(
        //     "A password deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número"
        //   );
        //   window.alert("A password deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número")
          window.alert("⚠️ Your password should be at least 8 characters long, and must include: one uppercase letter, one lowercase letter, and one number")
          return;
        }

        
    
        setLoading(true);
    
        try {
          const response = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, email, username, password }),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.error || "Erro no registo");
          }
    
          // Registo bem-sucedido, redirecionar para login
          router.push("/login");
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

    return(
        <ClickSpark
                sparkColor='#7A00F4'
                sparkSize={10}
                sparkRadius={35}
                sparkCount={8}
                duration={400}
                >
            <div className={styles.loginWrapper}>

                <aside className={styles.asideArt}  style={{backgroundImage: "./login.png"}}>
                    <Particles
                            particleColors={['#6ba607', '#cc8108', '#448519', '#EE91C0', '#FCBB49', '#B260C4']}
                            particleCount={150}
                            particleSpread={10}
                            speed={0.07}
                            particleBaseSize={100}
                            moveParticlesOnHover={false}
                            alphaParticles={false}
                            disableRotation={false}
                        />
                </aside>
                
                <main className={styles.formWrapper}>
                    <div className={styles.logo}></div>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <span className={styles.inputWrapper}>
                            <input className={styles.input} type="text" placeholder='First name' id="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} required/>
                            <input className={styles.input} type="text" placeholder='Last name' id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                        </span>
                        <span className={styles.inputWrapper}>
                            <input className={styles.input} type="email" placeholder='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <input className={styles.input} type="text" placeholder='Username' maxLength={15} id="username" value={username} onChange={(e) => setUsername(e.target.value)} pattern="[A-Za-z0-9._]+" title="Username can only contain letters, numbers, periods, and underscores" required/>
                        </span>
                        <input className={styles.input} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <input className={styles.input} id="confirmPassword" placeholder='Confirm Password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                        
                        <button className={styles.loginButton}>Register</button>
                    </form>
                    <p className={styles.or}>Or</p>
                    <hr className={styles.horizontalRow} />
                    <LoginProviders></LoginProviders>
                    <hr className={styles.horizontalRow} />
                    <p className={styles.p}>Already have an account? <Link className={styles.anchor} href="/login">Log in</Link></p>
                </main>
            </div>
        </ClickSpark>
    )
}

export default Register