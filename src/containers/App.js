import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header, Table } from 'semantic-ui-react'
import DeployProcess from '../components/DeployProcess'
import './index.css'
import logo from './image/logo.png'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}


const App = ({actions, children}) => (

  <div className='main'>
    <Container text className='sub-main border border-dark'>
    <div className="slider-container ">
      <Slider {...settings}>
        <div className='d-flex flex-column justify-content-center'>
          <div>
          <h3 className='fsc-5 fs-1 text-success'>Quick Registrations</h3>
          
          </div>
          <div className="p-3 mb-2 bg-transparent text-body align-self-center" style={{width: "18rem"}}>
            <div class="card-body d-flex flex-column justify-content-center">
              <h5 class="card-title text-center fsc-3 fs-1 text-primary">70+</h5>
              <h6 class="card-subtitle mb-2 text-white ">Processed Applications</h6>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-center'>
          <div>
          <h3 className='fsc-5 text-success'>Industrial Lands</h3>
          
          </div>
          <div className="p-3 mb-2 bg-transparent text-body align-self-center" style={{width: "18rem"}}>
            <div class="card-body d-flex flex-column justify-content-center">
              <h5 class="card-title text-center fsc-3 fs-1 text-primary">14+</h5>
              <h6 class="card-subtitle mb-2 text-white">Processed Applications</h6>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-center'>
          <div>
          <h3 className='fsc-5 text-success'>Recognization</h3>
          
          </div>
          <div className="p-3 mb-2 bg-transparent text-body align-self-center" style={{width: "18rem"}}>
            <div class="card-body d-flex flex-column justify-content-center">
              <h5 class="card-title text-center fsc-3 fs-1 text-primary">5</h5>
              <h6 class="card-subtitle mb-2 text-white">Awards</h6>
              <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
    </Container>
    <br/>
    
  </div>
)

const mapStateToProps = state => ({
})


export default connect(
  mapStateToProps,
)(App)
