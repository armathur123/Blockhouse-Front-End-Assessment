import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import BlockhouseLogo from '../assets/blockhouseLogo.svg'

const Navbar: React.FC = () => {
  return (
        <div className={css(styles.NavbarContainer)}>
            <div className={css(styles.navLinks)}>
                <div className={css(styles.blockhouseHeader)}>
                    <div className={css(styles.svgContainer)}>
                      <BlockhouseLogo />
                    </div>
                    <p>Blockhouse</p>
                </div>
                <p>Feautures</p>
                <p>Dashboard</p>
                <p>NLP</p>
                <p>Analytics</p>
            </div>
            <div className={css(styles.navLinks)}>
                <p>Enter App</p>
                <p>Book Demo</p>
            </div>
        </div>
  )
}

const styles = StyleSheet.create({
  NavbarContainer: {
    width: '100%',
    height: '10vh',
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white'
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px'
  },
  blockhouseHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 800,
    gap: '5px'
  },
  svgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Navbar
