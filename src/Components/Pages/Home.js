import '../styles.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'
const Home=()=>{
    const [value,setValue]=useState('');
    useEffect(()=>{
        axios.get(`https://backend-server-react-blog-app.onrender.com`)
        .then((apidata)=>setValue(apidata.data))
        .catch((err)=>{
            console.log(err);
        })
    },[])
    console.log(value);
    return(
        <>
        
        <div id='home'>
        <NavBar/>
            
            <div className="home_container">
                <div className="box box1"></div>
                <div id='hm_cnt2'>
                <div className="box box2"></div>
                <div className="box box3"></div> 
                </div>
               
            </div>
         
            <h1 className='topic_heading hm'>The Latest</h1>
         
            <div className='home_latest'>
    
    { value&&value.filter((item)=>{
         return (item.id)%11===0
     }).map((item,index)=>{
         return( 
             <div className='home_display_card' key={index}>
                <div className="card_image">
                    
                     <Link to='/dynamicPage' state={{index:item.id,app_data:value}}> <img src={item.image} className="image_box" alt='not found' /></Link>
                     </div> 
          <div className="card_content">
         <h1>{item.heading}</h1>
             {item.discription}</div>
             </div>
         )
     })
     }
     </div>
     <div className="card_parent">
            <div className="card_container1">
            <h1 className="topic_heading ">Latest Articles</h1>
            {value&&value.filter((item)=>(item.id)%8===0).map((item,index)=>{
                return (
                 
                  
                     <div className="display_card" key={index}>
                     <div className="card_image"> 
                    
                     <Link to='/dynamicPage' state={{index:item.id,app_data:value}}> <img src={item.image} className="image_box" alt='not found' /></Link>
                     </div> 
                     <div className="card_content">
                    <h1>{item.heading}</h1>
                        {item.discription.slice(0,160)}</div>
                     </div>
                )
            })                 
           
            } 
            </div>
            <div className="post_container">
                    <h1 className="topic_heading">Top Posts</h1>
                    <div className="homeAdvertisement">
                        
                        <img className='Adds' src='https://i.pinimg.com/originals/27/94/6a/27946a99657cddf0cbde79a7e4e6f51f.gif' alt="not found" width='400px' height='600px'/>
                        </div>
                    {
                       value&&value.filter((item)=>{
                            return (item.id)%11===0
                        }).map((item,index)=>{
                            return(
                                <div className=" post_disp_crd" key={index}>
                     <div className="post_image_div"> 
                     
                     <Link to='/dynamicPage' state={{index:item.id,app_data:value}}><img className='post_image' src={item.image}  alt='not found'/></Link>
                     </div> 
                     <div className="post_content">
                    <h3>{item.heading}</h3>
                        {item.discription.slice(0,140)}</div>
                     </div>
                            )
                            
                        })
                    }
                  
                   </div>
           </div>
           <h1 className='topic_heading hm2'>Latest Stories</h1>
            <div className='home_latest '>
            
                {
                    value&&value.filter((item)=>(item.id)%20===0).map((item,index)=>{
                        return(
                            <div className="card_content " key={index}>
                            <div className='hm_last'> <h1>{item.heading}</h1>
                                {item.discription}</div>
                           </div>
                             
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Home