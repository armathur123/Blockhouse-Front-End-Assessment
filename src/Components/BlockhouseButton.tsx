import React from 'react'
import { StyleSheet, css } from 'aphrodite'

interface IBlockhouseButton {
  onClick: () => void
  type: 'clear' | 'solid'
  text: string
}

const BlockhouseButton: React.FC<IBlockhouseButton> = (props) => {
  const buttonStyle = (props.type === 'solid') ? styles.blockhouseButtonSolid : styles.blockhouseButtonClear
  return (
        <button className={css(styles.BlockhouseButtonContainer, buttonStyle)} onClick={props.onClick}>
            {props.text}
        </button>
  )
}

const styles = StyleSheet.create({
  BlockhouseButtonContainer: {
    all: 'unset',
    borderRadius: '5px',
    padding: '8px',
    cursor: 'pointer'
  },
  blockhouseButtonSolid: {
    backgroundColor: 'white',
    color: 'black'
  },
  blockhouseButtonClear: {
    color: 'white'
  }
})

export default BlockhouseButton
