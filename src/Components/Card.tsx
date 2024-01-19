import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
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
    height: '250px',
    padding: '20px',
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgb(0 0 0 / 50%)'
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
