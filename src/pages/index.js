import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile.js'
import React from 'react';
import Profile from 'src/pages/qcomps/profile_mistake.js';

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
    </div>
  )
}
