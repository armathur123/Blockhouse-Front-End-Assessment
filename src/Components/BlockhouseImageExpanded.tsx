import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { useLocation } from 'react-router-dom'

const BlockHouseImageExpanded: React.FC = () => {
  const { state } = useLocation()
  const { link } = state // Read values passed on state
  return (
        <div className={css(styles.cardContainer)} >
            <img src={link} />
        </div>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '250px',
    padding: '20px',
    background: 'black',
    width: '100%'
  }
})

export default BlockHouseImageExpanded
