import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './Content/UserPage/UserPage';
import Dialogs from './Content/Dialogs/Dialogs';
import styles from './Page.module.css';
import CurrentUserPage from './Content/UserPage/CurrentUserPage';

function Page({ activUser, setActivUser }) {

    return (
        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Header activUser={activUser} setActivUser={setActivUser} />

                <div className={styles.navAndContent}>
                    <Navbar />

                    <div className={styles.content}>
                        <Routes>
                            <Route path="/myPage" element={<UserPage activUser={activUser} />} />
                            <Route path="/messages" element={<Dialogs />} />
                            <Route path="/:currentPageUserId" element={<CurrentUserPage activUser={activUser} />} />
                        </Routes>
                    </div>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default Page;