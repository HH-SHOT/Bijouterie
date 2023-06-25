"use client"
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
              <Carousel>
                  <div>
                      <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="image1"/>
                      <p className="legend">1</p>
  
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="image2" />
                      <p className="legend">2</p>
  
                  </div>
                  <div>
                      <img src="https://images.unsplash.com/photo-1599708978061-501091150ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80" alt="image3"/>
                      <p className="legend">3</p>
  
                  </div>
              </Carousel>
            </div>
        );
    }
};