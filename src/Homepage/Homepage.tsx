import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Navbar from '../Components/Navbar'

const Homepage: React.FC = () => {
  return (
    <div className={css(styles.homepageContainer)}>
      <Navbar />
    </div>
  )
}

const styles = StyleSheet.create({
  homepageContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: '#050505'
  }
})

export default Homepage
