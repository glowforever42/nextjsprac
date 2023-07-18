import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className='title-box'>
        <h3 className='title'>JB 모임</h3>
        <div className='sub-title-box'>
          <h5 className='sub-title'>JB 친구 만들기</h5>
          <h4 className='sub-content'>JB 모임을 시작해보세요</h4>
        </div>
      </div>
      <div>
        <div className='welcome-box'>
          <h1>지금 만나요 😝</h1>
        </div>
      </div>
    </div>
  )
}
