import React from 'react';
import react from './../../images/react-2.jpg';
import nodejs from './../../images/nodejs.png';
import expressjs from './../../images/expressjs-3.jpg'
import mongodb from './../../images/mongodb-2.jpg'
import ibmcloudant from './../../images/Cloudant-2.jpg'
import travisci from './../../images/travis-2.jpg'
import github from './../../images/github-2.jpg'
import java from './../../images/java.jpg'
import {Button, Row, Col} from "react-bootstrap"
import nodejs1 from './../../images/nodejs.jpg'
import js from './../../images/js1-2.jpg'
import ts from './../../images/ts-2.jpg'
import nestjs from './../../images/nestjs-2.jpg'
import angular from './../../images/Angular-3.jpg'
import nextjs from './../../images/nextjs-2.jpg'
import couchdb from './../../images/couchdb-2.jpg'
import jenkins from './../../images/jenkins-2.jpg'
import redux from './../../images/redux-2.jpg'

function Skills() {
    return (
        <div className="Container">

            <div className="skill-container">
                <Row>
                    <Col xs={12} md={4} className="skills-box">
                        <div className="skill-title">
                            Langugages
                        </div>
                    </Col>
                    <Col xs={12} md={8} className="skills-box row-image">
                        {/** 
                         * <Row>
                            <Col>
                            <img src={nodejs1} ></img>
                            </Col>
                            <Col>
                            <img src={js} ></img>
                            </Col>
                        </Row>
                        */}
                        <div className="skill-row">
                            
                            <div className="skill-image">
                                <img src={js} alt={'js'} title={'JavaScript'}></img>
                            </div>
                            <div className="skill-image">
                                <img src={ts} alt={'ts'} title={'TypeScript'}></img>
                            </div>
                            <div className="skill-image">
                                <img src={java} alt={'java'} title={'Java'}></img>
                            </div>
                            <div className="skill-image">
                           
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={4} className="skills-box">
                        <div className="skill-title">
                            Backend
                        </div>

                    </Col>

                    <Col xs={12} md={8} className="skills-box row-image">
                        <div className="skill-row">
                            <div className="skill-image">
                                <img src={nodejs1} alt={'nodejs'} title={"nodejs"}></img>
                            </div>
                            <div className="skill-image">
                                <img src={expressjs} alt={'expressjs'} title={'expressjs'}></img>
                            </div>
                            <div className="skill-image">
                                <img src={nestjs} alt={'nestjs'} title={'nestjs'}></img>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={4} className="skills-box">
                        <div className="skill-title">
                            Front-End
                        </div>

                    </Col>

                    <Col xs={12} md={8} className="skills-box row-image">
                        <div className="skill-row">
                            <div className="skill-image">
                                <img src={react} alt={'reactjs'} title={"reactjs"}></img>
                            </div>
                            <div className="skill-image">
                                <img src={angular} alt={'angular'} title={'Angular'}></img>
                            </div>
                            <div className="skill-image">
                                <img src={nextjs} alt={'nestjs'} title={'nextjs'}></img>
                            </div>
                            <div className="skill-image">
                                <img src={redux} alt={'redux'} title={'redux'}></img>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={4} className="skills-box">
                        <div className="skill-title">
                            Databases
                        </div>

                    </Col>

                    <Col xs={12} md={8} className="skills-box row-image">
                        <div className="skill-row">
                            <div className="skill-image">
                                <img src={mongodb} alt={'mongodb'} title={"mongodb"}></img>
                            </div>
                            <div className="skill-image">
                                <img src={ibmcloudant} alt={'ibmcloudant'} title={'IBM Cloudant'}></img>
                            </div>
                            <div className="skill-image">
                                <img src={couchdb} alt={'couchdb'} title={'couchDB'}></img>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={4} className="skills-box">
                        <div className="skill-title">
                            DevOPS
                        </div>

                    </Col>

                    <Col xs={12} md={8} className="skills-box row-image">
                        <div className="skill-row">
                            <div className="skill-image">
                                <img src={travisci} alt={'travis'} title={"Travis CI/CD"}></img>
                            </div>
                            <div className="skill-image">
                                <img src={jenkins} alt={'jenkins'} title={'jenkins'}></img>
                            </div>
                            
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={4} className="skills-box">
                        <div className="skill-title">
                            Others
                        </div>

                    </Col>

                    <Col xs={12} md={8} className="skills-box row-image">
                        <div className="skill-row">
                            <div className="skill-image">
                                <img src={github} alt={'github'} title={"github"}></img>
                            </div>
                            
                        </div>
                    </Col>
                </Row>

            </div>

        </div>
    )

}

export default Skills;
