import styles from './my-style.module.css'; 

const Blogs = () => {
    return(
    <> 
        <h1 style={{color: "red"}}>Blog Articles</h1>
        <p className={styles.bigblue}>Add a little style!</p>
    </>);
  };
  
  export default Blogs;
  