import cafepic1 from './assets/images/2.jpg'
import cafepic2 from './assets/images/1.jpg'

function WelcomePage(){
    return(
        <>
            <h1>Welcome To roots Cafe</h1>
            <img
                height={400}
                src={cafepic1}
                alt='An image of the cafe from the street'
            />
            <br />
            <img
                height={400}
                src={cafepic2}
                alt='Image for the families rests and tables'
            />
        </>
    )
}

export default WelcomePage;