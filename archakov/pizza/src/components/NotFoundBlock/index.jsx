import React from 'react'

import styles from  './NotFoundBlock.module.scss'

console.log(styles);


const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
        <h1 > Ничего не найдено</h1>

        <p className={styles.description}> К сожалению, данная страница недоступна </p>
    </div>
  )
}

export default NotFoundBlock