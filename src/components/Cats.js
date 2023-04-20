import '../styling/cats.css';

function Cats(){
    
    function flip(cat){
        let card = document.querySelector(cat);
        card.classList.toggle('is-flipped');
    }

    function reveal(){
        let header = document.querySelector(".cats-header");

        let windowHeight = window.innerHeight;
        let elementTop = header.getBoundingClientRect().top;
        let elementVisible = 10;

        if(elementTop < windowHeight - elementVisible){
            header.classList.add("active");
        }
        else{
            header.classList.remove("active");
        }
    }

    window.addEventListener("scroll", reveal);
    
    return(
        <div id='Cats' className='cats-section'>
            <div className='cats-header'>
                <h1>My Muses</h1>
                <p>The great thing about working with me is that you not only get a skilled and passionate software engineer, but also these two little rascals. Their cuteness has been the inspiration for the color scheme of this very site. Click on their photos for the true personality behind those dazzling yellow and blue eyes.</p>
            </div>
            <div className='cats-container'>
                <div className='cat'>
                    <h2>Tom</h2>
                    <div id='tom' className="cat-card">
                        <div className='cat-card-inner'>
                            <div id='tom-front' className='cat-card-front' onClick={() => flip('#tom')}></div>
                            <div id='tom-back' className='cat-card-back' onClick={() => flip('#tom')}></div>
                        </div>
                    </div>
                </div>
                <div className='cat'>
                    <h2>Thor</h2>
                    <div id='thor' className="cat-card">
                        <div className='cat-card-inner'>
                            <div id='thor-front' className='cat-card-front' onClick={() => flip('#thor')}></div>
                            <div id='thor-back' className='cat-card-back' onClick={() => flip('#thor')}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cats;