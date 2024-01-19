/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Navbar from '../Components/Navbar'
import useDogs from '../hooks/useDogs'
import Card from '../Components/Card'

const Homepage: React.FC = () => {
  const { dogs } = useDogs()
  const cardInfo = [
    {
      header: 'Visualize',
      subtext: 'Upload your unstructured data, create real-time data feeds, and view customizable dashboards around your fixed income execution'
    },
    {
      header: 'Communicate',
      subtext: 'Query information directly in natural language - eliminating development of complex macros / scripts.'
    },
    {
      header: 'Learn',
      subtext: 'Receive intelligence on execution quality scores, smart counterparty analysis, and liquidity profiles - to improve desk P&L.'
    },
    {
      header: 'Report',
      subtext: 'Apply execution quality insights, manage fixed income order flow, and improve desk performance.'
    }
  ]
  const [data, setData] = useState<Array<{ link: string, header: string, subtext: string }>>()

  useEffect(() => {
    console.log(dogs)
    if (dogs) {
      setData(dogs.map((dog, index) => { return { link: dog, ...cardInfo[index] } }))
    }
  }, [dogs])

  return (
    <div className={css(styles.homepageContainer)}>
      <Navbar />
      <h3 className={css(styles.cardHeader)}>Modern Tool Suite</h3>
      <div className={css(styles.cardsContainer)}>
      {
        data ? data.map((dog) => <Card key={dog.link} header={dog.header} message={dog.subtext} imageLink={dog.link} />) : <p>Loading...</p>
      }
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  homepageContainer: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#050505',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cardHeader: {
    fontSize: 32
  },
  cardsContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '20px'
  }
})

export default Homepage
