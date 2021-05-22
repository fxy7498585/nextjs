import style from './layout.module.scss'
function Layout({ children }) {
    return <div className={style.layout_content}>{children}</div>
  }
  
  export default Layout