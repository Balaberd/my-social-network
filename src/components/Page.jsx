import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Content/Profile/Profile';
import Dialogs from './Content/Dialogs/Dialogs';
import styles from './Page.module.css';
import Friends from './Content/Friends/Friends';
import Messages from './Content/Messages/Messages';

function Page ({ activUser, setActivUser }) {

    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header activUser={activUser} setActivUser={setActivUser} />

                <div className={styles.navAndContent}>
                    <Navbar />

                    <section className={styles.content}>
                        <Routes>
                            <Route path="/myPage" element={<Profile activUser={activUser} />} />
                            <Route path="/dialogs" element={<Dialogs activUser={activUser} />} />
                            <Route path="/friends" element={<Friends activUser={activUser} />} />
                            <Route path="/:currentProfile" element={<Profile activUser={activUser} />} />
                            <Route path="/dialog/:dialogId" element={<Messages activUser={activUser} />} />
                        </Routes>
                    </section>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default Page;