import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import BlockhouseLogo from '../assets/blockhouseLogo.svg'
import BlockhouseButton from './BlockhouseButton'

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
                <p className={css(styles.basicLink)}>Feautures</p>
                <p className={css(styles.basicLink)}>Dashboard</p>
                <p className={css(styles.basicLink)}>NLP</p>
                <p className={css(styles.basicLink)}>Analytics</p>
            </div>
            <div className={css(styles.navLinks)}>
                <BlockhouseButton onClick={() => { console.log('Enter site App') }} type={'clear'} text={'Enter App'} />
                <BlockhouseButton onClick={() => { console.log('Book Demo') }} type={'solid'} text={'Book Demo'} />
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
    color: 'white',
    backgroundColor: '#000000'
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
  },
  basicLink: {
    opacity: 0.7
  }
})

export default Navbar
