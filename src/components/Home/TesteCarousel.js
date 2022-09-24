/* 

function handleClick(n){
        console.log(img + ' ' + n)
        if(n === 3){
            carousel.current.scrollLeft += carousel.current.offsetWidth * 2
            setImg(n)
        }
        if(n === 2 && img>n){
            carousel.current.scrollLeft -= carousel.current.offsetWidth
            setImg(n)
        }

        if(n === 2 && img<n){
            carousel.current.scrollLeft += carousel.current.offsetWidth
            setImg(n)
        }

        if(n === 1 ){
            carousel.current.scrollLeft -= carousel.current.offsetWidth * 2
            setImg(1)
        }

    }
        <Carousel ref={carousel}>
                <div className="slide">
                    <img src={PH_flip} className='slide first' alt='' />
                </div>
                <div className="slide">
                    <img src={jan_korpriva} className='slide' alt=''/>
                </div>
                <div className="slide">
                    <img src={Raphazito} className='slide' alt=''/>
                </div>
                
            </Carousel>

            const Carousel = styled.div`
    width: 100vw;
    height: 60vh;
    margin-bottom: 20px;
    z-index: 0;
    position: relative;
    display: flex;
    flex:1;
    overflow-x: scroll;
    position: relative;
    transition: 1s;

    img{
        width: 100vw;
        height: 60vh;
        mask-image: linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 20%,#ffffff 40%);
        object-fit: cover;
        object-position: center;
        box-sizing: border-box;
        transition: 1s;
    }

    .manual-navigation{
       
        width: 100%;
        
        display: flex;
        justify-content: center;
    }

    .manual-btn{
        border:2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
    }

    .manual-btn:not(:last-child){
        margin-right: 40px;
    }

    .manual-btn:hover{
        background-color: black;
    }

    .manual-btn:active{
        background-color: black;
    }


    @media (max-width: 800px) {
    background-image: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 70%,#ffffff 100%),
    url(${PH_flip});
} 
` 

*/