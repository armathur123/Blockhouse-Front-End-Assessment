import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { useNavigate } from 'react-router-dom'

interface ICardProps {
  header: string
  message: string
  imageLink: string
}

const Card: React.FC<ICardProps> = (props) => {
  const navigate = useNavigate()
  const cardClick = (): void => {
    navigate('/image', { state: { link: props.imageLink } })
  }

  return (
        <div className={css(styles.cardContainer)} style={{ backgroundImage: `url(${props.imageLink})` }} onClick={cardClick}>
            <h2 className={css(styles.header)}>{props.header}</h2>
            <p className={css(styles.subtext)}>{props.message}</p>
        </div>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '250px',
    padding: '20px'
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
