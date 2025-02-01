import React from "react"
import { motion } from 'framer-motion';
import styles from './Greeting.module.css';

export default function Greeting({ getMessage }) {
    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Starting state
                animate={{ opacity: 1, y: 0 }}  // End state
                transition={{ duration: 1 }}  // Animation timing
                >
                <div className={styles.greeting}>
                    <h1 className={styles.greetingTitle}>Hi, I'm Lexi!</h1>
                    <p className={styles.greetingSubtitle}>I'm your language assistant! Please choose a language to conversate in:</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Starting state
                animate={{ opacity: 1, y: 0 }}  // End state
                transition={{ duration: 1.5 }}  // Animation timing
            >
                <div className={styles.languageOptions}>
                    <motion.button whileHover={{ scale: 0.9 }} onClick={() => getMessage("Hi, lets practice!", "English")} className={styles.languageButton}>English</motion.button>
                    <motion.button whileHover={{ scale: 0.9 }} onClick={() => getMessage("Hi, lets practice!", "Spanish")} className={styles.languageButton}>Spanish</motion.button>
                    <motion.button whileHover={{ scale: 0.9 }} onClick={() => getMessage("Hi, lets practice!", "French")} className={styles.languageButton}>French</motion.button>
                    <motion.button whileHover={{ scale: 0.9 }} onClick={() => getMessage("Hi, lets practice!", "German")} className={styles.languageButton}>German</motion.button>
                </div>
            </motion.div>
        </div>
    )
}