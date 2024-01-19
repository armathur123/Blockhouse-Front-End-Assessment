import React from 'react'
import { StyleSheet, css } from 'aphrodite'

interface ICardProps {
  header: string
  message: string
  imageLink: string
}

const Card: React.FC<ICardProps> = (props) => {
  return (
        <div className={css(styles.cardContainer)}>
            <h2 className={css(styles.header)}>{props.header}</h2>
            <p className={css(styles.subtext)}>{props.message}</p>
        </div>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    background: '#0F0F0F',
    height: '250px'
  },
  header: {
    fontSize: 20
  },
  subtext: {
    fontSize: 17,
    opacity: 0.5
  }
})

export default Card
